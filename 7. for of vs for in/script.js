/* =============== Coba for .. of =============== */
// 1. Melooping Array
const mhs = ["Bayu", "Bagus", "Bagaswara"];
// tampilkan hanya nama-namanya saja dengan console

// for biasa
for (let i = 0; i < mhs.length; i++) {
  console.log(mhs[i]);
}

// forEach, m -> tiap elemen dalam array mhs
mhs.forEach((m) => console.log(m));

// Array termasuk Iterable Object bisa pake For Of
for (const m of mhs) {
  console.log(m);
}
// untuk ambil index dari Array, kalau pake for of bisa diakali menggunakan method entries
for (const [i, m] of mhs.entries()) {
  console.log(`${m} adalah mahasiswa ke ${i + 1}`);
}

// 2. melooping String, tidak bisa gunakan forEach
const nama = "Bagaswara";
for (const n of nama) {
  console.log(n); // tiap elemen (huruf) dalam string nama
}
