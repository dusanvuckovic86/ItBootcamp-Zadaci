//Prvi zadatak

//1. Napisati funkciju kojoj se prosleđuje celobrojni niz, a ona vraća sumu elemenata niza sa parnim indeksom.

let niz1 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let sumaParnih = niz => {
    let suma = 0;
    for (let i = 0; i < niz.length; i++) {

        if (i % 2 == 0) {
            suma += niz[i];
        }
    }
    return suma;
}
console.log(sumaParnih(niz1));


//Drugi zadatak

// Napisati funkciju kojoj se prosleđuje celobrojni niz, a ona menja znak svakom neparnom elementu celobrojnog niza sa parnim indeksom. Nakon promene znaka, funkcija ispisuje niz u konzoli.

let niz2 = [-2, -3, -7, 3, 9, 2, - 4, 4, 7, -9, 6, -8]


let promeniZnak = niz => {

    for (let i = 0; i < niz.length; i++) {
        if (niz[i] % 2 != 0 && i % 2 == 0) {

            niz[i] = niz[i] - (niz[i] * 2);
        }
    }
    return niz;
}

console.log(promeniZnak(niz2));


//Treci zadatak

//3. Napisati funkciju kojoj se prosleđuje celobrojni niz, a ona vraća broj elemenata niza sa neparnim indeksom.

let niz3 = [1, 5, 4, 8, 3, 16, 12, 15, 27];

let neparniElementi = niz => {
    let brojac = 0;
    for (let i = 0; i < niz.length; i++) {

        if (i % 2 != 0) {
            brojac++;
        }
    }
    return brojac;
}

console.log(neparniElementi(niz3))