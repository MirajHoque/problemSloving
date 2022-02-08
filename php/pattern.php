<?php

/*
question: print the pattern below
*
* *
* * *

*/
//logic: pre-requisite matrices(nested for loop)

//$n =3;

function pattern($n)
{
    for($i=0; $i<$n; $i++){
        for($j=0; $j<=$i; $j++){
            echo "*" ." ";
        }
        echo "</br>";
    }
}

pattern(3);

/*
question: print the pattern below
1
2 2
3 3 3

*/
//logic: pre-requisite matrices(nested for loop)

function numberPattern($n){
    for($i=0; $i<$n; $i++){
        for($j=0; $j<=$i; $j++){
            echo "$i" . " ";
        }
        echo "<br>";
    }
}

numberPattern(5);

?>
