// Function Expression
const tampilNama = function (nama) {
  return `Halo, ${nama}`;
};
console.log(tampilNama("Bayu"));

// Ubah ke Arrow Function
const tampilNama = (nama) => {
  return `Halo, ${nama}`;
};
console.log("Bayu");

// Cara penulisan Arrow Function ada 3 bentuk: bisa lebih satu parameter
const tampilNama = (nama, waktu) => {
  return `Selamat ${waktu}, ${nama}`;
};
console.log(tampilNama("Bayu", "Pagi"));

// pake map untuk menghitung nilai di dalam array
let mahasiswa = ["Bayu", "Alfan", "Varid"];
let jumlahHuruf = mahasiswa.map(function (nama) {
  return nama.length;
});
console.log(jumlahHuruf);

// ubah jadi Arrow Function
let jumlahHuruf = mahasiswa.map((nama) => nama.length);
console.log(jumlahHuruf);

// jika mengembalikan dalam bentuk object
let jumlahHuruf = mahasiswa.map((namaObject) => ({
  nama: namaObject,
  jmlHuruf: namaObject.length,
}));
console.log(jumlahHuruf);
