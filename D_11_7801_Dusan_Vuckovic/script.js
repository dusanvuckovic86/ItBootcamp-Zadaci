knjiga1 = {
  naziv: "Fric i Dobrila",
  autor: "Srđan Valjarević",
  slika: "<img src='asets/fric_i_dobrila-srdjan_valjarevic_v.jpg'>",
  procitano: true
}

knjiga2 = {
  naziv: "Mi protiv vas",
  autor: "Fredrik Bakman",
  slika: "<img src='asets/mi_protiv_vas-fredrik_bakman_v.jpg'>",
  procitano: true
}


knjiga3 = {
  naziv: "Nocna škola",
  autor: "K. Dž. Doerti",
  slika: "<img src='asets/nocna_skola-k_dz_doerti_v.jpg'>",
  procitano: false
}

knjiga4 = {
  naziv: "Ostrvo pacova i druge priče",
  autor: "Ju Nesbe",
  slika: "<img src='asets/ostrvo_pacova_i_druge_price-ju_nesbe_v.jpg'>",
  procitano: false
}


knjiga5 = {
  naziv: "Životinjska farma",
  autor: "Džordž Orvel",
  slika: "<img src='asets/zivotinjska_farma-dzordz_orvel_v.jpg'>",
  procitano: true
}


let nizKnjiga = [knjiga1, knjiga2, knjiga3, knjiga4, knjiga5];

let tabela = "<table >"
for (let i = 0; i < nizKnjiga.length; i++) {
  if (i % 2 == 0) {
    let procitano = nizKnjiga[i].procitano;
    if (procitano == true) {
      tabela += `<tr>
    <td style='border: solid black 1px;background-color: lightgreen'> ${nizKnjiga[i].slika}</td>
    <td style='border: solid black 1px; background-color: lightgreen'><p style='color: blue'>${nizKnjiga[i].naziv} ${nizKnjiga[i].autor}</p></td>
    </tr>`
    }
    else {
      tabela += `<tr>
    <td style='border: solid black 1px; background-color: lightgreen'> ${nizKnjiga[i].slika}</td>
    <td style='border: solid black 1px; background-color: lightgreen'><p style='color: gray'>${nizKnjiga[i].naziv} ${nizKnjiga[i].autor}</p></td>
    </tr>`
    }
  }

  
  else {
    let procitano = nizKnjiga[i].procitano;
    if (procitano == true) {
      tabela += `<tr>
  <td style='border: solid black 1px;'> ${nizKnjiga[i].slika}</td>
  <td style='border: solid black 1px'><p style='color: blue'>${nizKnjiga[i].naziv} ${nizKnjiga[i].autor}</p></td>
  </tr>`
    }
    else {
      tabela += `<tr >
  <td style='border: solid black 1px'> ${nizKnjiga[i].slika}</td>
  <td style='border: solid black 1px'><p style='color: gray'>${nizKnjiga[i].naziv} ${nizKnjiga[i].autor}</p></td>
  </tr>`
    }
  }
}
tabela += "</table>"

document.body.innerHTML += tabela;
