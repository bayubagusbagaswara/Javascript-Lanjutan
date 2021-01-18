/* =============== Method Chaining / Berantai =============== */
const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];

const hasil = angka
  // filter dulu elemen yg sesuai
  .filter((a) => a > 5)
  //   8, 9, 9
  // map membuat array baru dgn elemen baru * 3
  .map((a) => a * 3)
  //   24, 27, 27
  // dibagi 2 dulu
  .map((a) => a / 2)
  // jumlahkan semua elemen array baru nya
  .reduce((acc, curr) => acc + curr);

console.log(hasil); // Hasil 39

/* =============== Noted 
- cari angka > 5. kemudian hasilnya kalikan 3, kemudian dibagi 2, terakhir jumlahkan semuanya
- Method Chaining : bisa menggabungkan fungsi-fungsi pada Higher Order Function dalam sekali Ekesekusi (gak perlu disimpan dalam variabel dulu)
=============== */
