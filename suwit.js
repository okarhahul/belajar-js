var tanya = true;
while(tanya){
    // Menangkap pilihan player
    var pemain = prompt('silahkan pilih (semut, gajah atau orang)');

    // menangkap pilihan computer
    // menentukan bilangan 
    var komputer = Math.random();
    if(komputer < 0.34){
        komputer = 'orang';
    }else if (komputer >= 0.34 && komputer < 0.67){
        komputer = 'gajah';
    }else {
        komputer = 'semut';
    }

    // rules
    var hasil = '';
    if (pemain == komputer){
        hasil = 'SERI';
    }else if (pemain == 'orang'){
        hasil = (komputer == 'gajah') ? 'MENANG' : 'KALAH';
    }else if (pemain == 'semut'){
        hasil = (komputer == 'orang') ? 'KALAH' : 'MENANG';
    }else if (pemain == 'gajah'){
        hasil = (komputer == 'semut') ? 'KALAH' : 'MENANG';
    }else{
        hasil = 'anda memilih pilihan yang salah';
    }

    // hasil
    alert('Kamu memilih ' + pemain + ' dan Komputer memilih ' +komputer + '\nMaka kamu = ' +hasil);

    tanya = confirm('lagi?');
}
alert('terimakasih telah bermain')

