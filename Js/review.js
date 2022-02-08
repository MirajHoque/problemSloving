let a = [1,2,3,4];
let len = a.length;
let value =3;

for(let i=0; i<len; i++){
    if(a[i] == value){
        for(let j=i; j<len; j++){
            a[j] = a[j+1];
        }
    }
}
//[position-1] = value;
console.log(a);