/*
ques: print the output below
     *
   * * *
 * * * * *

*/

/*
logic: 

pre-requisite: matrices (nested for loop)

no of rows =n
no of colums = 2n-1

range of * : condition ( n-(row-1) to n+(row-1)) 


*/

//implementaion

//var n =3;

function pyramidPattern(n){
    for(let i=1; i<=n; i++){
        for(let j=1; j<=2*n-1; j++){
            if(j >= n-(i-1) && j <= n+(i-1)){
                console.log("*");
            }
            else
            console.log("");
        }
        console.log("\n");
    }
}

pyramidPattern(3);

//by deafult console.log() goes to the new line.
//instead of console.log() we need to use document.writeline()