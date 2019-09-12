var ResultadoPotencia=0;
var suma=0;
var formula=0;
var aprox=0;

for(n=1;n<11;n++){
    ResultadoPotencia=Math.pow(n,2);
    suma+=ResultadoPotencia;
    formula=((n+1)*((2*n)+1)*n)/6;
    aprox=(Math.pow(n,3)*(1/3));
}
suma=parseInt(suma);
formula=parseInt(formula);

console.log("Result 1: "+suma);
console.log("Result 2: "+formula);
console.log("Aprox: "+aprox);