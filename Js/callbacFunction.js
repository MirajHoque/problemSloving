//callback function: function that are passed in another function as argument.

function show(){
    console.log("show me");
}

function showText(callback){
    callback();
}

showText(show);


let add = (a,b) => a+b;
let sub = (a,b) => a-b;

function operation(x, y, myCallback){
    return myCallback(x,y);
}

console.log(operation(5, 5, add));
console.log(operation(100, 10, sub));