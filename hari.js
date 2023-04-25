// Nomer 1
// var hari = prompt('silahkan input angka 1 - 7')
// switch(hari){
//     case '1':
//         alert('senin')
//         break;
//     case '2':
//         alert('selasa')
//         break;
//     case '3':
//         alert('rabu')
//         break;
//     case '4':
//         alert('kamis')
//         break;
//     case '5':
//         alert('jumat')
//         break;
//     case '6':
//         alert('sabtu')
//         break;
//     case '7':
//         alert('minggu')
//         break;
//     default:
//         alert('angka belum terdefinisikan')
// }

// Nomer 2
// var jamMasuk = prompt('masukan jam masuk anda');
// var jamPulang = prompt('masukan jam pulang anda')

// if(jamMasuk == jamPulang){
//     console.log('Anda telah memenuhi waktu jam kerja');
// }else if(jamMasuk >= jamPulang){
//     console.log('Waktu kerja anda kurang');
// }else{
//     console.log('Waktu anda telah terlewat');
// }

// Nomer 3
var jenisBarang = prompt('masukan jenis barang \n seperti A, B, dan C')
var hargaBarang = 10.000;
var a = hargaBarang * 19/100;
var b = hargaBarang * 29/100;
var c = hargaBarang * 32/100;

if(a){
    console.log('Jenis Barang = A ' +  'Kode Barang = 10' + 'Harga Barang = ' + a);
}else if(b){
    console.log('Jenis Barang = B ' +  'Kode Barang = 10' + 'Harga Barang = ' + b);
}else{
    console.log('Jenis Barang = C ' +  'Kode Barang = 10' + 'Harga Barang = ' + c);
}

