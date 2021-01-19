// 1. Membuat HTML Fragments
const mhs = {
  nama: "bayu",
  umur: 24,
  nrp: "2216030063",
  email: "bayu@gmail.com",
};
// simpan ke element html menggunakan template literal dan isi propertinya sesuai object
const el = `<div class="mhs">
  <h2>${mhs.nama}</h2>
  <span class="nrp">${mhs.nrp}</span>
  </div>`;
// sisipkan ke DOM
document.body.innerHTML = el;

// 2. Looping, jika data nya banyak
const mhs = [
  {
    nama: "bayu",
    email: "bayu@gmail.com",
  },
  {
    nama: "bagus",
    email: "bagus@gmail.com",
  },
  {
    nama: "bagaswara",
    email: "bagaswara@gmail.com",
  },
];
// looping menggunakan map
const el = `<div class="mhs">
  ${mhs
    .map(
      (m) => `<ul>
      <li>${m.nama}</li>
      <li>${m.email}</li>
  </ul>`
    )
    .join("")}
  </div>`;

// // 3. Conditionals
// bisa menggunakan ternary
const lagu = {
  judul: "Tetap Dalam Jiwa",
  penyanyi: "Isyana Sarasvati",
};

const el = `<div class="lagu">
  <ul>
  <li>${lagu.penyanyi}</li>
  <li>${lagu.judul}</li>
  </ul>
  </div>`;

// tapi ada keadaan yang beda dengan lainnya
const lagu = {
  judul: "Kau Adalah",
  penyanyi: "Isyana Sarasvati",
  //   misal tidak semua ada feat nya
  feat: "Rayi Putra",
};

const el = `<div class="lagu">
  <ul>
  <li>${lagu.penyanyi}</li>
  <li>${lagu.judul} ${lagu.feat ? `(feat. ${lagu.feat})` : ""}</li>
  </ul>
  </div>`;

// 4. Nested
// HTML Fragments Bersarang
const mhs = {
  nama: "Bayu",
  semester: 5,
  mataKuliah: [
    "Rekayasa Web",
    "Analisis dan Perancangan Sistem Informasi",
    "Pemrograman Sistem Interaktif",
    "Perancangan Sistem Berorientasi Object",
  ],
};

function cetakMataKuliah(mataKuliah) {
  return `
      <ol>
      ${mataKuliah.map((mk) => `<li>${mk}</li>`).join("")}
      </ol>`;
}
// map disimpan kedalah function cetakMataKuliah
const el = `<div class="mhs">
      <h2>${mhs.nama}</h2>
      <span class="semester">Semester: ${mhs.semester}</span>
      <h4>Mata Kuliah: </h4>
      ${cetakMataKuliah(mhs.mataKuliah)}
  </div>`;

// kita tampilkan ke dalam DOM
document.body.innerHTML = el;
