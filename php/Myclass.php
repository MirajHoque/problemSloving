<?php
  
  class Fruit{

      public $name;
      public $color;

      function __construct($fruitName)
      {
          $this->name = $fruitName;
      }

      function getName(){
          return $this->name;
      }
      function color($color){
           $this->color = $color;
           return $this->color;
      }
  }
  $obj = new Fruit("Mango");
  echo $obj->getName();
  echo $obj->color("yellow");
?>