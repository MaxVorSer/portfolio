<?php

$deposit = 100000;
$actual = 1;
$a = 0.08;

for ($i = 1; $i < 10000; $i++) {
    if ($actual === $deposit * 2){
        break;
    }
if ($i % 3 === 0) {
    $a += 0.02;
}
echo "$a\n";
$actual1 = $deposit + ($deposit * $a);
$actual = (int)$actual1;
var_dump($actual1);
}

echo $actual;

var_dump($actual === $deposit * 2);
var_dump($deposit * 2);
var_dump($actual);