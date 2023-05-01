// Function Expression 

// const tampilNama = function (nama){
//     return `Hello ${nama}`;
// }
// console.log(tampilNama('Oka Rhahul'))
// output Hello Oka Rhahul

/* Arrow Function */

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
let nama = ["Daffa Prabowo", "M. Rijal", "M. Ilham Buono"]
// let tampil = nama.map(function(nama){
// return nama.length;
// })
// console.log(tampil);

// Jika ingin menampilkan nilai dengan bernilai Object
let tampil = nama.map(nama => ({nama: nama, bnyk: nama.length}));
console.log(tampil);