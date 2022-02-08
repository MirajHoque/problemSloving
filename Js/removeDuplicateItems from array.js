//ques: find and remove duplicate items in array

//step one using for loop and indexOf() approach
var items=[1,2,3,4,5,1,5]; //
var withOutDuplicate=[];
var duplicate=[];
var len=items.length;

for(let i=0; i<len; i++){
  if(withOutDuplicate.indexOf(items[i]) === -1){
    //if elements of i not found in withOutDuplicate
  //if not found indexOF() return -1
  //if WithoutDuplicate never find any elements of item it return -1
  withOutDuplicate.push(items[i]);

  }
  else
  duplicate.push(items[i]);
  

  }
  console.log(withOutDuplicate); //removeing duplicate items
  console.log('duplicate items are:',duplicate);// finding duplicate items

//time complexity (N squere)
  


//step 02 using object in javascript

let a=[1,2,5,2,1,8];
var obj={};
 for(let elements of a){
   //for of  loop(for elements(value) of arrayname)
   obj[elements]=true; //remove duplicate items
   //key of obj= value for keys
 }
 console.log(obj); //return obj not array
 //key has to be unique so it only take unique value

console.log(Object.keys(obj));

//approach 03 using Set in javascript

let b=[1,2,1,1,5,2,7];

let mySet=new Set(a); //intialize set
console.log(mySet); //printing set

let final=[... new Set(a)]; //spread operator
//spread out an array into individual elements
console.log(final);

//approach 04
//Brute force Algorithms: tries all possibilities to find solution.
//this solution is not applicable if items found more than 2 times

let x= [1,2,3,1,4,2]
let l = x.length;

for(let i=0; i<l-1; i++){
    for(let j=i+1; j<l; j++){
        if(x[i] == x[j])
        console.log(x[j])
    }
}