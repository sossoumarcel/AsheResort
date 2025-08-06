<?php

namespace Drupal\Tests\subrequests\Unit\Blueprint;

use Drupal\Core\Cache\CacheableResponse;
use Drupal\subrequests\Blueprint\BlueprintManager;
use Drupal\subrequests\Normalizer\JsonBlueprintDenormalizer;
use Drupal\subrequests\Normalizer\JsonSubrequestDenormalizer;
use Drupal\subrequests\Normalizer\MultiresponseJsonNormalizer;
use Drupal\subrequests\Normalizer\MultiresponseNormalizer;
use Drupal\subrequests\SubrequestsTree;
use Drupal\Tests\UnitTestCase;
use Psr\Log\LoggerInterface;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Serializer\Encoder\JsonDecode;
use Symfony\Component\Serializer\Serializer;

/**
 * @coversDefaultClass \Drupal\subrequests\Blueprint\BlueprintManager
 * @group subrequests
 */
class BlueprintManagerTest extends UnitTestCase {

  /**
   * Blueprint manager.
   *
   * @var \Drupal\subrequests\Blueprint\BlueprintManager
   */
  protected $sut;

  /**
   * {@inheritdoc}
   */
  protected function setUp(): void {
    parent::setUp();
    $serializer = new Serializer(
      [
        new JsonBlueprintDenormalizer($this->createMock(LoggerInterface::class)),
        new JsonSubrequestDenormalizer(),
        new MultiresponseJsonNormalizer(),
        new MultiresponseNormalizer(),
      ],
      [new JsonDecode()]
    );
    $this->sut = new BlueprintManager($serializer);
  }

  /**
   * Test for parse method.
   *
   * @covers ::parse
   */
  public function testParse() {
    $parsed = $this->sut->parse('[]', Request::create('foo'));
    $this->assertInstanceOf(SubrequestsTree::class, $parsed);
    $this->assertSame('/foo', $parsed->getMasterRequest()->getPathInfo());
  }

  /**
   * Test for combineResponses method.
   *
   * @covers ::combineResponses
   */
  public function testCombineResponses() {
    $responses = [
      new Response('foo', 200, ['lorem' => 'ipsum', 'Content-Type' => 'sparrow', 'head' => 'Ha!']),
      new Response('Booh!', 201, ['dolor' => 'sid', 'Content-Type' => 'sparrow']),
    ];
    $combined = $this->sut->combineResponses($responses, 'multipart-related');
    $this->assertInstanceOf(CacheableResponse::class, $combined);
    $this->assertStringContainsString('type=sparrow', $combined->headers->get('Content-Type'));
    $this->assertStringContainsString('Booh!', $combined->getContent());
  }

}
