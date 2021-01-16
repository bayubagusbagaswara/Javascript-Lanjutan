// kalau function dipanggil di awal tanpa mengeksekusinya
console.log(sayHello);

/* ===== Hasilnya 
sayHello() {
  console.log(`Halo, nama saya ${nama}, saya${umur} tahun.`);
}
===== */

var nama = "Bayu";
var umur = 24;

function sayHello() {
  console.log(`Halo, nama saya ${nama}, saya${umur} tahun.`);
}

/* ===== Noted 
- dibelakang layar terjadi Creation Fase dulu
- lakukan HOISTING terhadap var dan function
===== */
