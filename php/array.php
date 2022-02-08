<?php
  
  $myArray = [1,2,3];
  print_r($myArray);
  echo "<br>";

  $child = array("Mita", "Miraj", "Mila");
  print_r($child);
  echo "<br>";
  echo $child[1];
  echo "<br>";

  //Associative Array
  $siblings = ["Mita"=> 28, "Miraj" => 26, "Mila" => 17];
    echo "<pre>";
    print_r($siblings);
    echo "<pre>";
 
   echo $siblings['Miraj'];
 


?>