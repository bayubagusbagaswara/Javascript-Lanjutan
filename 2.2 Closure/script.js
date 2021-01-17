/* ===== Seolah-olah mempunyai Private Method ===== */

let counter = 0;
let add = function () {
  let counter = 0;
  return ++counter;
};

// isi ulang counter / mengubah counter awal / restart
counter = 100;

console.log(add());
console.log(add());
console.log(add());

/* ===== Noted
- menghitung sudah berapa kali tombol itu di klik
- jika program kalian panjang, tiba-tiba ada baris yang mengubah counter
- dan karena HOISTING, counter di dalam function jadi terpengaruh

- SOLUSI : agar counter tidak terganggu, sebenernya bisa simpan variabel counter di dalam function nya
- TAPI PROBLEMNYA JADI : hasilnya 1 semua. Karena, setiap manggil add(), counter akan diisi 0 kemudian tambah 1, dan terus begitu selanjutnya
===== */
