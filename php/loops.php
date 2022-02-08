<?php
  
  $name = ["mita", "miraj", "mila"];
  foreach($name as $element){
      echo $element . "\n";
  }
  
  echo "<br>";

  $us = ["Tuly" => 21, "Miraj" => 26];
  foreach($us as $key => $val){
      echo $key . " " . $val;
  }

  echo "<br>";

  $num = [10, 20, 30];
  for($i=0; $i<count($num); $i++){
      echo $i . " ";
  }