<?php

  class Queue{

    public $num = [];
    public $len;
    function __construct()
    {
        $this->len = -1;
    }

    function isEmpty(){
        if($this->len = -1)
        echo "Queue is empty";
    }

    function enQueue($x){
        array_push($this->num, $x);
        $this->len++;
    }

    function deQueue(){
        if($this->len != -1)
        {
            array_shift($this->num);
        $this->len++;
        }
        else
        echo "underflow";
    }
  }

  $q = new Queue();
  $q->isEmpty();
  $q->enQueue(10);
  $q->enQueue(20);
  $q->enQueue(30);
  echo "<br>";

  print_r($q->num);

  $q->deQueue();

  print_r($q->num);