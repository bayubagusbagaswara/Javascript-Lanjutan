/* ===== Function Factory ===== */
function init() {
  function tampilNama(nama) {
    console.log(nama);
  }
  return tampilNama;
}
let panggilNama = init();
panggilNama("Bayu");

// Hasilnya adalah Bayu

/* ===== Noted 
- jika memanggil dan ingin menjalankan init() aja, maka function init() akan jalan dan EXECUTION return tampilNama tanpa menjalankan function tampilNama.

- Jadi, jika ingin menjalankan function panggilNama() harus diisi parameter
===== */
