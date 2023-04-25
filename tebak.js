// Permainan tebak angka
var lagi = true;
while(lagi){
// Jawaban komputer
var comp = Math.floor(Math.random() * 10) + 1;


var chance = 3;
while(chance > 0){
    if(chance == 3){
        alert('Selamat datang di permainan tebak angka\n anda punya 3 kesempatan');
    } else {
        alert('kamu masih punya ' + chance + ' kesempatan!, ayo coba lagi.');
    }


// Tebakan pemain
var p = prompt('masukan angka tebakanmu : 1 - 10');


// Aturan Main
if (p == comp){
    alert ('Kamu BENAR!');
    chance = 0;
} else if(p < comp){
    alert('Tebakanmu terlalu rendah');
    chance--;
} else {
    alert('Tebakanmy terlalu tinggi');
    chance--;
}
}
alert('Jawabannya adalah ' + comp);
lagi = confirm('Coba lagi?');
}