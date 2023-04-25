// Array adalah kumpulan nilai yang memiliki index
// Array digunakan untuk mempermudahkan dalam mengelola data
// Array pada JavaScript bertipe Object

// Tipe data pada Array boleh berbeda-beda dan boleh terdapat sebuah Array lagi
// var random = ['teks',2,true,[2,3,5]];
// console.log(random[3][1]);

// Cara mendeklarasikan sebuah Array
// var binatang = ['Kucing', 'Kelinci', 'Kambing', 'Ayam'];
// // atau
// var sayur = [];
// sayur = ['Bayam', 'Kangkung', 'Tomat', 'Cabai'];
// console.log(sayur[2]);


// method array
// menambah isi array
// var arr = [];
// arr[0] = "Oka";
// arr[2] = "Rijal";
// arr[4] = "Ilham";
// console.log(arr);

// menghapus isi array
// arr[4] = undefined;
// console.log(arr);

// cara menampilkan isi array
// lenght - untuk mengukur jumlah array
// var arr = ["Oka", "Rijal", "Ilham", "Jasman"];
// for (var i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }

// join - menggabungkan seluruh isi array dan mengubahnya menjadi string
// var arr = ["Oka", "Rijal", "Ilham", "Jasman"];
// console.log(arr.join(' - '));

// push, menambah isi array diakhir
// pop, menghapus isi array diakhir
// arr.push("Daffa", "Ari");
// arr.pop();
// console.log(arr.join(" - "));

// shift, menghapus isi array pada nilai awal
// unshift, menambah isi array pada nilai awal
// arr.unshift("Daffa", "Ari")
// arr.shift()
// console.log(arr.join(" - "));


// var arr = ["Oka", "Rijal", "Ilham", "Jasman"];
// slice, mengiris sebuah array menjadi array baru, maka harus membuat variabel baru
// variabelA = [nilai1, nilai2, nilai3, nilaiN.....]
// variabelB = variabelA.slice(indexAwal, indexAkhir+1), maka akan menghasilkan nilai array yang telah ditentukan
// var arr2 = arr.slice(1,3);
// console.log(arr.join(' - '));
// console.log(arr2.join(' - '));


// splice, menggabungkan isi array 
// variabel(indexAwal, indexHapus(jika tidak ada maka 0), nilaiArray1, nilaiArray2, nilaiArrayN)
// jika ingin menghapus terlebih dahulu kemudian baru diisi, maka menggunakan nilai paling kecil baru nilai selanjutnya, misal (1,2), (3,4). jika menggunakan nilai (2,1), (4,3) maka nilai yang terhapus hanya nilai yang awalnya saja
// arr.splice(3, 2, 'Daffa', 'Ari')
// console.log(arr.join(" - "));


var angka = [1,2,3,4,6,7,9,10]
// var nama = ['Oka', 'Daffa', 'Rijal']
// foreach,
// nama.forEach(function(e, i){
     // console.log('Mahasiswa ke ' + (i+1) + ' adalah ' + e)
// });

// map, mengembalikan nilai array pada sebuah array baru
// var angka2 = angka.map(function(e){
//     return e*2
// })
// console.log(angka2.join(' - '));

// sort, mengurutkan nilai array
// angka.sort(function(a,b){
//     return a-b;
// })
// console.log(angka.join(' - '));

// filter, mengembalikan beberapa nilai array
// var angka3 = angka.filter(function(x){
//     return x > 7;
// })
// console.log(angka3.join(' - '))

// find, mengembalikan hanyak satu nilai array
var angka4 = angka.find(function(x){
    return x > 7;
})
console.log(angka4)

