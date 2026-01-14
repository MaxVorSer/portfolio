<?php

$word = 'caesar cipher';
$shit = 3;
$a = strlen($word);
$code = '';
var_dump($a);
for($i=0; $i < $a; $i++){
   $ord = ord($word[$i]);
if ($ord === 32){
    $b = chr($ord);
    $code .= $b;
    continue;
}
    $ord = $ord + $shit;
    $b = chr($ord);
    $code .= $b;
};

var_dump($code);

$word2 = $code;
var_dump($word2);
$c = strlen($word2);

$decoding = '';
for($i=0; $i < $c; $i++){
    $ord = ord($word2[$i]);
    if ($ord === 32){
        $b = chr($ord);
        $decoding .= $b;
        continue;
    }
    $ord = $ord - $shit;
    $b = chr($ord);
    $decoding .= $b;
};

echo $decoding;