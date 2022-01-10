
let inputPitanja = document.getElementById("pitanjaIspis");
let inputPonudjeniOdgovori = document.getElementById("ponudjeniOdgovori")
let inputProvera = document.getElementById("proveraOdgovora");
let btnPosaljiOdgovore = document.getElementById("posaljiOdgovore");
let btnNovaPitanja = document.getElementById("novaPitanja");




pitanje1 = {
    pitanje: "Srpski vojvoda Milenko Stojković je 1804. godine pronašao i ubio četvoricu turskih dahija, na rečnom ostrvu…",
    odgovori: ["Ada Ciganlija", "Ada Kale", "Ada Bojana", "Ada Huja"],
    tacanOdg: 1,

    ispisPitanja: function () {
        let ponudjeniOdg = `<form>`
        this.odgovori.forEach((element, i) => {
            if (i == 0) {
                ponudjeniOdg += `<input type="radio" name="1" value="${i}" id="" checked> ${element}<br>`
            }
            else {
                ponudjeniOdg += `<input type="radio" name="1" value="${i}" id=""> ${element}<br>`
            }

        })
        ponudjeniOdg += `</form>`
        return ponudjeniOdg;

    }

}

pitanje2 = {
    pitanje: "Mitka je lik iz dela…",
    odgovori: [`,,Laža i paralaža”, Jovana Sterije Popovića`, `,,Pokondirena tikva”, Jovana Sterije Popovića`, `
    ,,Koštana”, Borisava Stankovića`, `,,Derviš i smrt”, Meše Selimovića`],
    tacanOdg: 2,

    ispisPitanja: function () {
        let ponudjeniOdg = `<form>`
        this.odgovori.forEach((element, i) => {
            if (i == 0) {
                ponudjeniOdg += `<input type="radio" name="2" value="${i}" id="" checked> ${element}<br>`
            }
            else {
                ponudjeniOdg += `<input type="radio" name="2" value="${i}" id=""> ${element}<br>`
            }

        })
        ponudjeniOdg += `</form>`
        return ponudjeniOdg;

    }

}
pitanje3 = {
    pitanje: "U kojoj državi žive Katalonci?",
    odgovori: ["U Izraelu", "U Španiji", "U Turskoj", "U Siriji"],
    tacanOdg: 1,

    ispisPitanja: function () {
        let ponudjeniOdg = `<form>`
        this.odgovori.forEach((element, i) => {
            if (i == 0) {
                ponudjeniOdg += `<input type="radio" name="3" value="${i}" id="" checked> ${element}<br>`
            }
            else {
                ponudjeniOdg += `<input type="radio" name="3" value="${i}" id=""> ${element}<br>`
            }

        })
        ponudjeniOdg += `</form>`
        return ponudjeniOdg;

    }
}
pitanje4 = {
    pitanje: "Kako se pravilno piše: izčlaniti ili isčlaniti?",
    odgovori: ["Isčlaniti", "Izčlaniti", "Pravilno je i jedno i drugo", "test"],
    tacanOdg: 0,

    ispisPitanja: function () {
        let ponudjeniOdg = `<form>`
        this.odgovori.forEach((element, i) => {
            if (i == 0) {
                ponudjeniOdg += `<input type="radio" name="4" value="${i}" id="" checked> ${element}<br>`
            }
            else {
                ponudjeniOdg += `<input type="radio" name="4" value="${i}" id=""> ${element}<br>`
            }

        })
        ponudjeniOdg += `</form>`
        return ponudjeniOdg;

    }
}
pitanje5 = {
    pitanje: "Ko je režiser filmova ,,Mi nismo anđeli” iz 1992. godine i ,,Mi nismo anđeli 2” iz 2005. godine?",
    odgovori: ["Darko Bajić", "Goran Marković", "Srdan Golubović", "Srđan Dragojević"],
    tacanOdg: 3,

    ispisPitanja: function () {
        let ponudjeniOdg = `<form>`
        this.odgovori.forEach((element, i) => {
            if (i == 0) {
                ponudjeniOdg += `<input type="radio" name="5" value="${i}" id="" checked> ${element}<br>`
            }
            else {
                ponudjeniOdg += `<input type="radio" name="5" value="${i}" id=""> ${element}<br>`
            }

        })
        ponudjeniOdg += `</form>`
        return ponudjeniOdg;

    }

}
pitanje6 = {
    pitanje: "Svaki broj stepenovan nulom daje…",
    odgovori: ["plus beskonačno", "minus beskonačno", "jedan", "nulu"],
    tacanOdg: 2,

    ispisPitanja: function () {
        let ponudjeniOdg = `<form>`
        this.odgovori.forEach((element, i) => {
            if (i == 0) {
                ponudjeniOdg += `<input type="radio" name="6" value="${i}" id="" checked> ${element}<br>`
            }
            else {
                ponudjeniOdg += `<input type="radio" name="6" value="${i}" id=""> ${element}<br>`
            }

        })
        ponudjeniOdg += `</form>`
        return ponudjeniOdg;

    }

}
pitanje7 = {
    pitanje: "Kokpit je naziv za…",
    odgovori: ["popularni koktel", "ograđen prostor za bokserski meč", "pite sa pilećim mesom", "upravljačko mesto aviona ili broda"],
    tacanOdg: 3,

    ispisPitanja: function () {
        let ponudjeniOdg = `<form>`
        this.odgovori.forEach((element, i) => {
            if (i == 0) {
                ponudjeniOdg += `<input type="radio" name="7" value="${i}" id="" checked> ${element}<br>`
            }
            else {
                ponudjeniOdg += `<input type="radio" name="7" value="${i}" id=""> ${element}<br>`
            }

        })
        ponudjeniOdg += `</form>`
        return ponudjeniOdg;

    }

}
pitanje8 = {
    pitanje: "Gde živi Dalaj Lama?",
    odgovori: ["U Pakistanu", "U Indiji", "Na Tajlandu", "U Kini"],
    tacanOdg: 1,

    ispisPitanja: function () {
        let ponudjeniOdg = `<form>`
        this.odgovori.forEach((element, i) => {
            if (i == 0) {
                ponudjeniOdg += `<input type="radio" name="8" value="${i}" id="" checked> ${element}<br>`
            }
            else {
                ponudjeniOdg += `<input type="radio" name="8" value="${i}" id=""> ${element}<br>`
            }

        })
        ponudjeniOdg += `</form>`
        return ponudjeniOdg;

    }

}
pitanje9 = {
    pitanje: "Koji od sledećih filmova je snimio Džim Džarmuš?",
    odgovori: ["Avatar", "Rambo: Prva krv", "Titanik", "Put samuraja"],
    tacanOdg: 3,

    ispisPitanja: function () {
        let ponudjeniOdg = `<form>`
        this.odgovori.forEach((element, i) => {
            if (i == 0) {
                ponudjeniOdg += `<input type="radio" name="9" value="${i}" id="" checked> ${element}<br>`
            }
            else {
                ponudjeniOdg += `<input type="radio" name="9" value="${i}" id=""> ${element}<br>`
            }

        })
        ponudjeniOdg += `</form>`
        return ponudjeniOdg;

    }

}


