<?php


$series = ['A', 'B'];

$seriesLength = count($series);
$number = [];
$sort = [];

 foreach ($series as $a){

    for ($i=0; $i < 1000; $i++){
 $b = rand(0, 999);
    if ($b < 10){
    $b = "0$b";
   }if ($b < 100){
       $b = "0$b";
     }
    foreach ($series as $c){
               foreach ($series as $d){
                   $number[] = "$a$b$c$d";
        }
    }
      }
   }
 var_dump($number);

//foreach ($number as $item){
//echo $item ;
  // var_dump($item);
//}

foreach ($number as $item){
    $as = strpos($item, '000');

    //var_dump($as === 1);
      if (strpos($item, '000') === 1 || strpos($item, '111') === 1 || strpos($item, '222') === 1 || strpos($item, '333') === 1 || strpos($item, '444') === 1 || strpos($item, '555') === 1 || strpos($item, '666') === 1 || strpos($item, '777') === 1 || strpos($item, '888') === 1 || strpos($item, '999') === 1 ){
       $sort[] = $item;
    }else{
          continue;
      }

    }

var_dump($sort);

$adq = 'A000';
$as1 = strpos($adq, '000');

var_dump($as1 === 1);