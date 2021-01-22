function jumlahkan(...angka) {
  //** bentuk sudah array */
  //   let total = 0;
  //** setiap element a dari array angka */
  //   for (const a of angka) {
  //  total += a;
  //   }
  //** pake Reduce juga bisa */
  return angka.reduce(
    (accumulator, currentValue) => accumulator + currentValue
  );
}
console.log(jumlahkan(1, 2, 3, 4, 5));

//* Array Destructuring */
const kelompok1 = ["Bayu", "Varid", "Fajar", "Hendra"];
const [ketua, wakil, ...anggota] = kelompok1;

//* Filtering
function filterBy(type, ...values) {
  return values.filter((v) => typeof v === type);
}
console.log(filterby("boolean", 1, 2, "Bayu", false, 10, true, "Bagus"));

//** akan memfilter tergantung tipe datanya */
