<?php

namespace Drupal\subrequests\Normalizer;

use Drupal\Component\Serialization\Json;
use Drupal\subrequests\Subrequest;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Serializer\Normalizer\DenormalizerInterface;

/**
 * Creates a request object for each Subrequest.
 */
class JsonSubrequestDenormalizer implements DenormalizerInterface {

  /**
   * Denormalizes data back into an object of the given class.
   *
   * @param mixed $data
   *   Data to restore.
   * @param string $class
   *   The expected class to instantiate.
   * @param string $format
   *   Format the given data was extracted from.
   * @param array $context
   *   Options available to the denormalizer.
   *
   * @return object
   *   Return denormalized data as object.
   */
  public function denormalize($data, $class, $format = NULL, array $context = []): mixed {
    /** @var \Drupal\subrequests\Subrequest $data */
    $path = parse_url($data->uri, PHP_URL_PATH);
    $query = parse_url($data->uri, PHP_URL_QUERY) ?: [];
    if (isset($query) && !is_array($query)) {
      $_query = [];
      parse_str($query, $_query);
      $query = $_query;
    }

    /** @var \Symfony\Component\HttpFoundation\Request $master_request */
    $master_request = $context['master_request'];

    $request = Request::create(
      $path,
      static::getMethodFromAction($data->action),
      empty($data->body) ? $query : (array) $data->body,
      $master_request->cookies ? $master_request->cookies->all() : [],
      $master_request->files ? $master_request->files->all() : [],
      $master_request->server ? $master_request->server->all() : [],
      empty($data->body) ? '' : Json::encode($data->body)
    );
    // Maintain the same session as in the master request.
    $session = $master_request->getSession();
    $request->setSession($session);
    // Replace the headers by the ones in the subrequest.
    foreach ($data->headers as $name => $value) {
      $request->headers->set($name, $value);
    }
    $this::fixBasicAuth($request);

    // Add the content ID to the sub-request.
    $content_id = empty($data->requestId)
      ? md5(serialize($data))
      : $data->requestId;
    $request->headers->set('Content-ID', '<' . $content_id . '>');

    return $request;
  }

  /**
   * Checks whether the given class is supported for denormalization.
   *
   * @param mixed $data
   *   Data to denormalize from.
   * @param string $type
   *   The class to which the data should be denormalized.
   * @param string $format
   *   The format being deserialized from.
   * @param array $context
   *   Options available to the denormalizer.
   *
   * @return bool
   *   Return whether the support denormalization.
   */
  public function supportsDenormalization($data, $type, $format = NULL, array $context = []): bool {
    return $type === Request::class
      && $data instanceof Subrequest;
  }

  /**
   * {@inheritdoc}
   */
  public function getSupportedTypes(?string $format): array {
    return [
      Request::class => FALSE,
      Subrequest::class => FALSE,
    ];
  }

  /**
   * Gets the HTTP method from the list of allowed actions.
   *
   * @param string $action
   *   The action name.
   *
   * @return string
   *   The HTTP method.
   */
  public static function getMethodFromAction($action) {
    switch ($action) {
      case 'create':
        return Request::METHOD_POST;

      case 'update':
        return Request::METHOD_PATCH;

      case 'replace':
        return Request::METHOD_PUT;

      case 'delete':
        return Request::METHOD_DELETE;

      case 'exists':
        return Request::METHOD_HEAD;

      case 'discover':
        return Request::METHOD_OPTIONS;

      default:
        return Request::METHOD_GET;
    }
  }

  /**
   * Adds the decoded username and password headers for Basic Auth.
   *
   * @param \Symfony\Component\HttpFoundation\Request $request
   *   The request to fix.
   */
  protected static function fixBasicAuth(Request $request) {
    // The server will not set the PHP_AUTH_USER and PHP_AUTH_PW for the
    // subrequests if needed.
    if ($request->headers->has('Authorization')) {
      $header = $request->headers->get('Authorization');
      if (strpos($header, 'Basic ') === 0) {
        [$user, $pass] = explode(':', base64_decode(substr($header, 6)));
        $request->headers->set('PHP_AUTH_USER', $user);
        $request->headers->set('PHP_AUTH_PW', $pass);
      }
    }
  }

}
