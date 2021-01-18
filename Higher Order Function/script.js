/* ========== Contoh 2 ========== */

setTimeout(function () {
  console.log("Hello World!");
}, 1000);

/* ===== Noted 
- method setTimeout ini mempunyai 2 parameter :
- parameter 1 adalah function()
- parameter 2 adalah set waktunya (milisecond waktu tunggu)
- Karena parameter 1 adalah function / Callback, maka setTimeout disebut dengan Higher Order Function. 
===== */

/* ========== Contoh 3 ========== */
const tombol = document.querySelector(".submit");
tombol.addEventListener("click", function () {
  console.log("tombol ditekan!");
});

/* ===== Noted 
- begitu tombol diklik lalu melakukan aksi tertentu.
- pakai DOM bisa ambil elementnya dulu.
- lalu kasih addEventListener, lalu eventnya apa dan callbacknya apa.
===== */

/* ========== Contoh 4 ========== */
function ucapkanSalam(waktu) {
  // return value berupa function
  return function (nama) {
    console.log(`Halo ${nama}, selamat ${waktu}, semoga harimu menyenangkan!`);
  };
}
let selamatMalam = ucapkanSalam("Malam");
console.dir(selamatMalam("Bayu"));

// kita juga bisa punya function yang return value nya adalah function lagi
/* ===== Noted
- function ucapkanSalam bisa disebut Higher Order Function, karena didalamnya memiliki return value yang juga sebuah functions
===== */
