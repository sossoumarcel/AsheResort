<?php

namespace Drupal\Tests\subrequests\Functional;

use Drupal\Core\Url;
use Drupal\subrequests_test\TestPolicy;
use Drupal\Tests\BrowserTestBase;

/**
 * Tests subrequests with Page Cache enabled.
 *
 * @group subrequests
 */
class PageCacheTest extends BrowserTestBase {

  /**
   * {@inheritdoc}
   */
  protected static $modules = [
    'page_cache',
    'subrequests_test',
    'system',
  ];

  /**
   * {@inheritdoc}
   */
  protected $defaultTheme = 'stark';

  /**
   * Tests that subrequests work properly with Page Cache enabled.
   */
  public function testPageCache(): void {
    // Ensure page caching is always allowed in this test.
    TestPolicy::setValue(TestPolicy::ALLOW);

    $account = $this->drupalCreateUser(['issue subrequests']);
    $this->drupalLogin($account);

    // Warm the cache for the first sub-request.
    $this->drupalGet('/subrequests-test/alpha');
    $assert_session = $this->assertSession();
    $assert_session->statusCodeEquals(200);
    $assert_session->responseContains('Alfa');
    // Ensure it was not (somehow) already cached.
    $assert_session->responseHeaderEquals('X-Drupal-Cache', 'MISS');

    $blueprint = [
      [
        'requestId' => 'alpha',
        'uri' => Url::fromUserInput('/subrequests-test/alpha')->toString(),
        'action' => 'view',
      ],
      [
        'requestId' => 'bravo',
        'uri' => Url::fromUserInput('/subrequests-test/bravo')->toString(),
        'action' => 'view',
      ],
    ];

    $options = [
      'query' => [
        'query' => json_encode($blueprint, JSON_UNESCAPED_SLASHES),
      ],
    ];
    $headers = [
      'Content-Type' => 'application/json',
    ];
    $this->drupalGet('/subrequests', $options, $headers);

    $assert_session->statusCodeEquals(207);
    // The request as a whole should be a cache miss.
    $assert_session->responseHeaderEquals('X-Drupal-Cache', 'MISS');

    // There should be two sub-responses.
    $responses = $this->getResponses();
    $this->assertCount(2, $responses);
    // The first response should say Alfa and be a cache hit.
    $this->assertStringContainsString('Alfa', $responses[0]);
    $this->assertMatchesRegularExpression('/X-Drupal-Cache:\s+HIT/', $responses[0]);
    // The second response should say Brava and be a cache miss.
    $this->assertStringContainsString('Brava!', $responses[1]);
    $this->assertMatchesRegularExpression('/X-Drupal-Cache:\s+MISS/', $responses[1]);
  }

  /**
   * Returns the individual sub-responses from the most recent master request.
   *
   * @return string[]
   *   The responses from the most recent master request, in which the headers
   *   and body are separated by a single empty line.
   */
  private function getResponses(): array {
    $session = $this->getSession();
    $matches = [];
    preg_match('/boundary="([a-zA-Z0-9]+)"/', $session->getResponseHeader('Content-Type'), $matches);
    $this->assertArrayHasKey(1, $matches);

    $boundary = '--' . $matches[1];
    $responses = explode($boundary, $session->getPage()->getContent());
    // The first land last sub-responses are just empty strings because the
    // response as a whole begins and ends with the boundary string.
    $responses = array_slice($responses, 1, -1);
    $responses = array_map('trim', $responses);

    // Re-key the array before returning it.
    return array_values($responses);
  }

}
