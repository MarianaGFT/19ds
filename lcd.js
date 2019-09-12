//0(n) Lineal
function gcd(a,b){
    if((typeof a!=='number')||(typeof b!=='number'))
    return false;

    a=Math.abs(a);
    b=Math.abs(b);
    while(b){
        var c=b;
        b=a%b;
        a=c;
    }
return a;
}
//console.log(gcd(8,12));


function lcm(a,b){
   if((typeof a!=='number')|| (typeof b!=='number'))
   return false;
   return (!a||!b)?0:Math.abs((a*b)/gcd(a,b));
}
console.log(lcm(5,7));
