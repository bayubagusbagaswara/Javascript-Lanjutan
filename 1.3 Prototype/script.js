/* ===== dari code sebelumnya ===== */
// PROBLEM sebelumnya : dengan membuat Object.create() seolah kita mengelola 2 object yang berbeda yaitu Object Mahasiswa dan Object Method Mahasiswa. Dan sebenarnya kita hanya menginginkan Object Mahasiswa nya saja.

// Function declaration biasa
function Mahasiswa(nama, energi) {
  // inisialisasi variabel
  let mahasiswa = {};

  mahasiswa.nama = nama;
  mahasiswa.energi = energi;

  return mahasiswa;
}
