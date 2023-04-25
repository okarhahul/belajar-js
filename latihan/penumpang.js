var penumpang = [];
var tambahPenumpang = function(namaPenumpang, penumpang){
    // Jika Angkot Kosong
    if(penumpang.length == 0){
        // Tambahkan penumpang
        penumpang.push(namaPenumpang);
        // kembalikan isi penumpang dan keluar dari function
        return penumpang;
    } else {
        // telusuri seluruh kursi dari awal
        for(var i = 0; i < penumpang.length; i++){
            // jika ada kursi kosong
            if(penumpang[i] == undefined){
                // tambahkan penumpang
                penumpang[i] = (namaPenumpang);
                // kembalikan isi array dan keluar dari function
                return penumpang;
            } 
            // jika sudah ada nama yang sama
            else if(penumpang[i] == namaPenumpang) {
                    // tampilkan pesan kesalahannya
                    console.log(namaPenumpang + ' sudah ada di dalam')
                    // kembalikan isi array dan keluar dari function
                    return penumpang;
                }
            // jika seluruh kursi terisi
            else if(i == penumpang.length - 1){
                // tambah penumpang diakhir array
                penumpang.push(namaPenumpang);
                // kembalikan isi array dan keluar dari function
                return penumpang;
            }
        }
    }
}

var hapusPenumpang = function(namaPenumpang, penumpang){
    // Jika angkot kosong
    if(penumpang.length == 0){
        // tampilkan pesan bahwa angkot kosong, dan
        // tidak mungkin ada penumpang turun
        // kembalikan isi array dan keluar dari function
        console.log('Angkot masih kosong')
    }
    else {
        // telusuri seluruh kursi angkot
        for( var i = 0; i < penumpang.length; i++){
            // jika ada penumpang sesuai
            if (penumpang[i] == namaPenumpang){
                // hapus penumpang menjadi undefined
                penumpang[i] = undefined;
                // kembalikan isi array
                return penumpang;
            }
            // jika ada nama yang tidak sesuai
            else if(i == penumpang.length - 1){
                // tampilkan pesan kesalahannya
                console.log(namaPenumpang + ' tidak ditemukan')
                // kembalikan isi array
                return penumpang;
            }
        }
        
    }
    return penumpang;
}