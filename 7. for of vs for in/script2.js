/* =============== For .. in =============== */
const mhs = {
  nama: "Bayu",
  umur: 24,
  email: "bayu@gmail.com",
};

// Object bukan iterable, jadi gabisa pake for..of
for (m in mhs) {
  console.log(m); // hasilnya adalah properti object
}

// kalau mau ambil isi propertinya
for (m in mhs) {
  console.log(`Properti ${m} berisi ${mhs[m]}`);
}
