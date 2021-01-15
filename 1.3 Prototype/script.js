/* ===== dari code sebelumnya ===== */
// PROBLEM sebelumnya : dengan membuat Object.create() seolah kita mengelola 2 object yang berbeda yaitu Object Mahasiswa dan Object Method Mahasiswa. Dan sebenarnya kita hanya menginginkan Object Mahasiswa nya saja.

// Di depan layar hanya ditulis dibawah ini
function Mahasiswa(nama, energi) {
  this.nama = nama;
  this.energi = energi;
}
let object = new Mahasiswa("Bayu", 10);

// PROBLEM sekarang: bagaimana mengurusi method nya?
// Mengatasinya cukup memanfaatkan Prototype nya saja
