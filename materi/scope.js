// global scope

var a = 1;

function tes(a){
    // a di sini menandakan local scope
    console.log(a);
}

tes(a);
console.log(a);