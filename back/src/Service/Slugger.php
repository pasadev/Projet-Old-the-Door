<?php

namespace App\Service;

use Symfony\Component\String\Slugger\SluggerInterface;

class Slugger
{

    //Initialize the slugger
    private $asciiSlugger;

    //Inject the asciiSlugger in the construct
    public function __construct(SluggerInterface $asciiSlugger)
    {
        $this->asciiSlugger = $asciiSlugger;
    }

    public function slugify(string $string):string
    {
        //Lower the string
        $string = strtolower($string);

        //Return the slugged string
        return $this->asciiSlugger->slug($string);
    }

}