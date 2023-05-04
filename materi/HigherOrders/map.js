// Map akan menelusuri nilai dari variabel yang diinginkan, kemudia akan membuatnya menjadi sebuah nilai variabel baru tanpa mengubah nilai awal dari variabel tersebut

const angka = [-4, 2, 1, 0, -3, 8, 9, -2, -1, 7];
const newAngka = angka.map(a => a *2);
console.log(angka);
console.log(newAngka);
