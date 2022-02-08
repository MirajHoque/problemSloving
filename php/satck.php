<?php

class Stack{
    public $myStackmyStack = [];
    public $top;

   function __construct(){
       $this->top =-1;
   }

   function isEmpty(){
       if($this->top == -1)
       echo "Stack is Empty.";
       echo "<br>";
   }

   function push($x){
       array_push($this->myStackmyStack, $x);
       $this->top++;
   }

   function pop(){
       if($this->top != -1)
       array_pop($this->myStackmyStack);
       $this->top--;
   }
}

$stk = new Stack();
$stk->isEmpty();
$stk->push(10);
$stk->push(20);
$stk->push(30);
$stk->push(40);

print_r($stk->myStackmyStack);
echo "<br>"; 
echo $stk->top;

$stk->pop();
echo "<br>";
print_r($stk->myStackmyStack);