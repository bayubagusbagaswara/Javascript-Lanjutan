/* ===== dari code sebelumnya ===== */
// PROBLEM sebelumnya : dengan membuat Object.create() seolah kita mengelola 2 object yang berbeda yaitu Object Mahasiswa dan Object Method Mahasiswa. Dan sebenarnya kita hanya menginginkan Object Mahasiswa nya saja.

// Proses dibelakang layar Javascript membuat this dan return
function Mahasiswa(nama, energi) {
  let this = {};

  this.nama = nama;
  this.energi = energi;

  return this;
}
// sebenarnya dibelakang layar, Javascript mengeksekusi dengan membuat inisialisasi variabel this dan return this.
