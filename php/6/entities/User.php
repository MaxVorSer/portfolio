<?php

require_once './interfaces/EventListenerInterface.php';



abstract class User implements EventListenerInterface
{
    protected int $id;
    protected string $name;
    protected string $role;

    /**
     * @return array
     */
    abstract function getTextsToEdit(): array;

    /**
     * @param string $nameMethodClass
     * @param callable $functionCallable
     */
    abstract public function attachEvent(string $nameMethodClass,callable $functionCallable);

    /**
     * @param string $nameMethodClass
     */
    abstract public function detouchEvent(string $nameMethodClass);
}