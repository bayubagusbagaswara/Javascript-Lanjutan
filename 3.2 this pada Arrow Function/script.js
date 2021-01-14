// test this arrow function menggunakan Constructor Function
const Mahasiswa = function () {
  this.nama = "Bayu";
  this.umur = 24;
  this.sayHello = function () {
    console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun.`);
    // karena Function Expression memiliki konsep This, maka this akan mengacu ke Object Mahasiswa, dan memiliki this.nama dan this.umur
    // Function Expression tidak akan kena hoisting, karena disimpan dalam variabel
  };

  // Kasus lagi, jika menambahkan function yang otomatis dijalankan. Setiap interval akan menjalankan isi functionnya.
  // Menggunakan Function Declaration, dan akan kena hoisting. Sehingga pada saat this dipanggil, dia akan mengecek ke global
  setInterval(function () {
    console.log(this.umur++);
    // Hasilnya NaN
  }, 500);
  //
};
const objectBayu = new Mahasiswa();
