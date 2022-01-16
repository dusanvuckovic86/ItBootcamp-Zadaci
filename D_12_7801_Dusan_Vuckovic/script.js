import Knjiga from "./knjiga.js";


let knjiga1 = new Knjiga("Fric i Dobrila", "Srđan Valjarević Valjarević", 2020, 300, 950);
let knjiga2 = new Knjiga("Mi protiv vas", "Fredrik Bakman Bakman", 1987, 900, 1500);
let knjiga3 = new Knjiga("Nocna škola", "K. Dž. Doerti", 1560, 1250, 10000);
let knjiga4 = new Knjiga("Ostrvo pacova i druge priče", "Ju Nesbe", 2021, 150, 250);
let knjiga5 = new Knjiga("Životinjska farma", "Džordž Orvel", 1995, 900, 6500);


knjiga1.stampaj();
knjiga2.stampaj();
knjiga3.stampaj();
knjiga4.stampaj();
knjiga5.stampaj();


console.log(knjiga1.obimna());


console.log(knjiga1.dugackoIme());
console.log(knjiga2.dugackoIme());



let nizKnjiga = [knjiga1, knjiga2, knjiga3, knjiga4, knjiga5];



let prikazTabele = document.getElementById("tabela");

let tabela = "<table border='1'>"
tabela += `<tr>
<th>Naslov knjige</th>
<th>Autor knjige</th>
<th>Godina izdanja</th>
<th>Broj strana</th>
<th>Cena</th>
<th>Knjiga je obimna</th>
<th>Knjiga je skupa</th>
<th>Ime autora je dugacko</th>
</tr>`;
nizKnjiga.forEach(element => {
    tabela += `<tr>
    <td style="padding:10px">${element.naslov}</td>
    <td style="padding:10px">${element.autor}</td>
    <td style="padding:10px">${element.godinaIzdanja}</td>
    <td style="padding:10px">${element.brojStrana}</td>
    <td style="padding:10px">${element.cena}</td>
    <td style="padding:10px">${element.obimna()}</td>
    <td style="padding:10px">${element.skupa()}</td>
    <td style="padding:10px">${element.dugackoIme()}</td>
    </tr>`;
});
tabela += `</table>`;
prikazTabele.innerHTML += tabela;







let autori = document.querySelector("#autori");

nizKnjiga.forEach(knjiga => {
    if (knjiga.dugackoIme() == true) {
        autori.innerHTML += `<p>${knjiga.autor}</p>`
    }
});






let naslovi = document.querySelector("#naslovi");

nizKnjiga.forEach(knjiga => {
    if (knjiga.skupa() == true && knjiga.obimna() == true) {
        naslovi.innerHTML += `<p>${knjiga.naslov}</p>`
    }
});




let cena = document.getElementById("cena");

let ukupnaCena = arr => {
    let suma = 0;
    arr.forEach(knjiga => {
        suma += knjiga.cena
    })
    return suma
}
cena.innerHTML += ukupnaCena(nizKnjiga);





let prosecna = document.getElementById("prosecna");

let prosecnaCena = arr => {
    let suma = 0;
    arr.forEach(knjiga => {
        suma += knjiga.cena;
    })
    return suma / arr.length
}
prosecna.innerHTML += prosecnaCena(nizKnjiga);



// let prosek = arr => {
//    let cenaProsek = ukupnaCena(arr)/arr.length
//     return cenaProsek
// }
// console.log(prosek(nizKnjiga))



let stranica = document.getElementById("stranica");

let prosecnaStranica = arr => {
    let sumaStranica = 0;
    arr.forEach(knjiga => {
        sumaStranica += knjiga.brojStrana;
    })
    return ukupnaCena(arr) / sumaStranica;
};
stranica.innerHTML += prosecnaStranica(nizKnjiga);