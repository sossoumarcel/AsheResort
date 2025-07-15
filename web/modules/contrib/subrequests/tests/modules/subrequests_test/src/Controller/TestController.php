<?php

namespace Drupal\subrequests_test\Controller;

use Drupal\Core\Cache\CacheableJsonResponse;
use Drupal\Core\Controller\ControllerBase;

/**
 * A controller returning simple responses for testing.
 */
class TestController extends ControllerBase {

  /**
   * Returns a JSON response that says "Alfa".
   *
   * @return \Drupal\Core\Cache\CacheableJsonResponse
   *   The response object.
   */
  public function alpha(): CacheableJsonResponse {
    return new CacheableJsonResponse('Alfa');
  }

  /**
   * Returns a JSON response that says "Brava!".
   *
   * @return \Drupal\Core\Cache\CacheableJsonResponse
   *   The response object.
   */
  public function bravo(): CacheableJsonResponse {
    return new CacheableJsonResponse('Brava!');
  }

}
