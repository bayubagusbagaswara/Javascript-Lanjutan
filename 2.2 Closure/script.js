/* ===== Lexical Scope ===== */
function init() {
  let nama = "Bayu";
  function tampilNama() {
    console.log(nama);
  }
  tampilNama();
}
init();

// Hasilnya adalah Bayu

/* ===== Noted 
- HOISTING function init()
- EXECUTION init()
- masuk function init()
- HOISTING nama = UNDEFINED, dan function tampilNama()
- EXECUTION tampilNama()
- masuk ke function tampilNama(), tidak ada HOISTING, langsung EXECUTION console.log(nama). Cari nama di LOCAL tampilNama, cari di parameter FUNCTION tampilNama, terus cari di LOCAL FUNCTION init(), dan ketemu yakni Bayu.

- console.log(nama) membutuhkan data nama, sedangkan di LOCAL nya tidak ada. Kemudian cari diatas yakni function PARENT nya.
- Proses tersebut di namakan CLOSURE
===== */
