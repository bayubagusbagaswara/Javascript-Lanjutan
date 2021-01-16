/* ===== Contoh Kasus 2 ===== */
function a() {
  console.log("ini a");

  function b() {
    console.log("ini b");

    function c() {
      console.log("ini c");
    }
    // start 3
    c();
  }
  // start 2
  b();
}
// start 1
a();

/* ===== Noted : Function di dalam Function 
- Urutan hasil dari function diatas adalah ini a, ini b, ini c

- PENJELASAN
- cek MULAI dari GLOBAL CONTEXT
- panggil/masuk ke a()
- HOISTING dulu seluruh isi di function a, yakni console.log('ini a') dan function b. Jadi, pertama function b sudah di CREATION. Kemudian EXECUTION pada console.log('ini a')
- TAMPILKAN ini a
- panggil/masuk ke b()
- HOISTING semua isi di function b, yakni console.log('ini b') dan function c. Pertama CREATION function c, kemudian EXECUTION console.log('ini b')
- TAMPILKAN ini b
- panggil/masuk ke c()
- TIDAK ADA HOISTING karena di dalam function c tidak ditemukan variabel atau function lagi. Sehingga langsung masuk PROSES EXECUTION pada console.log('ini c')
- Kalau C SELESAI maka langsung hilang dari tumpukan eksekusi EXECUTION
- Diikuti B yang SELESAI dan hilang dari tumpukan eksekusi
- Terakhir adalah A yang SELESAI

- JADI, proses awal mulai dari a -> b -> c
- Proses selesai dari c -> b -> a
===== */
