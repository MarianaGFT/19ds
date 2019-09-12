var a=5;
a=parseInt(a);
sum=1;
var sum=parseInt(sum);
sumEx=0;
sumEx=parseInt(sumEx);
var formula=0;
formula=parseInt(formula);
var aprox=0;
aprox=parseInt(aprox);


    for(n=1;n<11;n++){
        sumEx=Math.pow(a,n);
        sum+=sumEx;
        formula=((Math.pow(a,n+1)-1)/(a-1));
        aprox=(Math.pow(2,n+1)-1);
    }
    console.log("Result 1: "+sum);
    console.log("Result 2: "+formula);
    console.log("Aprox: "+aprox);



//la ley de los grandes numeros