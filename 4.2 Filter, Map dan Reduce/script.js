/* =============== Filter =============== */

const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];

// menggunakan Filter dan diubah menjadi Arrow Function
const newAngka = angka.filter((a) => {
  a >= 3;
});

console.log(newAngka);
// Hasilnya 8,9,4,3,9

/* =============== Noted 
- langsung panggil Array mana yang akan di filter.
- dan filter memiliki callback function nya
- a merepresentasikan tiap-tiap elemen di dalam Array Angka
- elemen ke 1 = -1
- elemen ke 2 = 8
- elemen ke 3 = 9 dst...
=============== */
