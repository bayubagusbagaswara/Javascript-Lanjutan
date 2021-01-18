/* =============== Reduce =============== */
const angka = [-1, 8, 9, 1, 4, -5, -4, 3, 2, 9];

const newAngka = angka.reduce((accumulator, currentValue) => {
  console.log(`Jumlah angka = ${accumulator}`);
  console.log(`Isi Elemen sekarang = ${currentValue}`);
  console.log(
    `Jumlah = ${accumulator} + ${currentValue} = ${accumulator + currentValue}`
  );
  console.log("===");

  return accumulator + currentValue;
}, 5); // sebenarnya ada nilai default untuk menentukan nilai awal, misal ditulis 5
console.log(`Total jumlah elemen = ${newAngka}`);

/* =============== Code sederhananya =============== */
const newAngka1 = angka.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  5
);
console.log(`Total jumlah elemen = ${newAngka1}`);

/* =============== Noted 
- Reduce : melakukan sesuatu terhadap seluruh elemen pada array nya
- pengennya jumlahkan semua elemen array nya
- Reduce punya 2 argument,
- Argument/parameter 1 adalah Accumulator (hasil dari prosesnya, seperti penjumlahannya). Hasil akumulasinya
- Argument/parameter 2 adalah Current Value (elemen array yang sedang dilooping / saat ini)
=============== */
