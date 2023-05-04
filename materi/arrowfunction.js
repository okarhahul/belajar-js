// Function Expression 

// const tampilNama = function (nama){
//     return `Hello ${nama}`;
// }
// console.log(tampilNama('Oka Rhahul'))
// output Hello Oka Rhahul

/* Arrow Function part 1*/

// satu parameter
// const tampilNama = (nama) => {return `Hello ${nama}`};
// console.log(tampilNama('Oka Rhahul'))
// output Hello Oka Rhahul

// dua parameter
// const tampilNama = (nama, waktu) =>{
//     return `Selamat ${waktu}, ${nama}`
// }
// console.log(tampilNama('Oka','Malam'));
// output Selamat Malam, Oka

// Jika hanya satu parameter, seharusnya kita bisa menggunakan konsep Implisit Return, seperti berikut
// const tampilNama = nama => `Hello ${nama}`;
// console.log(tampilNama('Oka Rhahul'))
// output Hello Oka Rhahul

// Jika ingin menampilkan nilai dengan bernilai array
// let nama = ["Daffa Prabowo", "M. Rijal", "M. Ilham Buono"]
// let tampil = nama.map(function(nama){
// return nama.length;
// })
// console.log(tampil);

// Jika ingin menampilkan nilai dengan bernilai Object
// let tampil = nama.map(nama => ({nama: nama, bnyk: nama.length}));
// console.log(tampil);


/* Arrow Function part 2 */
// arrow function tidak memiliki konsep this

// pada konsep Constructor Function
// const Penduduk = function () {
//     this.nama = 'Oka';
//     this.umur = 22;
//     this.perkenalan = function (){
//         console.log(`Hello, saya ${this.nama} dan umur saya ${this.umur}`);
//     }
// };
// const oka = new Penduduk();
// oka.perkenalan();
// output Hello, saya Oka dan umur saya 22

// jika menggunakan Arrow Function, maka
// const Penduduk = function () {
//     this.nama = 'Oka';
//     this.umur = 22;
//     this.perkenalan = () => {
//         console.log(`Hello, saya ${this.nama} dan umur saya ${this.umur}`);
//     }
// };
// const oka = new Penduduk();
// oka.perkenalan();
// output Hello, saya Oka dan umur saya 22
// tidak ada masalah dengan Construction Function karena pada construction function memiliki konsep this, maka arrow function akan menangkapnya.

// jika menggunakan Object Literal
// const penduduk = {
//     nama: 'Oka',
//     umur: 22,
//     perkenalan: function(){
//         console.log(`Hello, saya ${this.nama} dan umur saya ${this.umur}`);
//     }
// }
// penduduk.perkenalan();
// output Hello, saya Oka dan umur saya 22

// jika diubah menjadi Arrow Function
// const penduduk = {
//     nama: 'Oka',
//     umur: 22,
//     perkenalan: () => {
//         console.log(`Hello, saya ${this.nama} dan umur saya ${this.umur}`);
//     }
// }
// penduduk.perkenalan();
// output Hello, saya undefined dan umur saya undefined
// kenapa undefined? karena pada arrow function tidak mengenal konsep this

// Contoh lain penerapan Arrow Function
const Penduduk = function () {
    this.nama = 'Oka';
    this.umur = 22;
    this.perkenalan = function (){
        console.log(`Hello, saya ${this.nama} dan umur saya ${this.umur}`);
    }

    // setInterval(function(){
    //     console.log(this.umur++)
    // },500)
    // outputnya Nan, Nan, Nan, ..., Nan++
    // karena this disini mengacu pada global scope dengan memiliki nilai window
    // maka dari itu kita bisa menggunakan arrow function, karena pada arrow function tidak memliki konsep this maka dia akan mencari pada elexical scopenya

    setInterval(() => {
        console.log(this.umur++)
    }, 500)
    // output 22, 23, 24, 25, ...., n
};
const oka = new Penduduk();
