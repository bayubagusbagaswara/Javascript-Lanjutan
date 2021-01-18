/* =============== Filter =============== */

const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];

// coba gunakan for biasa
const newAngka = [];
for (let i = 0; i < angka.length; i++) {
  if (angka[i] >= 3) {
    newAngka.push(angka[i]);
  }
}
console.log(newAngka);
// Hasilnya ada 5 angka yakni 8,9,4,3,9

/* =============== Noted 
- mencari angka >= 3
=============== */
