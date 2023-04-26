// contoh1
// const json = '{ "name": "Yoda", "age": 20 }';
// try {
//   const user = JSON.parse(json);
//   console.log(user.name);
//   console.log(user.age);
// } catch (error) {
//   console.log(error.name);
//   console.log(error.message);
// }

// contoh 2
// const json = '{"age" : 20}';
// try {
//   const user = JSON.parse(json)

//   // jika name pada user tidak ditemukan maka akan tampil pesan kesalahan seperti ini
//   if (!user.name){
//     throw new SyntaxError("'name' is required")
//   }

//   console.log(user.name);
//   console.log(user.age);
// } catch(error){
//   console.log(`JSON Error: ${error.message}`)
// }

// contoh 3
// membenarkan code contoh 2, dengan menigisi name
// const json = '{"name" : "oka", "age" : 20}';
// try {
//   const user = JSON.parse(json)

//   // jika name pada user tidak ditemukan maka akan tampil pesan kesalahan seperti ini
//   if (!user.name){
//     throw new SyntaxError("'name' is required")
//   }

//   console.log(user.name);
//   console.log(user.age);
// } catch(error){
//   console.log(`JSON Error: ${error.message}`)
// }

// contoh 4
// membuat statement untuk menampilkan pesan kesalahan yang terjadi
// const json = '{"age" : 20}';
// try {
//   const user = JSON.parse(json)

//   if(!user.name){
//     throw new SyntaxError("'name' is required")
//   }
//   if(!user.age){
//     throw new SyntaxError("'age' is required")
//   }

//   console.log(user.name);
//   console.log(user.age);
// } catch(error){
//   if(error instanceof SyntaxError){
//     console.log(`JSON Error: ${error.message}`);
//   }else if(error instanceof ReferenceError){
//     console.log(error.message);
//   }else {
//     console.log(error.stack)
//   }
// }

// contoh 5
// membuat sebuah class untuk menampilkan error

class ValidationError extends Error{
  constructor(message){
    super(message);
    this.name = "ValidationError";
  }
}

const json = '{"age" : 20}';
try {
  const user = JSON.parse(json)

  if(!user.name){
    throw new ValidationError ("'name' is required")
  }
  if(!user.age){
    throw new ValidationError ("'age' is required")
  }

  console.log(user.name);
  console.log(user.age);
}

catch(error){
  if(error instanceof SyntaxError){
    console.log(`JSON Error: ${error.message}`);
  }
  else if(error instanceof ValidationError){
    console.log(`Invalid Data: ${error.message}`)
  }
  else if(error instanceof ReferenceError){
    console.log(error.message);
  }
  else {
    console.log(error.stack)
  }
}