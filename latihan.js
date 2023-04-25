// function minimal(a,b){
//     if(a === b){
//         console.log(a);
//     }else if(a>b){
//         console.log(b);
//     }else{
//         console.log(a);
//     }

//     return minimal;
// }

// minimal(1,4);
// minimal(3,2);
// minimal(3,3);

// function findIndex(array=[], number){
//     for(let i=0; i<=array.length; i++){
//         if(array[i] === number){
//             return i;
//         }
//     }
//     return -1;
// }

// console.log(findIndex([1,2,3,4,5], 3));
// console.log(findIndex([1,2,3,4,5], 6));
// console.log(findIndex([1,2,3,4,5], 5));


function hari(array=[], number){
    var i;
    for(i=0; i<=array.length; i++){
        if(array[i] == number){
            return i;
        }
    }
    return -1;
}
console.log(hari(array[senin, selasa, rabu, kamis, jumat, sabtu, minggu], 3));