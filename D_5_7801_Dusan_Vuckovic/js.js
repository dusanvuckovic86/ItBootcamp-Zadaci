

//PRVI ZADATAK

let dinariPera = 6000;
let dinariMika = 4600;
let kusur = 2000;
let dvaDzempera = dinariPera + dinariMika - kusur;
console.log(dvaDzempera);
let jedanDzemper = dvaDzempera / 2;
console.log(jedanDzemper);

let kusurPera = dinariPera - jedanDzemper;
console.log(`Kusur koji treba dobiti Pera iznosi ${kusurPera} dinara`);

let kusurMika = dinariMika - jedanDzemper;
console.log(`Kusur koji treba dobiti Mika iznosi ${kusurMika} dinara`);


//DRUGI ZADATAK
let ukupnoPoglavlja = 30;
let procitanoPrvogDana = 9;
let procitanoDrugogDana = procitanoPrvogDana + 2;
let ukupnoProcitano = procitanoPrvogDana + procitanoDrugogDana;
let neprocitano = ukupnoPoglavlja - ukupnoProcitano;

console.log(`Citaocu je ostalo da procita ${neprocitano} poglavlja`);

if (neprocitano < ukupnoPoglavlja / 2) {
    console.log("Ostalo je da se procita manje od polovine knjige");
}
else {
    console.log("Ostalo je da se procita više od polovine knjige");

}

//TRECI ZADATAK

let dnevniUnosKJ = 800;
let konverzija = 4.1868;
let unosKCal = dnevniUnosKJ / konverzija;
console.log(unosKCal);

if (unosKCal < 2000) {
    console.log("​Potrebno je povećati dnevni unos");
}
else {
    console.log("Nije potrebno povećati dnevni unos");
}