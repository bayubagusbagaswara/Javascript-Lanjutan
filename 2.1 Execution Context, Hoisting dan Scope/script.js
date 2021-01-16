console.log(sayHello());

var nama = "Bayu";
var umur = 24;

// pada saat ketemu FUNCTION, itu seolah-olah dia menjalankan EXECUTION CONTEXT nya sendiri
function sayHello() {
  return `Halo, nama saya ${nama}, saya ${umur} tahun.`;
}

/* ===== Noted: perilaku jika ketemu FUNCTION
- ketika ketemu FUNCTION, maka akan masuk kedalam FUNCTION dan menjalankan LOCAL EXECUTION CONTEXT didalam function itu sendiri.
- function membuat Local Execution Context
- yang di dalamnya terdapat Creation dan Execution Fase
- di Local Function selain kita bisa akses window, kita juga punya akses ke Arguments
- di dalam Local Function juga terjadi proses HOISTING, mengecek apakah ada VAR dan FUNCTION lagi

===== */
