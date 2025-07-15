<?php

namespace Drupal\Tests\subrequests\Unit;

use Drupal\subrequests\JsonPathReplacer;
use Drupal\subrequests\Normalizer\JsonSubrequestDenormalizer;
use Drupal\subrequests\Subrequest;
use Drupal\subrequests\SubrequestsManager;
use Drupal\subrequests\SubrequestsTree;
use Drupal\Tests\UnitTestCase;
use Prophecy\Argument;
use Prophecy\PhpUnit\ProphecyTrait;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Session\SessionInterface;
use Symfony\Component\HttpKernel\HttpKernelInterface;
use Symfony\Component\Serializer\Encoder\JsonDecode;
use Symfony\Component\Serializer\Serializer;

/**
 * @coversDefaultClass \Drupal\subrequests\SubrequestsManager
 * @group subrequests
 */
class SubrequestsManagerTest extends UnitTestCase {

  use ProphecyTrait;

  /**
   * Subrequest manager.
   *
   * @var \Drupal\subrequests\SubrequestsManager
   */
  protected $sut;

  /**
   * {@inheritdoc}
   */
  protected function setUp(): void {
    parent::setUp();
    $http_kernel = $this->prophesize(HttpKernelInterface::class);
    $http_kernel
      ->handle(Argument::type(Request::class), HttpKernelInterface::MAIN_REQUEST)
      ->will(function ($args) {
        return new Response($args[0]->getPathInfo());
      });
    $serializer = new Serializer(
      [new JsonSubrequestDenormalizer()],
      [new JsonDecode()]
    );
    $this->sut = new SubrequestsManager(
      $http_kernel->reveal(),
      $serializer,
      new JsonPathReplacer()
    );
  }

  /**
   * Test for request method.
   *
   * @covers ::request
   */
  public function testRequest() {
    // Create and populate a tree.
    $tree = new SubrequestsTree();
    $subrequests[] = new Subrequest([
      'uri' => 'lorem',
      'action' => 'view',
      'requestId' => 'foo',
      'headers' => [],
      'waitFor' => ['<ROOT>'],
      '_resolved' => FALSE,
      'body' => 'bar',
    ]);
    $subrequests[] = new Subrequest([
      'uri' => 'ipsum',
      'action' => 'sing',
      'requestId' => 'oop',
      'headers' => [],
      '_resolved' => FALSE,
      'body' => [],
      'waitFor' => ['foo'],
    ]);
    $subrequests[] = new Subrequest([
      'uri' => 'dolor',
      'action' => 'create',
      'requestId' => 'oof',
      'headers' => [],
      '_resolved' => FALSE,
      'body' => 'bar',
      'waitFor' => ['foo'],
    ]);
    $tree->stack([$subrequests[0]]);
    $tree->stack([$subrequests[1], $subrequests[2]]);
    $master_request = new Request();
    $master_request->setSession($this->createMock(SessionInterface::class));
    $tree->setMasterRequest($master_request);
    $actual = $this->sut->request($tree);
    $this->assertSame('<foo>', $actual[0]->headers->get('Content-ID'));
    $this->assertSame('<oop>', $actual[1]->headers->get('Content-ID'));
    $this->assertSame('<oof>', $actual[2]->headers->get('Content-ID'));
    $this->assertSame('/lorem', $actual[0]->getContent());
    $this->assertSame('/ipsum', $actual[1]->getContent());
    $this->assertSame('/dolor', $actual[2]->getContent());
  }

}
