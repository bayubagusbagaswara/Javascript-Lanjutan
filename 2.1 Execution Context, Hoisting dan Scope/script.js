var nama = "Bayu";
var umur = 24;

// kalau code nya dipindah disini
console.log(sayHello());

/* ===== Hasilnya 
Halo, nama saya Bayu, saya 24 tahun.

- BERHASIL mengeksekusi function dan menampilkan isi variabelnya. 
===== */
function sayHello() {
  return `Halo, nama saya ${nama}, saya ${umur} tahun.`;
  // return untuk mengembalikan nilai dari function tersebut
}

/* ===== Noted 
- dibelakang layar terjadi Creation Fase dulu
- lakukan HOISTING terhadap var dan function
- VARIABEL : akan diisi UNDEFINED
- FUNCTION : akan diisi oleh STRING dalam function tersebut
===== */
