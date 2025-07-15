<?php

namespace Drupal\subrequests;

use Drupal\page_cache\StackMiddleware\PageCache as CorePageCache;
use Symfony\Component\HttpFoundation\Request;

/**
 * Prevents the cache ID for a request from being statically cached.
 *
 * @todo Remove when https://www.drupal.org/i/3050383 is fixed.
 */
final class PageCache extends CorePageCache {

  /**
   * Static cache of cache IDs.
   *
   * @var \SplObjectStorage
   */
  protected $cacheIds;

  /**
   * {@inheritdoc}
   */
  protected function getCacheId(Request $request) {
    if ($this->cacheIds === NULL) {
      $this->cacheIds = new \SplObjectStorage();
    }

    if (!isset($this->cacheIds[$request])) {
      $this->cacheIds[$request] = parent::getCacheId($request);
      $this->cid = NULL;
    }

    return $this->cacheIds[$request];
  }

}
