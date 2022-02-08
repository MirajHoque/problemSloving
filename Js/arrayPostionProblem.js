// question: add elements into specific positons
let a = [1,2,3,4];
let position = 1; //index 0
let value = 10; //value want to add in this postion
let len = a.length;

//logic: shift element into (+1) index position

for(let i=len-1; i>=position-1; i--){
    a[i+1] = a[i];
}
a[position-1] = value;

console.log(a);

// question: remove element from specific specific position

let b =[1,2,3,4];
var index = 2; 
var l = b.length;

//logic: start from index(because value before index are same) 
//       then left shift the elements

for(let k=index; k<l; k++){
    b[k] = b[k+1];
}
console.log(b);

// question: Remove specific value from array
var x = [10,20,30,40,50];
var val = 30;
var leng = x.length;

//logic: 1st check if the value is exits -> using for loop
    //   if the value is exits then left shift element -> using another for loop

for(let m=0; m<leng; m++){
    if(x[m] == val){
        for(let n=m; n<leng; n++){
            x[n] = x[n+1];
        }
    }
}

console.log(x);