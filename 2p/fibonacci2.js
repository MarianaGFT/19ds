
class Fibonacci {
    constructor(num) {
        this.num = num;
    }
    getValue(num = this.num) {
        function value(num){
            if(num < 2){
                return num;
            } else {
                return value(num-1) + value(num-2);
            }
        }
        return value(num);
    }
    
    getCost(num = this.num) {
        let cont = 0;
        function value(num){
            if(num < 2){
                cont++;
            } else {
                cont++;
                return value(num-1) + value(num-2);
            }
        }
        value(num);
        return cont;
    }

    getSucesion() {
        let sucesion = [];
        for (let i = 1; i <= this.num; i++) {
            sucesion.push(this.getValue(i));
        }
        return sucesion;
    }

    getTable() {
        console.log("  numero---- costo ----- value ");
        for(let i = 0; i <= this.num; i++){
            console.log("f(" + i + ") --------- " + this.getCost(i) + " ------- " + this.getValue(i));
        }
    }
}

let numero = new Fibonacci(5);
console.log(numero.getValue());
console.log(numero.getSucesion());
console.log(numero.getCost());
console.log(numero.getTable());