/* ===== Untuk mengatasi problem Function Declaration ===== */

// object literal untuk method
const methodMahasiswa = {
  makan: function (porsi) {
    this.energi += porsi;
    console.log(`Halo ${this.nama}, selamat makan!`);
  },
  main: function (jam) {
    this.energi -= jam;
    console.log(`Halo ${this.nama}, selamat bermain!`);
  },
  tidur: function (jam) {
    this.energi += jam * 2;
    console.log(`Halo ${this.nama}, selamat tidur!`);
  },
};

/* ===== PROBLEM : sebenarnya hanya butuh object Mahasiswa, tidak butuh object method nya . Seolah-olah kita kerja 2 kali. Sebenarnya ada cara lain agar tidak bikin object lain untuk dihubungkan ke object Mahasiswa, yaitu dengan Prototype ===== */

// function declaration
function Mahasiswa(nama, energi) {
  let mahasiswa = Object.create(methodMahasiswa); // sama membuat object, bisa isi parameter
  mahasiswa.nama = nama;
  mahasiswa.energi = energi;

  return mahasiswa;
}

let object1 = Mahasiswa("Bayu", 10);

/* ===== Noted 
- bagaimana cara membuat agar object function declaration Mahasiswa bisa mengenali object literal methodMahasiswa adalah kepunyaannya dia. 
- yaitu dengan cara otomatis menggunakan Object.create() 
- menggunakan konsep pewarisan. Jadi, parameter Object.create() bisa menghubungkan parent nya
===== */
