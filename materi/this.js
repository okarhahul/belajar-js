// this merupakan scope global
// this === window

// object literal
// function halo(){
//     console.log(this);
//     console.log('halo');
// }
// halo();
// this pada object literal adalah sebuah object global


// object declaration
// var obj = {a: 10, nama: 'Oka'};
// obj.halo = function(){
//     console.log(this);
//     console.log('halo');
// }
// obj.halo();
// this pada object declaration mengembalikan seluruh nilai object pada fungsi tersebut


// object constraction
// function Halo(){
//     console.log(this);
//     console.log('halo')
// }
// var obj2 = new Halo();
// var obj3 = new Halo();
// this pada constraction mengembalikan nilai object terbaru