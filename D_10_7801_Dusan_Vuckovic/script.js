

let dan = {
    temperature: [-8, -10, -5, 3, 10, 19, 24, 25, 27, 41],


    // sedmi zadatak

    //Za dan se smatra da je tropski ukoliko nijedna temperatura izmerena tog dana nije iznosila ispod 24 stepena. Metod vraća true ukoliko je dan bio tropski, u suprotnom vraća false.



    tropskiDan: function () {
        let brojac = 0;

        for (let i = 0; i < this.temperature.length; i++) {
            if (this.temperature[i] < 24) {
                brojac++;
            }

        }

        if (brojac > 0) {
            return false;
        }
        else {
            return true;
        };

    },



    // Osmi zadatak

    //Dan je nepovoljan ako je razlika između neka dva uzastopna merenja veća od 8 stepeni. Metod vraća true ukoliko je dan bio nepovoljan, u suprotnom vraća false


    nepovoljanDan: function () {

        for (let i = 0; i < this.temperature.length - 1; i++) {

            let racunanje = (this.temperature[i + 1]) - this.temperature[i];
            let razlika = Math.abs(racunanje);

            if (razlika > 8) {
                return true
            }
        }
        return false
    },


    // Deveti zadatak

    //Za dan se kaže da je neuobičajen ako je bilo kiše i ispod -5 stepeni, ili bilo oblačno i iznad 25 stepeni, ili je bilo i kišovito i oblačno i sunčano. Metod vraća true ukoliko je dan bio neuobičajen, u suprotnom vraća false.

    kisa: true,
    oblacno: false,
    suncano: false,

    neuobicajenDan: function () {


        for (let i = 0; i < this.temperature.length; i++) {

            if ((this.kisa == true && this.temperature[i] <= -5)||(this.oblacno == true && this.temperature[i] >= 25)||(this.oblacno == true && this.kisa == true && this.suncano == true)) {
                return true
            }

        }
        return false

    }




}

console.log(dan.tropskiDan())
console.log(dan.nepovoljanDan())
console.log(dan.neuobicajenDan())