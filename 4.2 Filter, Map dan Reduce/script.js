/* =============== Map =============== */
const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];

const newAngka = angka.map((a) => {
  return a * 2;
});

console.log(newAngka);
// Hasilnya [-2, 16, 18, 2, 8, -10, -8, 6, 4, 18]
console.log(angka); // tidak mengubah isi array angka

/* =============== Noted 
- kita akan memetakan tiap-tiap elemen di dalam array nya menggunakan fungsi yang baru
- kalikan semua elemen array dengan 2, angka * 2 
=============== */
