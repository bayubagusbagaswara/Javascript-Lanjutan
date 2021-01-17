/* ===== Seolah-olah mempunyai Private Method ===== */

let counter = 0;
// outer function
let add = function () {
  let counter = 0;
  // inner function
  return function () {
    ++counter;
  };
};

// kalo gini yang baru jalan baru function add(), inner function baru setengah
console.log(add());
console.log(add());
console.log(add());

/* ===== Noted
- COUNTER TIDAK TERGANGGU TERCAPAI, tapi PROBLEM NYA SELALU DISET KE 0 LAGI
- SOLUSINYA PAKE CLOSURE : Saat kita return, yang kita return adalah function
===== */
