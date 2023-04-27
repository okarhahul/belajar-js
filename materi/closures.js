// window = this = global object

// Creation Phase adalah sebuah proses global context yang melakukan pengecekan terhadap function dan variabel. Jika ditemukan, maka secara default akan disimpan dengan; 
// variabel (var) = undefined
// function = fn() *nama dari function tersebut

// Hoisiting merupakan sebuah proses penarikan sebuah variabel dan function kebagian atas dari ruang lingkup yang mendefinisikan mereka saat runtime

// Execution Phase adalah proses mengeksekusi sebuah code program

// var nama = "oka";
// var username = "okarhahul";

// function cetakURL(){
//     var instagramURL = "http://instagram.com/";
//     return instagramURL + username;
// }
// console.log(cetakURL()); 

// Execution Phase Local Scope sama seperti execution pada global, namun ia membiliki sebuah object yang disebut arguments

// var nama = "oka";
// var username = "okarhahul";

// function cetakURL(){
//     console.log(arguments[0])
//     var instagramURL = "http://instagram.com/";
//     return instagramURL + username;
// }
// console.log(cetakURL('jikalau')); 

// Scope adalah metode pencarian variabel terdekat, jika tidak ditemukan maka ia mencarinya keatas hingga menemukannya 

// closures adalah sebuah function yang memiliki akses kepada parent scopenya, meskipun parent scopenya sudah selesai di eksekusi

// closures adalah sebuah function yang dikembalikan oleh function lain, yang memiliki akses ke lingkungan saat dia diciptakan {function me-return function}

// Local Scope
function init(){
    var nama = "oka rhahul";
    function tampilNama(){
        console.log(nama);
    }
    console.log(tampilNama);
}
init();

// Lexical Scope

// function init(){
//     var nama = "oka rhahul";
//     function tampilNama(){
//         console.log(nama);
//     }
//     tampilNama;
// }
// init();