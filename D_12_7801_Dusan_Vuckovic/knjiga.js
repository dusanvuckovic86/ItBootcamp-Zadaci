class Knjiga {
    constructor(n, a, gi, bs, c) {
        this.naslov = n;
        this.autor = a;
        this.godinaIzdanja = gi;
        this.brojStrana = bs;
        this.cena = c;
    }
    //
    set naslov(n) {
        this._naslov = n;
    }
    get naslov() {
        return this._naslov;
    }
    //
    set autor(a) {
        this._autor = a;
    }
    get autor() {
        return this._autor;
    }
    //
    set _godinaIzdanja(gi) {
        this._autor = gi;
    }
    get _godinaIzdanja() {
        return this._godinaIzdanja;
    }
    //
    set brojStrana(bs) {
        this._brojStrana = bs;
    }
    get brojStrana() {
        return this._brojStrana;
    }
    //
    set _cena(c) {
        this._cena = c;
    }
    get _cena() {
        return this._cena;
    }

    stampaj() {
        console.log(this)
    }

    obimna() {
        if (this.brojStrana > 600) {
            return true
        }
        else {
            return false
        }
    }
    skupa() {
        if (this.cena > 8000) {
            return true
        }
        else {
            return false
        }
    }
    dugackoIme() {
        let brojacRazmaka = this.autor.split(" ").length - 1; // brise razmake
        let duzinaImena = this.autor.length - brojacRazmaka;
        if (duzinaImena > 18) {
            return true
        }
        else {
            return false
        }
    }


}
export default Knjiga


