function alternar(i){
    if(i%2==0){
        return i*-1;
    }else{
        return i*1;
    }
}

let senx=0;
let x=1;

function factorial (n){
    let total=1;

    for(i=1;i<=n;i++){
        total*=i;
    }
    return total;
}


for(i=0;i<=10;i+2){
    senx+=(Math.pow(x,i))/factorial(i);
    alternar(senx);
}
console.log(senx);

