function init() {
  let nama = "Bayu";
  function tampilNama() {
    console.log(nama);
  }
  return tampilNama;
}
let panggilNama = init();
panggilNama();

// Hasilnya adalah Bayu

/* ===== Noted 
- dengan menyimpan pemanggilan function init() dalam variabel panggilNama, artinya ini baru dieksekusi sebagian (belum dieksekusi semua isi programmnya).
- untuk menjalankan SEBAGIAN LAGI, maka EXECUTION lagi variabel panggilNama menjadi sebuah function. Jadi, akan mengeksekusi function tampilNama() yang belum dieksekusi sebelumnya.

- Hal tersebut akan memungkinkan untuk membuat function factory


===== */
