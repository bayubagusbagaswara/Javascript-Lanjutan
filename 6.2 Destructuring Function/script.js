/* =============== Kasus 1 =============== */
function penjumlahanPerkalian(a, b) {
  return [a + b, a * b];
}

// panggil function dan kirimkan parameter 2,3 dan petakan menjadi jumlah dan kali
const [jumlah, kali] = penjumlahanPerkalian(2, 3);
console.log(jumlah);
console.log(kali);

/* =============== Kasus 2: return value nambah =============== */
function kalkulasi(a, b) {
  return [a + b, a - b, a * b, a / b];
}
const [tambah, kurang, kali, bagi] = kalkulasi(2, 3);
console.log(bagi);

/* =============== Kasus 3 : urutan destructuring harus sesuai/gak boleh ketuker. Agar urutan tidak berpengaruh, maka return value harus diubah jadi Object =============== */
function kalkulasi(a, b) {
  return {
    tambah: a + b,
    kurang: a - b,
    kali: a * b,
    bagi: a / b,
  };
}
const { bagi, tambah, kali, kurang } = kalkulasi(2, 3); // tanpa peduli urutan

/* =============== Destructuring function arguments =============== */
const mhs1 = {
  nama: "Bayu",
  umur: 24,
  email: "bayu@gmail.com",
  nilai: {
    tugas: 80,
    uts: 85,
    uas: 75,
  },
};

// pecah objectnya di parameter
function cetakMhs({ nama, umur, nilai: { tugas, uts, uas } }) {
  return `Halo, nama saya ${nama}, saya berumur ${umur} tahun dan nilai uas saya adalah ${uas}`;
}

// dikirim argument berupa object
console.log(cetakMhs(mhs1));
