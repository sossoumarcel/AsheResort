<?php

namespace Drupal\simple_oauth;

/**
 * The OAuth2 scope provider interface.
 */
interface Oauth2ScopeProviderInterface extends Oauth2ScopeAdapterInterface {

  /**
   * Checks if the scope has a permission.
   *
   * @param string $permission
   *   The permission to check for.
   * @param \Drupal\simple_oauth\Oauth2ScopeInterface $scope
   *   The scope to check.
   *
   * @return bool
   *   TRUE if the role has the permission, FALSE if not.
   */
  public function scopeHasPermission(string $permission, Oauth2ScopeInterface $scope): bool;

}
