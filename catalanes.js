
function factorial(fact){
    let resultado = 1;
    for(let i = 1 ; i <= fact ; i++){
        resultado = resultado * i;
    }
    return(resultado);
}

function catalan(n){
    return factorial(n*2)/(factorial(n+1)*factorial(n))
}