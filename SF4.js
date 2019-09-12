var k=5;
k=parseInt(k);
var sum=0;
sum=parseInt(sum);
var sumEx=0;
sumEx=parseInt(sumEx);
var formula=0;
formula=parseInt(formula);

for(n=1;n<11;n++){
sumEx=Math.pow(n,k);
sum+=sumEx;
formula=(1/(k+1)*(Math.pow(n,k+1)));

}
sum=parseInt(sum);
formula=parseInt(formula);
console.log("Result 1: "+sum);
console.log("Result 2: "+formula);