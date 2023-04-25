function Angkot(sopir, trayek, penumpang, kas){
    this.sopir = sopir;
    this.trayek = trayek;
    this.penumpang = penumpang;
    this.kas = kas;

    this.penumpangNaik = function(namaPenumpang){
        this.penumpang.push(namaPenumpang);
        return penumpang;
    }

    this.penumpangTurun = function(namaPenumpang, bayar){
        if(this.penumpang.length === 0){
            alert('penumpang masih kosong!');
            return false;
        }

        for(var i = 0; i < this.penumpang.length; i++){
            if(this.penumpang[i] == namaPenumpang){
                this.penumpang[i] = undefined;
                this.kas += bayar;
                return penumpang; 
            }
            else if(i == this.penumpang.length - 1){
                alert(namaPenumpang + ' tidak ditemukan');
                return penumpang;
            }
        }
    }
}

var angkot1 = new Angkot('Oka Rhahul', ['Bekasi', 'Cikarang '], [], 0);