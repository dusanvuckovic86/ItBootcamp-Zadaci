

let inputRuze = document.getElementById("ruze");
let inputLjiljani = document.getElementById("ljiljani");
let inputGerberi = document.getElementById("gerberi");
let inputPoklon = document.getElementsByClassName("poklon");
let inputPlacanje = document.querySelectorAll("input[name='placanje']");
let btnIzracunaj = document.getElementById("izracunaj");
let btnResetuj = document.getElementById("resetuj");
let inputIspis = document.getElementById("ispis");
let inputIspis1 = document.getElementById("ispis1");
let inputCena = document.getElementById("cena");



btnIzracunaj.addEventListener("click", btn => {
    btn.preventDefault();

    let ruzeValue = inputRuze.value;
    ruzeValue = parseInt(ruzeValue || 0);


    let ljiljaniValue = inputLjiljani.value;
    ljiljaniValue = parseInt(ljiljaniValue || 0);


    let gerberiValue = inputGerberi.value;
    gerberiValue = parseInt(gerberiValue || 0);

    // pokloni



    let suma = 0;
    for (let i = 0; i < inputPoklon.length; i++) {

        if (inputPoklon[i].checked == true) {
            let pokloniValue = inputPoklon[i].value;
            pokloniValue = parseInt(pokloniValue);
            suma += pokloniValue
            inputIspis1.innerHTML += `${inputPoklon[i].name} <br>` // ispis poklona
        }
    }




    // cena

    let ukupnoCena = (ruzeValue * 300) + (ljiljaniValue * 200) + (gerberiValue * 100) + suma;
    let popustCena = ukupnoCena * 90 / 100;


    // placanje

    let checkedPlacanje = document.querySelector("input[name='placanje']:checked");

    let checkedPlacanjeValue = checkedPlacanje.value
    if (checkedPlacanjeValue == "kes") {
        inputCena.innerHTML += `Cena: ${ukupnoCena}`;
    }
    else {
        if (checkedPlacanjeValue == "kartica" && ukupnoCena > 2000) {
            inputCena.innerHTML += `Cena: ${ukupnoCena} <br>`;
            inputCena.innerHTML += `Cena sa popustom: ${popustCena}`;
        }
    };

    // slicice - ispis

    let slikaRuza = `<img src="asets/ruza.png">`
    let slikaLjiljan = `<img src="asets/ljiljan.png">`
    let slikaGerber = `<img src="asets/gerber.png">`

    for (let i = 0; i < ruzeValue; i++) {
        inputIspis.innerHTML += slikaRuza
    };
    for (let i = 0; i < ljiljaniValue; i++) {
        inputIspis.innerHTML += slikaLjiljan
    };
    for (let i = 0; i < gerberiValue; i++) {
        inputIspis.innerHTML += slikaGerber
    };





}, { once: true });



btnResetuj.addEventListener("click", btn => {
    btn.reload();
})