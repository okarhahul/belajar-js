// Var, Let dan Const

// Var menerapkan prinsip pemrograman function scope
// Let dan Const menerapkan prinsip pemrograman block scope
// Lalu, bedanya Let dan Const itu apa?
// Const adalah sebuah fungsi yang bernilai konstanta (tetap), jadi nilai yang sudah di deklarasikan tidak dapat diubah. Namun, bukan berarti tidak bisa diubah sepenuhnya, melaikan bisa diantisipasi dengan menjadikannya nilainya menjadi sebuah object
// Nilai pada Let bisa diubah, maka dari itu untuk fungsi For sangat cocok apabila menggunkan Let

// Contoh penerapan Var

/* 1 */
// var i = 0;
// console.log(i)
// output 0

/* 2 */
// console.log(i)
// var i = 0;
// output undefind

/* 3 */
// for (var i = 0; i < 10; i++){
//     console.log(i)
// }
// output 9
// console.log(i);
// output 10
// pada konsep ini, nilai dari i masih bisa diubah karena var menerapkan prinsip function scope

// Contoh Let dan Const

/* 1 */
// const i = 1
// let i = 1
// console.log(i);
// output 1

/* 2 */
// console.log(i)
// let i = 1;
// const i = 1;
// Error, karena pada penerapan Let dan Const menerapkan prinsip block space { }

/* 3 */
// for (let i = 0; i < 10; i++){
//     console.log(i)
// }
// output 1-9

// for (const i = 0; i < 10; i++){
//     console.log(i)
// }
// Error, karena nilai dari const tidak dapat diubah. maka dari itu pada fungsi for lebih cocok menggunakan let

// Perbandingan Deklarasi Code Var, Let dan Const

/* Var */
// for (var i = 0; i < 10; i++){
//     console.log(i);
       // output 1 - 9
// }
// console.log(i);
// output 1 - 10
// pada kasus ini, nilai i bisa diubah dengan mudah. maka dari itu bisa diganti dengan membungkusnya dengan function seperi berikut

// function coba() {
//     for (var i = 0; i < 10; i++){
//         console.log(i);
//     }
// }
// coba();
// output 1 - 9
// console.log(i);
// error

// function coba() {
//     for (var i = 0; i < 10; i++){
//         console.log(i);
//     }
// }
// coba();

// atau bisa diringkas seperti ini
// (function coba(){
//     for (var i = 0; i<10; i++){
//         console.log(i);
//     }
// }())
// output 1 - 9
// console.log(i);
// error

// atau bisa menggunkana Let


/* Let */
// for (let i = 0; i < 10; i++){
    // console.log(i)
    // output 1 - 9
// }
// console.log(i)
// error


/* Const */
// const i = 10;
// i = 15
// error
// karena nilai pada const tidak bisa diubah
// tetapi tidak selalu, seperti contoh sini

const laptop = {
    merk: "Asus",
    type: "ROG",
    harga: 14000000
};
console.log(laptop)
// tampil sesuai object yang dideklarasikan
laptop.type = "Zypherus";
console.log(laptop)
// nilai object berubah menjadi Zypherus
laptop = {
    garansi: "1 tahun"
};
// error
// maka dari itu, nilai pada const tidak selamanya tetap, melainkan bisa diubah (dengan syarat hanya nilai bukan objectnya)