try {
  console.log("Awal blok try");
  // error;
  console.log("Akhir blok try");
} catch (error) {
  console.log(error.name);
} finally {
  console.log("Akan tetap dieksekusi");
}