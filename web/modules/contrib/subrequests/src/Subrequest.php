<?php

namespace Drupal\subrequests;

/**
 * Value object containing a Subrequest.
 */
class Subrequest {

  /**
   * The request ID.
   *
   * @var string
   */
  public $requestId;

  /**
   * The parsed JSON.
   *
   * @var array
   */
  public $body;

  /**
   * Array of key values.
   *
   * @var array
   */
  public $headers;

  /**
   * The parent subrequests.
   *
   * @var string[]
   */
  public $waitFor;

  /**
   * Is the subrequest resolved?
   *
   * @var bool
   */
  // phpcs:ignore
  public $_resolved;

  /**
   * The URI to request.
   *
   * @var string
   */
  public $uri;

  /**
   * The action to perform.
   *
   * @var string
   */
  public $action;

  /**
   * {@inheritDoc}
   */
  public function __construct($values) {
    $this->requestId = $values['requestId'];
    $this->body = $values['body'];
    $this->headers = $values['headers'];
    $this->waitFor = $values['waitFor'];
    $this->_resolved = $values['_resolved'];
    $this->uri = $values['uri'];
    $this->action = $values['action'];
  }

  /**
   * Serialize the data.
   */
  public function __toString() {
    return serialize($this);
  }

}
