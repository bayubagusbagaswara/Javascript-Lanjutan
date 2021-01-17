/* ===== Seolah-olah mempunyai Private Method ===== */

// outer function
let add = (function () {
  let counter = 0;
  // inner function
  return function () {
    return ++counter;
  };
})();

console.log(add());
console.log(add());
console.log(add());

/* ===== Noted
- sebenarnya ada cara agar tidak lagi menulis dan menyimpan kedalam variabel
- dinamakan Immediately Invoked Function
- dengan cara tambahin kurung () untuk bungkus function + kasing kurung kosong diakhir dan diluar function ()
- Jadi pada saat manggil add() dia langsung menjalankan inner function nya
===== */
