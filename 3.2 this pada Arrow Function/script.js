// jika buat Constructor Function
// sebenarnya sama dengan cara membuat arrow function
const Mahasiswa = function () {
  // bikin properti
  this.nama = "Bayu";
  this.umur = 33;
  //   this ini akan mengacu langsung pada Object Mahasiswa

  this.sayHello = function () {
    console.log(`Halo, nama saya ${this.nama}, dan saya ${this.umur} tahun.`);
  };
};
// instansiasi Objectnya
const objectBayu = new Mahasiswa();

// ubah Constructor menjadi Arrow Function

// arrow function tidak memiliki konsep this

// test konsep this arrow function dengan Object Literal

// function expression yang disimpan dulu kedalam variabel maka function tersebut tidak akan menerima hoisting. Dan function expression memiliki konsep this, sehingga isi dari function berupa this akan mencari langsung keatasnya.

// sebaliknya jika function tersebut adalah function deklaration (tidak disimpan dalam variabel) maka akan kena hoisting

// Untuk mengakali function declaration tersebut maka diubah menjadi arrow function. Karena arrow function tidak memiliki konsep this, maka this akan mencari ke lexical scopenya(bukan diglobal)
