/* ===== Seolah-olah mempunyai Private Method ===== */

let counter = 0;
let add = function () {
  return ++counter;
};

// isi ulang counter / mengubah counter awal
counter = 10;
console.log(add());

/* ===== Noted
- menghitung sudah berapa kali tombol itu di klik
- jika program kalian panjang, tiba-tiba ada baris yang mengubah counter
- dan karena HOISTING, counter di dalam function jadi terpengaruh

===== */
