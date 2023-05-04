// Filter akan mencari seluruh nilai dari variabel yang dibutuhkan,

const angka = [-4, 2, 1, 0, -3, 8, 9, -2, -1, 7];
const newAngka = [];

// mencari angka >=3

// menggunakan for
// for(let i=0; i < angka.length; i++){
//     if(angka[i] >= 3){
//         newAngka.push(angka[i]);
//     }
// };
// console.log(newAngka);

// filter menggunakan arrow function
const angkaBaru = angka.filter((a) => a >= 3);
console.log(angkaBaru)
