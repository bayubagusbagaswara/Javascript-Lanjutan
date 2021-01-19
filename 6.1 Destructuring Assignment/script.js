// Array, isinya langsung dipetakan
const coba = ["satu", "dua", "tiga"];

const [a, b, c] = coba;
console.log(a); // "satu"
console.log(b); // "dua"
console.log(c); // "tiga"

// Object, properti nya langsung dipetakan
const mhs = {
  nama: "Bayu Bagaswara",
  umur: 24,
  email: "bayubagaswara@gmail.com",
};
const { nama, umur, email } = mhs;
console.log(nama); // "Bayu Bagaswara"
console.log(umur); // 24
console.log(email); // "bayubagaswara@gmail.com"

/* =============== Noted 
- perhatikan tanda untuk Destructuring
- Array --> []
- Object --> {}
=============== */
