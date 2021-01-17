/* ===== Function Factory ===== */
function init() {
  return function (nama) {
    console.log(nama);
  };
}
let panggilNama = init();
panggilNama("Bayu");
panggilNama("Bagus");
panggilNama("Bagaswara");

// Hasilnya adalah Bayu, Bagus, Bagaswara

/* ===== Noted 
- apabila hanya mengembalikan function, bisa diringkas lagi tanpa nama function, alias anonymous function. Atau function tanpa nama hanya menerima parameter.
===== */
