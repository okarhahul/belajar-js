// untuk mendeklarasikan parameter kita bisa mendefinisikan pada argument

function tambah(){
    var hasil = 0;

    // cara mendeklarasikan argument, supaya tidak perlu mengubah lagi jika ada penambahan parameter yang dimasukan
    for(i = 0; i < arguments.length; i++){
        hasil += arguments[i];
    }
    return hasil;
}

var coba = tambah(1,2,3,4);
console.log(coba);