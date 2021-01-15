/* ===== dari code sebelumnya ===== */
// PROBLEM sebelumnya : dengan membuat Object.create() seolah kita mengelola 2 object yang berbeda yaitu Object Mahasiswa dan Object Method Mahasiswa. Dan sebenarnya kita hanya menginginkan Object Mahasiswa nya saja.

// Memanfaatkan method untuk mengelola method
function Mahasiswa(nama, energi) {
  this.nama = nama;
  this.energi = energi;
}
Mahasiswa.prototype.makan = function (porsi) {
  this.energi += porsi;
  return `Halo ${this.nama}, selamat makan!`;
};
Mahasiswa.prototype.main = function (jam) {
  this.energi -= jam;
  return `Halo ${this.nama}, selamat bermain!`;
};
Mahasiswa.prototype.tidur = function (jam) {
  this.energi += jam * 2;
  return `Halo ${this.nama}, selamat tidur!`;
};
let object = new Mahasiswa("Bayu", 10);

// method makan sudah otomatis dimasukkan kedalam Prototype, dan langsung menempel dengan Object Mahasiswa.
// Sehingga jika kita tulis object.makan(3), maka methodnya langsung terpanggil
