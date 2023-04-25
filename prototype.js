// prototype secara default di obejct sudah terikat dengan object construction

// function Pemain(nama, role, energi){
//     this.nama = nama;
//     this.role = role;
//     this.energi = energi;
// }

// Pemain.prototype.farming = function(uang){
//     this.energi += uang;
//     return(`Hallo ${this.nama}, Selamat anda berhasil menambah energi`);
// }

// Pemain.prototype.belanja = function(item){
//     this.energi -= item;
//     return(`Hallo ${this.nama}, Selamat anda berhasil  belanja`);
// }

// oka = new Pemain('Oka', 'Marksman', 10);
// daffa = new Pemain('Daffa', 'Support', 20);


// cara diatas bisa adalah bagaimana caranya sebuah code bekerja,
// namun bisa diringkas dengan membuatnya menjadi sebuah class

class Pemain{
    constructor(nama, role, energi){
        this.nama = nama;
        this.role = role;
        this.energi = energi;
    }
    farming(uang){
        this.energi += uang;
        return `Hallo ${this.nama}, Selamat anda berhasil menambah energi`;
    }

    belanja(item){
        this.energi -= item;
        return `Hallo ${this.nama}, Selamat anda berhasil  belanja`;
    }
}
let oka = new Pemain('Oka', 'Marksman', 10);
let daffa = new Pemain('Daffa', 'Support', 20);