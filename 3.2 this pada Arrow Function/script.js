// test this arrow function menggunakan Constructor Function
const Mahasiswa = function () {
  this.nama = "Bayu";
  this.umur = 24;
  this.sayHello = function () {
    console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun.`);
  };

  // Karena di global tidak ada this.umur maka hasilnya NaN
  // Untuk mengatasi hal tersebut gunakan arrow function
  // Karena arrow function tidak punya konsep this, maka this akan mencari ke lexical scopenya. Jadi, this.umur akan mengacu ke 24

  setInterval(() => {
    console.log(this.umur++);
    // Hasilnya 24++
  }, 500);
};
const objectBayu = new Mahasiswa();
