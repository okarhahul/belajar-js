var jumlahAngkot = 20;
var angkotBeroperasi = 18;
var nomerAngkot = 1;
while(nomerAngkot <= angkotBeroperasi){
    console.log('Angkot No.' +nomerAngkot +' beroperasi dengan baik.')
    nomerAngkot++
}

for(var nomerAngkot = angkotBeroperasi +1; nomerAngkot <= jumlahAngkot; nomerAngkot++ ){
    console.log('Angkot No.' +nomerAngkot + ' sedang tidak beroperasi')
}