pitanje10 = {
    pitanje: "Službeni logo Olimpijskih igara ima",
    odgovori: ["5 krugova", "7 krugova", "6 krugova", "8 krugova"],

    tacanOdg: 0,



    ispisPitanja: function () {
        let ponudjeniOdg = `<form>`
        this.odgovori.forEach((element, i) => {
            if (i == 0) {
                ponudjeniOdg += `<input type="radio" name="10" value="${i}"  id="" checked> ${element}<br>`
            }
            else {
                ponudjeniOdg += `<input type="radio" name="10" value="${i}"  id=""> ${element}<br>`
            }

        })
        ponudjeniOdg += `</form>`
        return ponudjeniOdg;

    }


}






let nizPitanja = [pitanje1, pitanje2, pitanje3, pitanje4, pitanje5, pitanje6, pitanje7, pitanje8, pitanje9, pitanje10];





let ponudjeniOdgovori = arr => {


    arr.forEach((element) => {
        inputPitanja.innerHTML += `<h3>${element.pitanje}</h3><br>`;
        inputPitanja.innerHTML += ` ${element.ispisPitanja(element.odgovori)}<br>`

    })


}

ponudjeniOdgovori(nizPitanja);







let cekiranOdg = document.querySelectorAll(`input[type="radio"]:checked`);
let cekirano = cekiranOdg.value
console.log(cekirano)



btnPosaljiOdgovore.addEventListener("click", btn => {
    btn.preventDefault()
    

    let tacniOdgovori = arr => {


        arr.forEach(element => {
            for (let i = 0; i < element.odgovori.length; i++) {
                if (i == element.tacanOdg) {
                    return true
                }
               
            }
            
        })




    }

});

