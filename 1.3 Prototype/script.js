// ubah konsep Prototype Inheritance menjadi Class pada konsep Object Oriented Programming

class Mahasiswa {
  // CONSTRUCTOR : method wajib yang akan dijalankan ketika instansiasi object pertama kali, berisi properti yang wajib/melekat pada object
  constructor(nama, energi) {
    this.nama = nama;
    this.energi = energi;
  }

  // METHOD TAMBAHAN : method nya langsung ditulis dibawah
  makan(porsi) {
    this.energi += porsi;
    return `Halo ${this.nama}, selamat makan!`;
  }
  main(jam) {
    this.energi -= jam;
    return `Halo ${this.nama}, selamat bermain!`;
  }
  tidur(jam) {
    this.energi += jam * 2;
    return `Halo ${this.nama}, selamat tidur!`;
  }
}

// instansiasi object baru
let object1 = new Mahasiswa("Bayu", 10);
let object2 = new Mahasiswa("Fauziah", 50);

/* ===== Noted 
- Prototype ini mirip dengan Kelas untuk Object Oriented Programming
- Tapi, kenapa Javascript tidak menganut konsep Kelas? karena javascript hanya dibuat selama 1 minggu.
- sebenarnya versi kelas ini, dibelakang layar menjalankan Prototype
===== */
