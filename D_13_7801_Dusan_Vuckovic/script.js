

let sportisti = (resolve, reject) => {
    let request = new XMLHttpRequest();
    request.addEventListener('readystatechange', function () {

        if (this.readyState === 4 && this.status === 200) {
            let data = JSON.parse(this.responseText);
            resolve(data)
        }
        else if (this.readyState === 4) {
            reject("Greska")
        }
    })
    request.open('GET', './sportisti.json');
    request.send();
};

/// Zadatak 3

let zadatak3 = array => {
    let suma = 0;
    array.forEach(element => {
        suma += element.visina
    });
    console.log(suma / array.length)
};


/// Zadatak 4

let min = array => {
    let min = array[0].timovi.length;

    array.forEach(element => {
        if (element.timovi.length < min) {
            min = element.timovi.length;
        }

    })
    return min
}

let zadatak4 = array => {

    let arr = [];
    for (let i = 0; i < array.length; i++) {
        if (array[i].timovi.length == min(array)) {
            arr.push(array[i])
        }
    }
    console.log(arr[0].imePrezime)
}

// zadatak 5

let igraliZa = array => {

    array.forEach(igrac => {
        if (igrac.timovi.includes("Lakers")) {
            console.log(igrac.imePrezime)
        }
    });


}


/// reject

let greska = (poruka) => {
    console.log(poruka)
};

sportisti(zadatak3, greska)
sportisti(zadatak4, greska)
sportisti(igraliZa, greska)