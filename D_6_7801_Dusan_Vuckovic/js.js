console.log("Domaci 6")

//Prvi zadatak

//Odredi proizvod brojeva od n do m koji su deljivi sa 7 a nisu sa 3.Rezultat ispisati u konzoli.

let n = 8;
let m = 48;

let i = n;
let proizvod = 1;
while (i <= m) {
    if (i % 7 == 0 && !(i % 3 == 0)) {
        proizvod = proizvod * i;
    }
    i++;

}
console.log(proizvod);

//drugi zadatak

//Odredi zbir brojeva od n do m koji su deljivi sa 3 a nisu sa 7. Rezultat ispisati u konzoli


let suma = 0;
i = n;
while (i <= m) {
    if (!(i % 7 == 0) && i % 3 == 0) {
        suma = suma + i;
    }
    i++;
}
console.log(suma);

