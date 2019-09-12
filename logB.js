var B=prompt("Elige una base para el logaritmo");
B=parseInt(B);

var N=prompt("Elige el limite");
N=parseInt(N);
N+=1;

function Loga(){

    for(i=1;i<N;i++){

        logax=Math.log(i)/Math.log(B);
        console.log("El logaritmo base "+B+" de "+i+" es: "+logax);
    }
}

Loga();