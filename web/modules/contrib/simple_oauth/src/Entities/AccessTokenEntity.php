<?php

namespace Drupal\simple_oauth\Entities;

use Drupal\Component\Datetime\TimeInterface;
use Drupal\Core\DependencyInjection\AutowireTrait;
use Drupal\Core\DependencyInjection\ContainerInjectionInterface;
use Drupal\Core\Extension\ModuleHandlerInterface;
use Lcobucci\JWT\Configuration;
use Lcobucci\JWT\Signer\Key\InMemory;
use Lcobucci\JWT\Signer\Rsa\Sha256;
use Lcobucci\JWT\Token\RegisteredClaims;
use League\OAuth2\Server\Entities\AccessTokenEntityInterface;
use League\OAuth2\Server\Entities\Traits\AccessTokenTrait;
use League\OAuth2\Server\Entities\Traits\EntityTrait;
use League\OAuth2\Server\Entities\Traits\TokenEntityTrait;
use Psr\Log\LoggerAwareInterface;
use Psr\Log\LoggerAwareTrait;

/**
 * The entity for the Access token.
 */
class AccessTokenEntity implements AccessTokenEntityInterface, ContainerInjectionInterface, LoggerAwareInterface {

  use AccessTokenTrait, AutowireTrait, LoggerAwareTrait, TokenEntityTrait, EntityTrait;

  public function __construct(
    protected ModuleHandlerInterface $moduleHandler,
    protected TimeInterface $time,
  ) {
  }

  /**
   * {@inheritdoc}
   */
  // phpcs:ignore
  public function convertToJWT() {
    $private_claims = [];
    $this->moduleHandler->alter('simple_oauth_private_claims', $private_claims, $this);
    if (!is_array($private_claims)) {
      $message = 'An implementation of hook_simple_oauth_private_claims_alter ';
      $message .= 'returns an invalid $private_claims value. $private_claims ';
      $message .= 'must be an array.';
      throw new \InvalidArgumentException($message);
    }

    $id = $this->getIdentifier();
    $now = new \DateTimeImmutable('@' . $this->time->getCurrentTime());
    $key = InMemory::plainText($this->privateKey->getKeyContents());
    $config = Configuration::forSymmetricSigner(new Sha256(), $key);
    $user_id = $this->getUserIdentifier();

    $builder = $config->builder()
      ->permittedFor($this->getClient()->getIdentifier())
      ->identifiedBy($id)
      ->withHeader('jti', $id)
      ->issuedAt($now)
      ->canOnlyBeUsedAfter($now)
      ->expiresAt($this->getExpiryDateTime())
      ->withClaim('scope', $this->getScopes());

    if ($user_id) {
      $builder = $builder->relatedTo($user_id);
    }
    if (isset($private_claims['iss'])) {
      $builder = $builder->issuedBy($private_claims['iss']);
    }
    if (isset($private_claims['sub'])) {
      $builder = $builder->relatedTo($private_claims['sub']);
    }

    foreach ($private_claims as $claim_name => $value) {
      if (in_array($claim_name, RegisteredClaims::ALL)) {
        // Skip registered claims, as they are added above already.
        continue;
      }

      try {
        $builder = $builder->withClaim($claim_name, $value);
      }
      catch (\Exception $e) {
        $this->logger->error('Could not add private claim @claim_name to token: @error_message', [
          '@claim_name' => $claim_name,
          '@error_message' => $e->getMessage(),
        ]);
      }
    }

    return $builder->getToken($config->signer(), $config->signingKey());
  }

}
