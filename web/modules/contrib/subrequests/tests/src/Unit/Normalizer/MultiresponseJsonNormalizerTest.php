<?php

namespace Drupal\Tests\subrequests\Normalizer;

use Drupal\Component\Serialization\Json;
use Drupal\subrequests\Normalizer\MultiresponseJsonNormalizer;
use Drupal\Tests\UnitTestCase;
use Symfony\Component\HttpFoundation\Response;

/**
 * @coversDefaultClass \Drupal\subrequests\Normalizer\MultiresponseJsonNormalizer
 * @group subrequests
 */
class MultiresponseJsonNormalizerTest extends UnitTestCase {

  /**
   * Json multi response normalizer.
   *
   * @var \Drupal\subrequests\Normalizer\MultiresponseJsonNormalizer
   */
  protected $sut;

  /**
   * {@inheritdoc}
   */
  protected function setUp(): void {
    parent::setUp();
    $this->sut = new MultiresponseJsonNormalizer();
  }

  /**
   * Test for supportsNormalization method.
   *
   * @dataProvider dataProviderSupportsNormalization
   * @covers ::supportsNormalization
   */
  public function testSupportsNormalization($data, $format, $is_supported) {
    $actual = $this->sut->supportsNormalization($data, $format);
    $this->assertSame($is_supported, $actual);
  }

  /**
   * Data provider for testSupportsNormalization.
   */
  public static function dataProviderSupportsNormalization(): array {
    return [
      [[new Response('')], 'json', TRUE],
      [[], 'json', FALSE],
      [[new Response('')], 'fail', FALSE],
      [NULL, 'json', FALSE],
      [[new Response(''), NULL], 'json', FALSE],
    ];
  }

  /**
   * Test for normalize method.
   *
   * @covers ::normalize
   */
  public function testNormalize() {
    $sub_content_type = $this->getRandomGenerator()->string();
    $data = [
      new Response('Foo!', 200, ['Content-ID' => '<f>']),
      new Response('Bar', 200, ['Content-ID' => '<b>']),
    ];
    $actual = $this->sut->normalize($data, NULL, ['sub-content-type' => $sub_content_type]);
    $this->assertSame(
      'application/json',
      $actual['headers']['Content-Type']
    );
    $this->assertSame(
      $sub_content_type,
      $actual['headers']['X-Sub-Content-Type']
    );
    $parsed = Json::decode($actual['content']);
    $this->assertSame('Foo!', $parsed['f']['body']);
    $this->assertSame('Bar', $parsed['b']['body']);
  }

}
