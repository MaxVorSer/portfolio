<?php

$a = [
    'a' => ' word a',
    'b' => ' word b',
    'c' => ' word c',
 ];

$key = array_keys($a);
var_dump($key);

$str = implode(' ',$key );
echo $str;