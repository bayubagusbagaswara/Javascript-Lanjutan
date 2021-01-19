const nama = "Bayu Bagaswara";
const umur = 24;

// function
function coba(strings, ...values) {
  return values;
}
const str = coba`Halo, nama saya ${nama}, saya${umur} tahun`;
console.log(str);

/* =============== Noted
- ada kala kita tidak tau berapa banyak parameter yang kita tampung.
- di Javascript bisa menampung semua parameter sekaligus dengan menggunakan Rest Parameter. ada titik 3 kali
- values adalah Rest Paramater yang isinya array yang menampung seluruh expression dari template literals nya
=============== */
