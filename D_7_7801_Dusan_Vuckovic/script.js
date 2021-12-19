//1. Zadatak
//Napisati funkciju množi koja određuje proizvod brojeva od n do m. Brojeve n i m proslediti kao parametre funkciji.

function mnozi(n, m) {
    let proizvod = 1;

    for (i = n; i <= m; i++) {
        proizvod *= i;
    }
    console.log(proizvod)
}
mnozi(2, 9)


//2. Zadatak
//Napraviti funkciju koja vraća aritmetičku sredinu brojeva od n do m. Brojeve n i m proslediti kao parametre funkciji.

function arSredina(n, m) {
    let suma = 0;
    let brojac = 0;

    for (i = n; i <= m; i++) {
        suma += i;
        brojac++;
    }
    let sredina = suma / brojac;
    return sredina;
}

let aritmetickaSredina = arSredina(2, 4);
console.log(aritmetickaSredina);

//3. Zadatak
//Napisati funkciju koja vraća aritmetičku sredinu brojeva kojima je poslednja cifra 3 u intervalu od n do m. Brojeve n i m proslediti kao parametre funkciji.

function arSredina3(n, m) {
    let suma = 0;
    let brojac = 0;

    for (i = n; i <= m; i++) {

        if (i % 10 == 3) {

            suma += i;
            brojac++;
        }
    }
    
    if (brojac == 0) {
        return `U intervalu od ${n} do ${m} nema brojeva koji se zavrsavaju na 3`
    }
    else {
        let sredina = suma / brojac;
        return sredina
    };
}


let sredina = arSredina3(1, 10);
console.log(sredina);



//4. Zadatak

//Napisati funkciju kojoj se prosleđuje ceo broj a ona ispisuje tekst koji ima prosleđenu veličinu fonta.

function ceoBroj(broj) {
    document.body.innerHTML += `<p style="font-size:${broj}px">Tekst paragrafa</p>`
}

ceoBroj(Math.abs(-50))