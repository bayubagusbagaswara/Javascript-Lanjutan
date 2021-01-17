/* ===== Seolah-olah mempunyai Private Method ===== */

let counter = 0;
// outer function
let add = function () {
  let counter = 0;
  // inner function
  return function () {
    return ++counter;
  };
};

// SOLUSINYA : simpan dulu kedalam variabel
let a = add();

console.log(a());
console.log(a());
console.log(a());

/* ===== Noted
- add() buat jalanin semuanya
- sedangakan a hanya untk jalanin function nya (yang di return)
- setiap kita jalanin inner function, counter akan selalu mengacu ke nilai counter sebelumnya. 
- seolah-olah let counter jadi PRIVATE GAK BISA DIAKSES DARI LUAR, tapi nilainya tetap dipertahankan karena dia menjadi CLOSURE
===== */
