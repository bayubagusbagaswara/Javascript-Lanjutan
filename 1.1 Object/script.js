/* ===== Object Literal ===== */
let mahasiswa1 = {
  // properti
  nama: "Bayu",
  energi: 10,
  // method
  makan: function (porsi) {
    this.energi = this.energi + porsi;
    console.log(`Halo ${this.nama}, selamat makan!`);
  },
};
let mahasiswa2 = {
  // properti
  nama: "Fauziah",
  energi: 30,
  // method
  makan: function (porsi) {
    this.energi = this.energi + porsi;
    console.log(`Halo ${this.nama}, selamat makan!`);
  },
};

/* ===== Noted 
- Objectnya lansung diisi oleh properti dan method di dalamnya
- untuk instansiasi object berikutnya, mau gak mau harus dicopy selanjutnya
===== */
