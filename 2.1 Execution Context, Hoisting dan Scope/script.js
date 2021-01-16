// kalau functionnya dipanggil dan dieksekusi
console.log(sayHello());

/* ===== Hasilnya 
Halo, nama saya undefined, saya undefined tahun.

- KENAPA? karena proses HOISTING, isi variabel nya belum dimasukkan ke dalam memori dan letak programnya setelah pemanggilan function. 
===== */

var nama = "Bayu";
var umur = 24;

function sayHello() {
  console.log(`Halo, nama saya ${nama}, saya ${umur} tahun.`);
}

/* ===== Noted 
- dibelakang layar terjadi Creation Fase dulu
- lakukan HOISTING terhadap var dan function
===== */
