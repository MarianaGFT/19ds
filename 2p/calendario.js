class Calendario {
    isLeapYear(year) {
        return ((year % 4 == 0 && year % 100 != 0) || year % 400 == 0) ? true : false;
    }
    todayPlus(d, n) {
        let mod = 0;
        switch (d) {
            case "Lunes":
                n += 1;
                break;
            case "Martes":
                n += 2;
                break;
            case "Miercoles":
                n += 3;
                break;
            case "Jueves":
                n += 4;
                break;
            case "Viernes":
                n += 5;
                break;
            case "Sabado":
                n += 6;
                break;
            case "Domingo":
                n = n;
                break;
            default:
                "ERORO";
                break;
        }
        switch (n % 7) {
            case 0:
                n = 7;
                console.log("Domingo");
                break;
            case 1:
                n = 1;
                console.log("Lunes");
                break
            case 2:
                n = 2;
                console.log("Martes");
                break
            case 3:
                n = 3;
                console.log("Miércoles");
                break;
            case 4:
                n = 4;
                console.log("Jueves");
                break;
            case 5:
                n = 5;
                console.log("Viernes");
                break;
            case 6:
                n = 6;
                console.log("Sábado");
                break;
        }
        return n;
    }

    firstDayYear(year) {
        let x;
        let day;
        x = (year + Math.floor((year - 1) / 4) - Math.floor((year - 1) / 100) + Math.floor((year - 1) / 400)) % 7;
        switch (x) {
            case 0:
                day = "Domingo";
                break;
            case 1:
                day = "Lunes";
                break;
            case 2:
                day = "Martes";
                break;
            case 3:
                day = "Miércoles";
                break;
            case 4:
                day = "Jueves";
                break;
            case 5:
                day = "Viernes";
                break;
            case 6:
                day = "Sábado";
                break;
        }
        return x;
    }
}

let mes = new Calendario();

console.log(mes.firstDayYear(2014));
console.log(mes.isLeapYear(1650));
console.log(mes.todayPlus("Jueves", 5));
console.log(mes.isLeapYear(1700));