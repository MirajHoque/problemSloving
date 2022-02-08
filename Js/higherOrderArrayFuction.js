// filter : takes an array, expects callback() ; return new array
//          callback is called on each elements of the array ; expects
//          the element as argurment, return true of false based
//          on condition.
//          if true keep the value.
 //used to filter an array.

let value=[5,6,8,10,15,132];

function isEven(num){
    return (num%2==0);
}

let values = value.filter(isEven)
console.log(values);

//using ES6 format
let newValues = value.filter(x => x%2==1)
console.log(newValues);

//map(): used to transform an array
        // taransform(double, triple, binary)
        
const arr = [5,1,3,2,6];

const mapOutput = arr.map(x=>x*2);
console.log(mapOutput);

//Reduce: used when we need to iterate over an array and come up with a single solution(max, sum)
//takes two parameter(accumulator, current)
//accumulator: used to store single value
//current: current element of the array
const reduceOutput = arr.reduce( (acc, curr) => {
    if(curr > acc){
        acc = curr;
    }
    return acc;

},0)
//at last initial value of the accumulator.
console.log(reduceOutput);