let ex=0;

let x=1;
function factorial (n){
    let total=1;

    for(i=1;i<=n;i++){
        total*=i;
    }
    return total;
}

for(i=0;i<10;i++){
    ex+=(Math.pow(x,i))/factorial(i);    
}
console.log("Result:"+ex);

