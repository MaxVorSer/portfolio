<?php

$a = rand(1,9);
$b = 10*rand(1,3);

var_dump($a, $b);

$c = $a*$b;
$d = $c += rand(0, 100);

switch (true){
    case($d >= 0 && $c < 100):
        echo "c >= 0 но < 100";
        break;
    case($d >= 100 && $c < 200):
        echo "c >= 100 но < 200";
        break;
    case($d >= 200 && $c < 300):
        echo "c >= 200 но < 300";
        break;
    default :
        echo "нет варианта";
}