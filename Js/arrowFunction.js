//anonymous function(function that has no name)
var magic=function()
   {
    return new Date();
    };

var magic=()=>
    {
    return new Date();
    }

//if only one value is return it can not be mandatory to use {}.

const magics=()=> new Date(); //no parameter

//multiple parameter
var concatation=(arr1,arr2)=> arr1.concat(arr2); 
console.log(concatation([1,2],[1,2,3]));

//concat():used to join two or more string or array.
// return new string or array


//single parameter
let isPositive=x=>x>0;
console.log(isPositive(5));


