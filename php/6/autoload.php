<?php

function loadFileStorage($className)
{
require_once 'entities/' . $className . '.php';
}

function Storage($className)
{
    require_once 'entities/' . $className . '.php';
}

function TelegraphText($className)
{
    require_once 'entities/' . $className . '.php';
}

function User($className)
{
    require_once 'entities/' . $className . '.php';
}

spl_autoload_register('loadFileStorage');
spl_autoload_register('Storage');
spl_autoload_register('TelegraphText');
spl_autoload_register('User');

