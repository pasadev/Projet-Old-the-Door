<?php

namespace App\Tests\Service;

use App\Service\Slugger;
use PHPUnit\Framework\TestCase;
use Symfony\Component\String\Slugger\AsciiSlugger;

// this class is a test class for check if
// Slugger service work like we want
// This is a unit test
class SluggerTest extends TestCase
{
    public function testSlugger()
    {
        //We incorporate the Slugger service because we 
        // cannot benefit autowiring
        $slugger = new Slugger(new AsciiSlugger());

        // Data sent
        $slug = $slugger->slugify("L'apothéose des développeurs");

        // Here we compare that the received value 
        // is equal to the expected value
        // expected value : first parameter
        // received value : second parameter
        $this->assertEquals("l-apotheose-des-developpeurs", $slug);

        // here we compare the type of received value;
        $this->assertIsString($slug);
    }
}
