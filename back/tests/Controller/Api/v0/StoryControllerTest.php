<?php

namespace App\Tests\Controller\Api\v0;

use Symfony\Bundle\FrameworkBundle\Test\WebTestCase;


// this class is a test class for check the functionality
// of StoryController
// this is a functionnal test
class StoryControllerTest extends WebTestCase
{
    // this function check if the stories count endpoint
    // return a 200 http code.
    public function testStoryCount()
    {   
        // create a false client for the test
        $client = static::createClient();
        $crawler = $client->request('GET', '/api/v0/stories/count');

        // check if response is succesfuly
        $this->assertResponseIsSuccessful();
    }

    // Check server response when we sent
    // a new story without credentials
    public function testStoryAddWithoutAuth()
    {
        $client = static::createClient();
        $crawler = $client->request('POST' , '/api/v0/stories');
        
        // Check of status code of response
        $this->assertEquals(401, $client->getResponse()->getStatusCode());

    }
}