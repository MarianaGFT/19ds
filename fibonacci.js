//0(n) Lineal
function fib(a){
    let array=[0,1];

    for(let i=2;i<a+1;i++){
        array.push(array[i-2]+array[i-1])
    }
    return array[a];
}
fib(4);