// test konsep this arrow function menggunakan Object Literal
const mhs1 = {
  nama: "Bayu",
  umur: 24,
  sayHello: () => {
    console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun.`);
    // hasil console log adalah undefined
    // Karena this tidak mencari ke lexical scopenya.
    // Dan Arrow Function tidak memiliki konsep this, maka this.nama dan this.umur akan mencari keatas.
    // dia akan mencari terus sampai ke window. Karena di window tidak ditemukan this.umur dan this.nama, maka hasilnya undefined.
  },
};
