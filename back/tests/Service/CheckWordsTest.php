<?php

namespace App\tests\Service;

use App\Service\KeyLockWordChecker;
use PHPUnit\Framework\TestCase;

class CheckWordsTest extends TestCase
{
    /**
     * Test function to confirm that function checkWords
     * from KeyLockWordChecker works.
     *
     * @return void
     */
    public function testCheckWords()
    {
        $checker = new KeyLockWordChecker;
        $paragraph = "L’ascenseur démarra tout seul après que la porte se soit fermée. Il descendait et vit une lumière s'allumer. Il n’arrêtait pas de descendre. Puis, il s’arrêta enfin. La porte s’ouvrit. Et David eut la stupeur de sa vie. Devant lui se déployait un complexe informatique. Une vingtaine de personnes se déplaçaient d’un poste à l’autre regardant au passage les écrans géants muraux situés au fond de la salle qui restaient mystérieusement éteints.";
        $goodKeyWord = "allumer";
        $goodLockWord = "écrans";
        $badKeyWord = "tester";
        $badLockWord = "application";

        $this->assertTrue($checker->checkWords($goodKeyWord, $goodLockWord, $paragraph));
        $this->assertFalse($checker->checkWords($badKeyWord, $badLockWord, $paragraph));
    }
}