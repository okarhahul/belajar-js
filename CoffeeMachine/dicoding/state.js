const coffeeStock = {
    arabica: 100,
    robusta: 150,
    liberica: 200
  };
const isCoffeeMachineReady = true;
   
// module.exports = {coffeeStock, isCoffeeMachineReady};
// module.exports = isCoffeeMachineReady;
// jika menggunakan module.export lagi, maka yang akan diexport hanya module terdahulunya
// console.log(module)
export {coffeeStock, isCoffeeMachineReady};
