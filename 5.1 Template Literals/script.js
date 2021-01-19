// Template Literals atau Template String
const nama = "Bayu";
const umur = 24;
console.log(`Halo, nama saya ${nama}, dan saya umur ${umur} tahun.`);

// Embedded Expression, langsung melakukan expression
console.log(`${1 + 1}`);
// function termasuk expression juga
// console.log(`${alert('halo')}`);
// ternary operator juga expression
const x = 10;
console.log(`${x % 2 == 0 ? "genap" : "ganjil"}`);

// HTML Fragments, bisa simpan kedalam html
const mhs = {
  nama: "bayu",
  umur: 24,
  nrp: "2216030063",
  email: "bayu@gmail.com",
};

const el = `<div class="mhs">
      <h2>${mhs.nama}</h2>
      <span class="nrp">${mhs.nrp}</span>
  </div>`;
console.log(el);
