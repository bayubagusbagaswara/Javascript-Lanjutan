/* ===== dari code sebelumnya ===== */
// PROBLEM sebelumnya : dengan membuat Object.create() seolah kita mengelola 2 object yang berbeda yaitu Object Mahasiswa dan Object Method Mahasiswa. Dan sebenarnya kita hanya menginginkan Object Mahasiswa nya saja.

// Mengatasi PROBLEM: ganti properti/mahasiswa menjadi this
function Mahasiswa(nama, energi) {
  this.nama = nama;
  this.energi = energi;
}
