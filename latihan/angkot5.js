// for(var nomerAngkot = 1; nomerAngkot <= 10; nomerAngkot++){
//     if(nomerAngkot <= 6){
//         console.log('Angkot No ' + nomerAngkot + ' Beroperasi dengan baik')
//     }else{
//         console.log('Angkot No ' + nomerAngkot + ' Sedang tidak beroperasi')
//     }
// }

var jumlahAngkot = 10;
var angkotBeroperasi = 6;
var nomerAngkot = 1;

for(nomerAngkot; nomerAngkot <= jumlahAngkot; nomerAngkot++ ){
    if(nomerAngkot <= angkotBeroperasi && nomerAngkot !== 5){
        console.log('Angkot No ' +nomerAngkot + ' Beroperasi dengan baik')
    }else if(nomerAngkot %2 === 0 || nomerAngkot === 5){
        console.log('Angkot No ' +nomerAngkot + ' Sedang lembur')
    }
    else {
        console.log('Angkot No ' +nomerAngkot + ' Sedang tidak beroperasi')
    }
}