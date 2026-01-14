<?php

interface EventListenerInterface {
    /**
     * @param string $nameMethodClass
     * @param callable $functionCallable
     */
    public function attachEvent (string $nameMethodClass, callable $functionCallable);
    /**
     * @param string $nameMethodClass
     */
    public function detouchEvent(string $nameMethodClass);
}