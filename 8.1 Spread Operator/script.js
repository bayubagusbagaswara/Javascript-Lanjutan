const mhs = ["Bayu", "Bagus", "Bagaswara"];

console.log(...mhs); // di spread langsung pecah isi array nya

/* =============== Contoh Penggunaan =============== */
// 1. Untuk menggabungkan 2 array atau lebih
const mhs1 = ["Bayu", "Bagus", "Bagaswara"];
const dosen = ["Ade", "Hendra", "Wanda"];
const gabungArray = [...mhs1, "aji", ...dosen]; // bisa fleksibel nambahin isi ke dalam array nya
console.log(gabungArray);

// 2. Melakukan copy array, tanpa mengubah array aslinya (tanpa reference)
const mhs3 = ["Bayu", "Bagus", "Bagaswara"];
const mhs4 = [...mhs3];
mhs4[0] = "Dimas";
console.log(mhs3); // hasilnya tetep index-0 Bayu
console.log(mhs4); // hasilnya index-0 Dimas

/* =============== ambil nama li lalu simpan ke dalam array =============== */

const liMhs = document.querySelectorAll("li");
const mhs = [];
for (let i = 0; i < liMhs.length; i++) {
  mhs.push(liMhs[i].textContent);
}
console.log(mhs);
/**
 * atau pake map, karena li bentuknya NodeList maka di spread dulu agar jadi Array
 */

const mhs = [...liMhs].map((m) => m.textContent);
console.log(mhs);
