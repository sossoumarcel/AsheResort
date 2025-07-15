<?php

namespace Drupal\simple_oauth\Plugin\ScopeGranularity;

use Drupal\Component\Plugin\Exception\PluginException;
use Drupal\Core\Entity\EntityTypeManagerInterface;
use Drupal\Core\Form\FormStateInterface;
use Drupal\Core\Plugin\ContainerFactoryPluginInterface;
use Drupal\Core\Session\AccountInterface;
use Drupal\Core\StringTranslation\TranslatableMarkup;
use Drupal\simple_oauth\Attribute\ScopeGranularity;
use Drupal\simple_oauth\Oauth2ScopeInterface;
use Drupal\simple_oauth\Plugin\ScopeGranularityBase;
use Drupal\user\RoleStorage;
use Symfony\Component\DependencyInjection\ContainerInterface;

/**
 * The role scope granularity plugin.
 */
#[ScopeGranularity(
  Oauth2ScopeInterface::GRANULARITY_ROLE,
  new TranslatableMarkup('Role'),
)]
class Role extends ScopeGranularityBase implements ContainerFactoryPluginInterface {

  public function __construct(
    array $configuration,
    string $pluginId,
    array $pluginDefinition,
    protected EntityTypeManagerInterface $entityTypeManager,
  ) {
    parent::__construct($configuration, $pluginId, $pluginDefinition);
  }

  /**
   * {@inheritdoc}
   */
  public static function create(ContainerInterface $container, array $configuration, $pluginId, $pluginDefinition) {
    return new static(
      $configuration,
      $pluginId,
      $pluginDefinition,
      $container->get('entity_type.manager'),
    );
  }

  /**
   * {@inheritdoc}
   */
  public function defaultConfiguration() {
    return [
      'role' => NULL,
    ];
  }

  /**
   * {@inheritdoc}
   */
  public function validateConfiguration(array $configuration): void {
    if (empty($configuration['role'])) {
      throw new PluginException('The "role" configuration value is required.');
    }

    $role_storage = $this->entityTypeManager->getStorage('user_role');
    $user_roles = $role_storage->loadMultiple();
    if (!array_key_exists($configuration['role'], $user_roles)) {
      throw new PluginException(sprintf('Role "%s" is undefined.', $configuration['role']));
    }
  }

  /**
   * {@inheritdoc}
   */
  public function hasPermission(string $permission): bool {
    $role = $this->getConfiguration()['role'];

    $lockedRoles = [
      AccountInterface::AUTHENTICATED_ROLE,
      AccountInterface::ANONYMOUS_ROLE,
    ];
    $rolesToCheck = !in_array($role, $lockedRoles)
      ? [AccountInterface::AUTHENTICATED_ROLE, $role]
      : [$role];

    $role_storage = $this->entityTypeManager->getStorage('user_role');
    assert($role_storage instanceof RoleStorage);
    return $role_storage->isPermissionInRoles($permission, $rolesToCheck);
  }

  /**
   * {@inheritdoc}
   */
  public function buildConfigurationForm(array $form, FormStateInterface $form_state) {
    $form['role'] = [
      '#type' => 'select',
      '#title' => $this->t('Role'),
      '#options' => $this->getRoleOptions(),
      '#default_value' => $this->getConfiguration()['role'],
      '#required' => TRUE,
    ];
    return $form;
  }

  /**
   * Gets the role options.
   *
   * @return \Drupal\Core\StringTranslation\TranslatableMarkup[]
   *   Returns the role options.
   */
  protected function getRoleOptions(): array {
    $options = [];
    $role_storage = $this->entityTypeManager->getStorage('user_role');
    foreach ($role_storage->loadMultiple() as $role) {
      $options[$role->id()] = $role->label();
    }

    return $options;
  }

}
