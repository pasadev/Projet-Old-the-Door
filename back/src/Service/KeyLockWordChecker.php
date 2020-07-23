<?php

namespace App\Service;

class KeyLockWordChecker
{
    /**
     * Check if keyword and lockword are the chapter content
     *
     * @param string $keyword
     * @param string $lockword
     * @param string $content
     * @return bool
     */
    public function checkWords(string $keyword, string $lockword, string $content)
    {
        // Transform the chapter content in a array with one word per column
        $contentArray = preg_split("/[\s,._;!?\"\'+*\/']+/",strtolower($content));

        // Verify if lockword and keyword are in this array
        if (!in_array(strtolower($keyword), $contentArray) || !in_array(strtolower($lockword), $contentArray))
        {
            // If one at least is not present, it's not ok
            return false;
        }
        
        return true;

    }
}