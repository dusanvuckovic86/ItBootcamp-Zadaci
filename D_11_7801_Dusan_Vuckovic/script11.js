

knjiga1 = {
    naziv: "Fric i Dobrila",
    autor: "Srđan Valjarević",
    slika: 'asets/fric_i_dobrila-srdjan_valjarevic_v.jpg',
    procitano: true
}

knjiga2 = {
    naziv: "Mi protiv vas",
    autor: "Fredrik Bakman",
    slika: 'asets/mi_protiv_vas-fredrik_bakman_v.jpg',
    procitano: true
}


knjiga3 = {
    naziv: "Nocna škola",
    autor: "K. Dž. Doerti",
    slika: 'asets/nocna_skola-k_dz_doerti_v.jpg',
    procitano: false
}

knjiga4 = {
    naziv: "Ostrvo pacova i druge priče",
    autor: "Ju Nesbe",
    slika: 'asets/ostrvo_pacova_i_druge_price-ju_nesbe_v.jpg',
    procitano: false
}


knjiga5 = {
    naziv: "Životinjska farma",
    autor: "Džordž Orvel",
    slika: 'asets/zivotinjska_farma-dzordz_orvel_v.jpg',
    procitano: true
}


let nizKnjiga = [knjiga1, knjiga2, knjiga3, knjiga4, knjiga5];







let ispisiTabelu = arr => {
    let tabela = document.createElement("table");
    
    for (let i = 0; i < arr.length; i++) {
        let red = document.createElement("tr");
        
        if (i % 2 == 0) {
            red.style.backgroundColor = "lightgreen"
            
        }
        else {
            red.style.backgoroundColor = "white"
            
        }


        let kolona1 = document.createElement("td");
        let slika = document.createElement("img");
        slika.src = arr[i].slika;
        kolona1.appendChild(slika);
        red.appendChild(kolona1);


        let kolona2 = document.createElement("td");
        let paragraf = document.createElement("p");
        let tekstParagrafa = document.createTextNode(`${arr[i].naziv} ${arr[i].autor}`);
        if (arr[i].procitano == true) {
            paragraf.style.color = "blue"
        }
        else {
            paragraf.style.color = "gray"
        }
        paragraf.appendChild(tekstParagrafa);
        kolona2.appendChild(paragraf);
        red.appendChild(kolona2);

        tabela.appendChild(red)

    }

    document.body.appendChild(tabela)


}

ispisiTabelu(nizKnjiga)