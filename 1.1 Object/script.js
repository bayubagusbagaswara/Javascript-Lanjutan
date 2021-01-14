/* ===== Function Declaration ===== */
function Mahasiswa(nama, energi) {
  // deklarasikan dulu kalo ingin buat object dengan object kosongan
  let mahasiswa = {};
  // isi properti
  mahasiswa.nama = nama;
  mahasiswa.energi = energi;
  // isi method
  mahasiswa.makan = function (porsi) {
    this.energi += porsi;
    console.log(`Halo ${this.nama}, selamat makan!`);
  };
  mahasiswa.main = function (jam) {
    this.energi -= jam;
    console.log(`Halo ${this.nama}, selamat main!`);
  };
  // return
  return mahasiswa;
}
// instansiasi object
let object1 = Mahasiswa("Bayu", 10);
let object2 = Mahasiswa("Fauziah", 50);

/* ===== Noted 
- cukup bikin template/blueprint satu aja
- kalau ingin bikin object baru, tinggal instansiasi namanya aja
- biasanya ketika instansiasi object akan sekaligus mengirim argument, yang kemudian dijadikan sebagai parameter function nya
- harus ada return, karena untuk memasukkan/mengembalikan data-data object (nama,energi) ke object utamanya
===== */
