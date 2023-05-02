// terdapat dua cara mendefinisikan function

// pertama dengan membuat keywordnya secara langsung
// function duaBilangan(a,b) {
//     var total
//     total = a + b;

//     return total;
// }

// kedua dengan cara membuatnya di dalam sebuah variabel
// var duaBilangan = function(a,b) {
//     var total;
//     total = a + b;
    
//     return total;
// }
// alert(duaBilangan(2,3));
// alert(duaBilangan(10,2));


// Kubus

function jumlahVolumeKubus(a, b){
    var volumeA;
    var volumeB;
    var total;

    volumeA = a * a * a;
    volumeB = b * b * b;
    total = volumeA + volumeB;

    return total;
}
alert(jumlahVolumeKubus(8,3));

// Diskon
function hargaDiskon()