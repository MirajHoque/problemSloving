<?php
  
  //arary_merge(): merge two or more arrays into single arary.
  $fruits = ["Mango", "Banana", "Watermelon"];
  $vegetables = ["Potato", "Cucumber"];
  $myFood = array_merge($fruits, $vegetables);
  echo "<pre>";
  print_r($myFood);
  echo "</>";

  //array_push() : insert one more element at the end of the array.
  //               takes multiple parameter name of the array, and values. 
  $family = ["Miraj", "Tuly", "SSD", "Kittus", "Samira"];
  array_push($family, "Ifty");
  echo "<pre>";
  print_r($family);

  //array_pop(): remove last element from the array
  $courses = ["Java", "PHP", "Python"];
  array_pop($courses);
  echo "<pre>";
  print_r($courses);

?>