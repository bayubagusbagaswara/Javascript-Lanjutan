const nama = "Bayu Bagaswara";
const umur = 24;

// function
function coba(strings, nama, umur) {
  return strings;
}
const str = coba`Halo, nama saya ${nama}, saya${umur} tahun`;
console.log(str);

/* =============== Noted
- cara ubah template literals biasa menjadi tagged template, dengan menulisakan namafunction didepan string nya
- Jadi string template literals, seolah-olah akan masuk jadi parameter pada function 
- Parameter strings akan memecah string dari template literals yang dipisahkan dengan expression nya. Disimpan dalam array
- Expression menjadi parameter function
=============== */
