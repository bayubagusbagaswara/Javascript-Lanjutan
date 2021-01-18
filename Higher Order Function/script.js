/* =============== Contoh Abstraksi =============== */
function repeatLog(n) {
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
}
repeatLog(10);

/* =============== Noted
- nulis for nya cuma sekali, ganti angka 10 dengan variabel n
- variabel n menjadi argument dari function 
- jika kita ingin mengulang sesuai dengan yang diinginkan, tinggal panggil function dan dikirimkan parameter berapa kali pengulangannya.
=============== */

/* =============== Jika ingin Action lain =============== */
function repeat(n, action) {
  for (let i = 0; i < n; i++) {
    action(i); // jalankan aksi beberapa kali sesuai jumlah perulangannya
  }
}
repeat(10, console.log); // aksi console.log
repeat(3, alert); // aksi alert

/* =============== Noted 
- function menerima paramater berupa n (jumlah perulangan) dan parameter action (aksi apa yg ingin dilakukan)
- untuk menjalankan tinggal panggil function repeat sekaligus mengirimkan argument n dan argument action nya
- jadi parameter keduanya adalah function 
=============== */
