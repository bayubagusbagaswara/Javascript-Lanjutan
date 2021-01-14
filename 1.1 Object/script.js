/* ===== Constructor Function ===== */
function Mahasiswa(nama, energi) {
  this.nama = nama;
  this.energi = energi;

  this.makan = function (porsi) {
    this.energi += porsi;
    console.log(`Halo ${this.nama}, selamat makan!`);
  };
  this.main = function (jam) {
    this.energi -= jam;
    console.log(`Halo ${this.nama}, selamat bermain!`);
  };
}

let object1 = new Mahasiswa("Bayu", 10);
let object2 = new Mahasiswa("Fauziah", 50);

/* ===== Noted 
- menggunakan keyword new
- sebetulnya mirip banget dengan functiond declaration
- ini paling sering digunakan
- tidak perlu menuliskan deklarasi variabel dan return nya.
- this akan mengacu ke objectnya yakni Mahasiswa
===== */
