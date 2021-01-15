/* ===== dari code sebelumnya ===== */
// PROBLEM sebelumnya : dengan membuat Object.create() seolah kita mengelola 2 object yang berbeda yaitu Object Mahasiswa dan Object Method Mahasiswa. Dan sebenarnya kita hanya menginginkan Object Mahasiswa nya saja.

// Function declaration biasa ubah menjadi Construction Function
function Mahasiswa(nama, energi) {
  mahasiswa.nama = nama;
  mahasiswa.energi = energi;
}
// kalau mau diubah jadi construction function, tinggal hapus inisialiasi variabel untuk object nya, dan juga hapus returnya. Tapi, karena inisialiasi variabel dihilangkan, maka tidak punya akses lagi ke variabel mahasiswa/properti mahasiswa.
