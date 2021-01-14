/* ===== Untuk mengatasi problem Function Declaration ===== */

// object untuk method
const methodMahasiswa = {
  makan: function (porsi) {
    this.energi += porsi;
    console.log(`Halo ${this.nama}, selamat makan!`);
  },
  main: function (jam) {
    this.energi -= jam;
    console.log(`Halo ${this.nama}, selamat bermain!`);
  },
  tidur: function (jam) {
    this.energi += jam * 2;
    console.log(`Halo ${this.nama}, selamat tidur!`);
  },
};

// function declaration
function Mahasiswa(nama, energi) {
  let mahasiswa = {};
  mahasiswa.nama = nama;
  mahasiswa.energi = energi;
  mahasiswa.makan = methodMahasiswa.makan;
  mahasiswa.main = methodMahasiswa.main;
  // PROBLEM: kalo ada method baru, mau gamau harus didaftarin disini
  mahasiswa.tidur = methodMahasiswa.tidur;

  return mahasiswa;
}

let object1 = Mahasiswa("Bayu", 10);

/* ===== Noted 
- setiap menjalankan program, object method akan disimpan sekali di memori. Jadi saat memanggil method didalam function declaration hanya mengacu ke memori, tidak dibuat ulang
===== */
