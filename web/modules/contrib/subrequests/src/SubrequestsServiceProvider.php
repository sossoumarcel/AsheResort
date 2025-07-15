<?php

namespace Drupal\subrequests;

use Drupal\Core\DependencyInjection\ContainerBuilder;
use Drupal\Core\DependencyInjection\ServiceProviderBase;

/**
 * Modifies container service definitions.
 *
 * @todo Remove when https://www.drupal.org/i/3050383 is fixed.
 */
final class SubrequestsServiceProvider extends ServiceProviderBase {

  /**
   * {@inheritdoc}
   */
  public function alter(ContainerBuilder $container) {
    parent::alter($container);

    if (array_key_exists('page_cache', $container->getParameter('container.modules'))) {
      $container->getDefinition('http_middleware.page_cache')
        ->setClass(PageCache::class);
    }
  }

}
