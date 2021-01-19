// Destructuring Array
const perkenalan = ["Halo", "nama", "saya", "Bayu"];
// const [salam, satu, dua, nama] = perkenalan;

// kalau ada elemen yg di skip
// const [salam, , , nama] = perkenalan;
// console.log(dua); // hasilnya kosong

// swap items (menukar isinya)
let a = 1,
  b = 2;
// variabel tambahan utk menampung sementara
[a, b] = [b, a];

/* =============== Return Value pada Function =============== */
function coba() {
  return [1, 2];
}
const [a, b] = coba(); // langsung dipetakan
console.log(a); // tipenya array

/* =============== Bongkar banyak array nya tapi tidak tahu berapa banyak element dalam arraynya - REST PARAMETER =============== */
const [a, ...values] = [1, 2, 3, 4, 5, 6];
console.log(a); // 1
console.log(values); // array, isinya 2,3,4,5,6

/* =============== Object =============== */
const mhs = {
  nama: "Bayu",
  umur: 24,
};
const { nama, umur } = mhs; // harus sama dengan nama properti
console.log(nama); // 'Bayu'

/* =============== Assignment tanpa deklarasi Object =============== */
({ nama, umur } = {
  nama: "Bayu",
  umur: 24,
});
console.log(nama); // 'Bayu'

/* =============== Mengganti nama properti objectnya =============== */
const mhs = {
  nama: "Bayu",
  umur: 24,
};
const { nama: n, umur: u } = mhs;
console.log(n); // panggil n = 'Bayu'

/* =============== Memberikan Default Value =============== */
const mhs = {
  nama: "Bayu",
  umur: 24,
};
const { nama, umur, email = "bayu@gmail.com" } = mhs;
console.log(email); // "bayu@gmail.com"

/* =============== Memberi nilai default + assign ke variabel baru =============== */
const mhs = {
  nama: "Bayu",
  umur: 24,
};
const { nama: n, umur: u, email: e = "bayu@gmail.com" } = mhs;
console.log(e); // "bayu@gmail.com"

/* =============== Rest Parameter =============== */
const mhs = {
  nama: "Bayu",
  umur: 24,
};
const { nama, ...value } = mhs;
console.log(nama); // 'Bayu'
console.log(value); // bentuknya Object

/* =============== Mengambil field pada object, setelah dikirim sebagai parameter untuk function  =============== */
const mhs = {
  id: 123,
  nama: "Bayu",
  umur: 24,
  email: "bayu@gmail.com",
};
// function ini akan ambil object, yg ditangkap bisa hanya salah satu properti
function getIdMhs({ id, nama }) {
  return nama;
}
console.log(getIdMhs(mhs)); // hasilnya nama, karena yg direturn hanya nama dan parameter getIdMhs hanya id dan nama
