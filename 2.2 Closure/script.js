function init() {
  let nama = "Bayu";
  function tampilNama() {
    console.log(nama);
  }
  return tampilNama;
}
init();

// Hasilnya adalah Object tampilNama() yang dibuat oleh Javascript

/* ===== Noted 
- function tampilNama() sebagai INNER FUNCTION langsung dijalankan.
- kalau function tampilNama di return tapi tidak dijalankan apa yang terjadi? Hasilnya tidak terjadi apa-apa.
- Jadi, mengembalikan function tampilNama tanpa menjalankannya
- saat init() dipanggil, kemudian masuk ke function init()
- terus didalamnya kita punya function tampilNama yang masuk HOISTING
- terus function tampilNama langsung dikembalikan/return.
- Istilah jika langsung dikembalikan itu adalah Function Baru DIJALANKAN SEBAGIAN. Karena FUNCTION tampilNama() sudah masuk CREATION PHASE, tapi belum dieksekusi program didalam function tersebut.

- terus BAGAIMANA agar function tampilNama() dapat dijalankan dan isi programnya bisa dieksekusi ?
- CARANYA: dengan cara menyimpan EXECUTION FUNCTION GLOBAL kedalam VARIABEL



===== */
