function factorial (num){
    let total=1;

    for(i=1;i<=num;i++){
        total*=i;
    }
    return total;
}

var n=11,r=3; 
nr=n-r;
permnutacion=(factorial(n))/(factorial(nr));
console.log(permnutacion);
