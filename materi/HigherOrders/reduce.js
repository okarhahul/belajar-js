const angka = [-4, 2, 1, 0, -3, 8, 9, -2, -1, 7];
// const newAngka = angka.reduce((accumulator, currentValue) => accumulator + currentValue);
// // pada proses ini secara defaul accumutalor + currentValue + 0 (angka 0 ini bisa diubah sesuai dengan kebutuhan)
// console.log(newAngka);

const hasil = angka.filter(a => a >=3).map(a => a * 3).reduce((nilaiAwal, nilaiAkhir) => nilaiAwal + nilaiAkhir);
console.log(hasil);