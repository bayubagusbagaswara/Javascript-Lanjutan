/* ===== Contoh 1 ===== */
function kerjakanTugas(matakuliah, selesai) {
  console.log(`Mulai mengerjakan tugas ${matakuliah} ...`);
  // panggil function selesai()
  selesai();
}

// menggunakan function selesai() sebagai argument
function selesai() {
  alert("Selesai mengerjakan tugas!");
}
// panggil function kerjakanTugas sekaligus kirim parameter 1 berupa STRING dan parameter 2 berupa FUNCTION
kerjakanTugas("Pemrograman Web", selesai);

/* ===== Noted 
- Parameter matakuliah disimpan berupa STRING, lalu Parameter selesai yang merupakan function.
- kita bisa menyimpan function lagi sebagai argument nya
- Jadi, function kerjakanTugas bisa disebut dengan Higher Order Function atau bisa dikatakan function yang memiliki Callback
- dan jika punya function sebagai argument disebut dengan Callback
 ===== */
