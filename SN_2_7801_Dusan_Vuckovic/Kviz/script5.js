let inputPitanja = document.getElementById("pitanjaIspis");
let inputProvera = document.getElementById("proveraOdgovora");

let btnPosaljiOdgovore = document.getElementById("posaljiOdgovore");
let btnNovaPitanja = document.getElementById("novaPitanja");




pitanje1 = {
    pitanje: "Srpski vojvoda Milenko Stojković je 1804. godine pronašao i ubio četvoricu turskih dahija, na rečnom ostrvu…",
    odgovori: ["Ada Ciganlija", "Ada Kale", "Ada Bojana", "Ada Huja"],
    tacanOdg: 1,


}

pitanje2 = {
    pitanje: "Mitka je lik iz dela…",
    odgovori: [`Laža i paralaža, Jovana Sterije Popovića`, `Pokondirena tikva, Jovana Sterije Popovića`, `Koštana, Borisava Stankovića`, `Derviš i smrt, Meše Selimovića`],
    tacanOdg: 2,
}
pitanje3 = {
    pitanje: "U kojoj državi žive Katalonci?",
    odgovori: ["U Izraelu", "U Španiji", "U Turskoj", "U Siriji"],
    tacanOdg: 1,


}
pitanje4 = {
    pitanje: "Kako se pravilno piše: izčlaniti ili isčlaniti?",
    odgovori: ["Isčlaniti", "Izčlaniti", "Pravilno je i jedno i drugo"],
    tacanOdg: 0,


}
pitanje5 = {
    pitanje: "Ko je režiser filmova ,,Mi nismo anđeli” iz 1992. godine i ,,Mi nismo anđeli 2” iz 2005. godine?",
    odgovori: ["Darko Bajić", "Goran Marković", "Srdan Golubović", "Srđan Dragojević"],
    tacanOdg: 3,


}
pitanje6 = {
    pitanje: "Svaki broj stepenovan nulom daje…",
    odgovori: ["plus beskonačno", "minus beskonačno", "jedan", "nulu"],
    tacanOdg: 2,



}
pitanje7 = {
    pitanje: "Kokpit je naziv za…",
    odgovori: ["popularni koktel", "ograđen prostor za bokserski meč", "pite sa pilećim mesom", "upravljačko mesto aviona ili broda"],
    tacanOdg: 3,



}
pitanje8 = {
    pitanje: "Gde živi Dalaj Lama?",
    odgovori: ["U Pakistanu", "U Indiji", "Na Tajlandu", "U Kini"],
    tacanOdg: 1,





}
pitanje9 = {
    pitanje: "Koji od sledećih filmova je snimio Džim Džarmuš?",
    odgovori: ["Avatar", "Rambo: Prva krv", "Titanik", "Put samuraja"],
    tacanOdg: 3,



}


pitanje10 = {
    pitanje: "Službeni logo Olimpijskih igara ima",
    odgovori: ["5 krugova", "7 krugova", "6 krugova", "8 krugova"],

    tacanOdg: 0,



}






let nizPitanja = [pitanje1, pitanje2, pitanje3, pitanje4, pitanje5, pitanje6, pitanje7, pitanje8, pitanje9, pitanje10];

let izmesajPitanja = arr => {
    for (let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random(arr) * (i + 1));
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
    }
}
izmesajPitanja(nizPitanja)






let ispisPitanja = arr => {

    for (let k = 0; k < 5; k++) {
        let pitanjeDiv = document.createElement("div");
        pitanjeDiv.className = "divPitanje"
        pitanjeDiv.innerText = `${nizPitanja[k].pitanje}`;


        let paragraf = document.createElement("p");

        for (let i = 0; i < arr[k].odgovori.length; i++) {

            let radio = document.createElement('input');
            radio.type = 'radio';
            radio.value = `${i}`;
            radio.name = `${k}`;
            if (i == 0) {
                radio.setAttribute("checked", true)
            }
            let label = document.createElement('label');
            label.htmlFor = `odgovor${k}`;
            label.innerText = `${arr[k].odgovori[i]}`;
            let noviRed = document.createElement("br");

            paragraf.appendChild(radio);
            paragraf.appendChild(label);
            paragraf.appendChild(noviRed);
        }
        pitanjeDiv.appendChild(paragraf);
        inputPitanja.appendChild(pitanjeDiv);


    }


}
ispisPitanja(nizPitanja)






btnPosaljiOdgovore.addEventListener("click", (btn) => {
    btn.preventDefault();



    for (let i = 0; i < 5; i++) {

        let radioBtn = document.querySelector(`input[name="${i}"]:checked`).value;

        let test = nizPitanja[i].tacanOdg
        if (radioBtn == test) {
            inputProvera.innerHTML += "<p style='color:green'>Tacano ste odgovorili</p>"
        }
        else {
            inputProvera.innerHTML += "<p style='color:red'>Netacno ste odgovorili</p>"
        }
    }


}, { once: true });

btnNovaPitanja.addEventListener("click", (x) => {


 
    document.location.reload();
})