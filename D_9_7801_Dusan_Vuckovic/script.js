

// Prvi zadatak
//Napraviti funkciju kojoj se prosleđuje niz stavki za kupovinu (članovi niza su stringovi). U funkciji, prolaskom foreach petljom kroz niz, napraviti neuređenu listu i ispisati je u html dokument.


let nizPrvi = ["mleko", "hleb", "kafa", "jabuke", "novine"];

let listaZaKupovinu = niz => {

    let lista = `<ul>`;
    niz.forEach(element => {
        lista += `<li> ${element}</li>`
    });
    lista += `</ul>`;
    return lista;
}

document.body.innerHTML += listaZaKupovinu(nizPrvi);



//Drgi zadatak

//Napraviti funkciju kojoj se prosleđuje niz imena košarkaških timova. U funkciji, prolaskom foreach petljom kroz niz, formirati tabelu u čijim su redovima imena timova i tabelu ispisati u html dokument.

let timovi = ["Crvena Zvezda", "Partizan", "CSKA", "Vojvodina", "Olympiacos"];

let kosarkaskiTimovi = niz => {
    let tabela = `<table>`;

    niz.forEach(element => {
        tabela += `<tr><td>${element}</td></tr>`;
    })
    tabela += `</table>`;
    return tabela;
}

document.body.innerHTML += kosarkaskiTimovi(timovi);


//Treci zadatak

//Napraviti funkciju kojoj se prosleđuje niz stringova čiji su članovi putanje do slika. U funkciji, prolaskom foreach petljom kroz niz, prikazati sve slike u html dokumentu.

let linkovi = [`https://www.onlycroatia.com/media/cities/124/4281.jpg`, `https://www.onlycroatia.com/media/cities/124/7322.jpg`, `https://www.onlycroatia.com/media/cities/124/6525.jpg`, `https://www.onlycroatia.com/media/cities/124/6753.jpg`, `https://www.onlycroatia.com/media/cities/124/1518.jpg`]


let fotografije = niz => {
    niz.forEach(element => {
        document.body.innerHTML += `<img style="height:250px;width:350px; padding-right:5px" src="${element}">`;
    });
}

fotografije(linkovi);