<?php

$items = [1,2,3,4,5,1,5];
$len = count($items);

//finding duplicate  
for($i=0; $i<$len-1; $i++){
    for($j=$i+1; $j<$len; $j++){
        if($items[$i] == $items[$j])
        echo $items[$j];
        echo " ";
    }
}