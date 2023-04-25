// Object adalah kumpulan nilai yang tidak memiliki index, melainkan dia memiliki nama
// Object adalah Array yang lebih sakti
// variabel pada object disebut properti
// function pada object disebut method


// object sederhana
// var mhs = {
//     nama : "Oka Rhahul",
//     umur : 23,
//     pekerjaan : "jobseeker",
//     alamat : {
//         kecamatan : "Cibitung",
//         kelurahan : "Wanasari",
//         provinsi : "Jawa Barat"
//     }
// };

// function declaration
function objectMahasiswa(nama, npm, email, jurusan){
    var mhs = {}
    mhs.nama = nama;
    mhs.npm = npm;
    mhs.email = email;
    mhs.jurusan = jurusan;
    return mhs;
} 

mhs = objectMahasiswa('Oka Rhahul', '201810225231', 'akhmadrahul@gmail.com', 'Informatika');

// constraction
function Mahasiswa(nama, npm, email, jurusan){
    this.nama = nama;
    this.npm = npm;
    this.email = email;
    this.jurusan = jurusan
}

mhs2 = new Mahasiswa('Lutfi Daffa', '201810225212', 'dapoi@gmail.com', 'Informatika');