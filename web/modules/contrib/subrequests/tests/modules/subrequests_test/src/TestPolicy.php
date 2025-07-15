<?php

namespace Drupal\subrequests_test;

use Drupal\Core\PageCache\RequestPolicyInterface;
use Drupal\Core\State\StateInterface;
use Symfony\Component\HttpFoundation\Request;

/**
 * A request policy that returns a specific pre-set value.
 */
class TestPolicy implements RequestPolicyInterface {

  /**
   * The state service.
   *
   * @var \Drupal\Core\State\StateInterface
   */
  protected $state;

  /**
   * Constructs a TestPolicy object.
   *
   * @param \Drupal\Core\State\StateInterface $state
   *   State service.
   */
  public function __construct(StateInterface $state) {
    $this->state = $state;
  }

  /**
   * Sets the value this policy will return.
   *
   * @param string|null $value
   *   The value this policy will return. Should be one of the ALLOW or DENY
   *   constants of \Drupal\Core\PageCache\RequestPolicyInterface, or NULL
   *   to have no opinion.
   */
  public static function setValue(?string $value): void {
    \Drupal::state()->set('subrequests_test_request_policy', $value);
  }

  /**
   * {@inheritdoc}
   */
  public function check(Request $request) {
    return $this->state->get('subrequests_test_request_policy');
  }

}
