function init() {
  let nama = "Bayu";
  let umur = 24;
  function tampilNama() {
    console.log(nama);
    console.log(umur);
  }
  console.dir(tampilNama);
}
init();

// Hasilnya adalah Object tampilNama() yang dibuat oleh Javascript

/* ===== Noted 
- jika console.dir maka akan tampil Object tampiNama() yang isinya ada Closure
- KENAPA ada CLOSURE? karena function tampilNama membutuhkan data nama dan data umur dari PARENT nya yaitu function init()

===== */
