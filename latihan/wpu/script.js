// ambil semua elemen video
const dataVideo = Array.from(document.querySelectorAll('[data-duration]'));

// pilih hanya yang javascript lanjutan
let jsLanjut = dataVideo.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN'))

// ambil durasi masing-masing video
    .map(item => item.dataset.duration)

// ubah duras int menjadi detik
    .map(waktu => {
        // kita buat variabel untuk memisahkan waktu yang ada, misal '10:15' maka menjadi '10', '15'
        // keyword split digunakan untuk memisahkan nilai
        const parts = waktu.split(':')
        // keyword parseFloat digunakan untuk menjadi nilai string menjadi intenger
        .map(part => parseFloat(part));
        return (parts[0] * 60) + parts[1]; 
        // kita kalikan index dengan 60 agar menjadi detik kemudian ditambah index ke 1 yang sudah menjadi detik
    })

// jumlahkan semua waktu menjadi detik
    .reduce((total, detik) => total + detik);

// ubah formatnya jadi jam menit detik
const jam = Math.floor(jsLanjut / 3600);
jsLanjut = jsLanjut - jam * 3600;
const menit = Math.floor(jsLanjut / 60)
const detik = jsLanjut - menit * 60;
// console.log(jsLanjut);


// simpan di DOM
// ambil query data dari total-durasi
const pDurasi = document.querySelector('.total-durasi');
// cetak data menggunakan text content
pDurasi.textContent = `${jam} Jam : ${menit} Menit : ${detik} Detik`;

// buat variabel baru untuk menangkap data jumlah video yang sudah dipisahkan
const TotalVideo = dataVideo.filter(video => video.textContent.includes('JAVASCRIPT LANJUTAN')).length;

// ambil query dari jumlah-video
const pTotalVideo = document.querySelector('.jumlah-video');
// cetak data pada layar
pTotalVideo.textContent = `${TotalVideo} Videos`;