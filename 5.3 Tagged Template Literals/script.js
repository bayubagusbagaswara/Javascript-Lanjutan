const nama = "Bayu Bagaswara";
const umur = 24;

// function
function coba(strings, ...values) {
  let str = "";
}
const str = coba`Halo, nama saya ${nama}, saya${umur} tahun`;
console.log(str);

/* =============== Noted
- Menampilkan string yang sama dengan Template Literal, jadi harus gabungkan string dengan values (expressionnya)
=============== */
