var angka = prompt('Masukan angka');

if(angka %2 === 0) {
    console.log(angka + ' adalah bilangan genap')
}else if(angka %1 === 0){
    console.log(angka + ' adalah bilangan ganjil')
}else{
    console.log('yang anda masukan bukan angka')
}