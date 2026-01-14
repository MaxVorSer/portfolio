<?php

require_once 'C:\xampp\htdocs\php-developer-base\Module-11\interfaces\EventListenerInterface.php';
require_once 'C:\xampp\htdocs\php-developer-base\Module-11\interfaces\LoggerInterface .php';

abstract class Storage implements LoggerInterface,EventListenerInterface
{
    public array $storage;
    public string $directed;

    /**
     * @param TelegraphText $obj
     *
     * @return string
     */
    abstract function create(TelegraphText $obj): string;

    /**
     * @param TelegraphText $obj
     *
     * @return object
     */
    abstract function read(TelegraphText $obj): object;

    /**
     * @param TelegraphText $obj
     * @param TelegraphText $changeObj
     *
     * @return void
     */
    abstract function update(TelegraphText $obj, TelegraphText $changeObj): void;

    /**
     * @param TelegraphText $obj
     *
     * @return void
     */
    abstract function delete(TelegraphText $obj): void;

    /**
     * @return array
     */
    abstract function list(): array;

    /**
     * @param string $textError
     */
    abstract function logMessage(string $textError);

    /**
     * @param int $countMessages
     *
     * @return array
     */
    abstract function lastMessage(int $countMessages): array;

    /**
     * @param string $nameMethodClass
     * @param callable $functionCallable
     */
    abstract function attachEvent(string $nameMethodClass,callable $functionCallable);

    /**
     * @param string $nameMethodClass
     */
    abstract function detouchEvent(string $nameMethodClass);
}