<?php

interface LoggerInterface {
    /**
     * @param string $textError
     */
    public function logMessage(string $textError);
    /**
     * @param int $countMessages
     */
    public function lastMessage(int $countMessages);
}