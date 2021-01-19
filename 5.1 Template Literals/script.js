/* =============== Contoh Multi-Line String =============== */
`string text baris 1
string text baris 2
string text baris 3`;
// untuk memisah string \n, kalau menggunakan kutip biasa
// console.log("string 1\nstring 2");
// kalau menggunakan back tick cukup di enter aja
// console.log(`string 1
// string 2`);

/* =============== Embedded Expression =============== */
// `string text ${expression} string text`;

/* =============== Tagged Template =============== */
// tag`string text ${expression} string text`;

/* =============== Multi-line String (HTML Fragments) (1) =============== */
const mhs = {
  nama: "Bayu Bagaswara",
  umur: 24,
  nrp: "2216030063",
  email: "bagaszwara@gmail.com",
};
//  tampilkan data mhs diatas kedalam html, sebelumnya menggunakan concat, satu per satu dimasukkan kedalam variabel el
// let el = "";
// el += '<div class="mhs">';
// el += "<h2>" + mhs.nama + "</h2>";
// el += '<span class="nrp">' + mhs.nrp + "</span>";
// el += "</div>";
// console.log(el);
// Hasil : <div class="mhs"><h2>Bayu Bagaswara</h2><span class="nrp">2216030063</span></div>

// bikin di Template Literal, cukup tulis Back Tick langsung isi semua string HTML nya
let el = `<div class="mhs">
<h2>${mhs.nama}</h2>
<span class="nrp">${mhs.nrp}</span>
</div>`;
console.log(el);
// Hasil :
/* <div class="mhs">
<h2>Bayu Bagaswara</h2>
<span class="nrp">2216030063</span>
</div> */

/* =============== Embedded Expression =============== */
// menyimpan expression kedalam template literal
const nama = "Bayu";
const umur = 24;
console.log(`Halo, nama saya ${nama}, dan saya ${umur} tahun`);

// Expression Interpolation (1)
let a = 10;
let b = 15;
console.log(
  "Jika a = 10 dan b = 15, maka hasil penjumlahannya adalah : " +
    (a + b) +
    ", bukan " +
    (2 * a + b)
);
// Expression Interpolation (2)
// code diatas dimasukkan ke template literal hanya menuliskan Back Tick
let a = 10;
let b = 15;
console.log(
  `Jika a = 10 dan b = 15, maka hasil penjumlahannya adalah : ${a + b}, bukan ${
    2 * a + b
  }`
);
