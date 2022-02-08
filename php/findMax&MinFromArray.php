<?php

$marks = [69, 92, 70, 96, 99];
$max = $marks[0];
$min = $marks[0];
$len = count($marks);

for($i=0; $i<$len; $i++){
    if($marks[$i] < $min)
     $min = $marks[$i];
     if($marks[$i] > $max)
     $max = $marks[$i]; 
}

echo $max;
echo "<br>";
echo $min;