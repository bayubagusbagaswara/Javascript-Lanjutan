/* ===== dari code sebelumnya ===== */
// PROBLEM sebelumnya : dengan membuat Object.create() seolah kita mengelola 2 object yang berbeda yaitu Object Mahasiswa dan Object Method Mahasiswa. Dan sebenarnya kita hanya menginginkan Object Mahasiswa nya saja.

// Proses dibelakang layar Javascript membuat Object.create
function Mahasiswa(nama, energi) {
  let this = Object.create(Mahasiswa.prototype);

  this.nama = nama;
  this.energi = energi;

  return this;
}
// dan sebenarnya yg terjadi adalah Javascriptnya membuat Object.create()
// Tapi, didalam Object.create() sebenarnya Javascript memanggil Object Mahasiswa.prototype
// Jadi, sebenarnya ada sebuah properti yang default dijadikan Parent oleh Javascriptnya
// Itu terjadi di belakang layar
// Sebenarnya Construction Function itu mempunyai Parent yang namanya adalah Prototype
// Jadi, tidak perlu bikin object baru / object lain yang kita jadikan sebagai parent Object Utama
