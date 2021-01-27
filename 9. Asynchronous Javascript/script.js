/** @STACK */
/**
 * ! Contoh 1
 */
console.log("satu");
console.log("dua");
console.log("tiga");
/*
 * @Noted
 * saat eksekusi script console terjadi di STACK
 * proses dimulai dari program paling atas. Javascript akan baca baris 1, kemudian akan dimasukkan dan dieksekusi di dalam STACK
 * dan jika program baris 1 selesai dieksekusi, maka akan dihilangkan dari STACK
 * selanjutnya akan diikuti program baris 2, eksekusi di STACK, sudah selesai baru dihilangkan dari STACK
 * seterusnya sampai baris program habis dieksekusi oleh Javascript
 */

/**
 * ! Contoh 2
 */
function kalikan(a, b) {
  return a * b;
}
function hitungLuas(sisi) {
  return kalikan(sisi, sisi);
}
function cetakLuasKotak(sisi) {
  const luas = hitungLuas(sisi);
  console.log(luas);
}
cetakLuasKotak(5);

/**
 * ! Noted : Urutan eksekusi program Contoh 2
 * 1. Pertama langsung panggil function @cetakLuasKotak sekaligus kirim argument. Kenapa langsung panggil cetakLuasKotak()? Karena, program lain berupa function yang artinya di Hoisting dan dimasukkan ke dalam Heap.
 * 2. Langsung jalankan function @cetakLuasKotak dan kirimkan parameter. Cari function @cetakLuasKotak , lanjut masuk ke function nya. Cari apakah ada varibel/function, teryata ada variabel yang juga tugasnya memanggil function @hitungLuas , hoisting dulu variabel @luas
 * 3. Cari function @hitungLuas , masuk kedalam function nya. Ternyata didalamnya nya terdapat @return yang juga memanggil function @kalikan
 * 4. Cari function @kalikan , masuk kedalam function nya. Di dalam function terdapat @return nilai a * b
 * 5. Eksekusi dan kembalikan @a * @b = 25. Selesai eksekusi dan hilang dari tumpukan Stack Eksekusi
 * 6. Kembali ke return function @kalikan di dalam function @hitungLuas , Eksekusi return dan hilang dari tumpukan Stack
 * 7. Kembali ke function @hitungLuas didalam function @cetakLuasKotak , simpan hasil 25 kedalam variabel @luas , kemudian Eksekusi variabel @luas tampilkan hasilnya 25. Selesai dan hilangkan @consolelog dari tumpukan Stack
 * 8. Selesai eksekusi function @cetakLuasKotak
 */

/* ===== Noted
1. function kalikan masuk kedalam -> Heap (hoisting)
2. hitungLuas masuk kedalam -> Heap
3. cetakLuasKotak masuk kedalam -> Heap
4. eksekusi cetakLuasKotak masuk kedalam -> Stack
5. cari function cetakLuasKotak dan kirimkan argument
6. masuk ke function cetakLuasKotak
7. simpan variabel lias didalam -> Heap
8. eksekusi luas = hitungLuas(sisi) -> Stack
9. cari function hitungLuas dulu kirimkan argument dengan nama sisi = 5
10. masuk function hitungLuas
11. eksekusi function kalikan(sisi, sisi) -> Stack
12. masuk function kalikan dengan argument sisi, sisi dan ditangkap dengan parameter a, b
13. eksekusi a * b -> Stack
14. 5 * 5 = 25
15. Selesai, eksekusi a * b hilang dari -> Stack
16. Kembali ke kalikan(sisi, sisi) dan hilang -> Stack
17. Kembali ke luas = hitungLuas(sisi) dan hilang -> Stack
18. Turun eksekusi console.log(luas) tampil 25, kemudian hilang -> Stack
19. dan cetakLuasKotak selesai dan hilang dari -> Stack
20. Stack jadi kosong lagi
http://latenflip.com/loupe/  by. Phillip Roberts
===== */

/* ===== Kasus Lain ===== */
console.log("satu");
prosesYangSuperKompleks();
console.log("tiga");

/* ===== Noted
1. console log "satu" dieksekusi -> Stack
2. masuk ke prosesYangSuperKompleks(), pasti nunggu dulu sampe proses selesai.
3. Setelah selesai, baru console "tiga" dieksekusi
4. Ini disebut blocking
===== */
/* ===== Cara menangani Blocking bisa dilakukan dengan Asynchronous Callback ===== */

/* ===== Biasanya diakalin 
- setTimeout adalah jenis Asynchronous Callback
- prosesYangKompleks dimasukkan ket setTimeout
===== */
console.log("satu");
setTimeout(() => {
  prosesYangKompleks();
}, 0);
console.log("tiga");

/* ===== Contoh ===== */
console.log("satu");
setTimeout(() => {
  console.log("dua");
}, 5000);
console.log("tiga");

/* ===== Noted 
1. tampilkan "satu"
2. "dua" dijadikan function callback yang parameter delaynya menunggu selama 5 detik

===== */
/* ===== Noted
1. jalanin console "satu" eksekusi -> Stack (selesai dan hilang)
2. jalanin setTimeout() eksekusi -> Stack (ternyata setTimeout langsung hilang)
3. dan langsung menjalankan console "tiga" -> Stack (selesai dan hilang)
4. tiba-tiba setelah 5 detik console "dua" ditampilkan -> Stack
- Itu dinamakan asynchronous callback -> terjadi karena ada Event Loop
===== */

/* ===== Arsitektur di web browser
1. V8 Engine -> ada Heap dan Stack
2. Web API menangani Asynchronous Callback
3. Event Loop
4. Callback Queue
===== */

/* ===== 
1. sebenarnya perintah di setTimeout dipindahkan ke Web API
2. setelah waktunya selesai, Web API tidak bisa kembali menjalankan fungsinya kedalam Stack, sehingga callbacknya harus disimpan dulu kedalam tempat yang namanya Callback Queue(antrian untuk callback)
3. Ada Event Loop yang tugasnya ngecek di callback queue ada antrian callback atau tidak. Jika ada, maka ambil callbacknya lalu simpan kedalam stack. Saat sudah di Stack maka akan dijalankan seperti biasa oleh V8 Engine. 
4. Tapi syaratnya Callback bisa masuk kedalam Stack? ketika didalam stacknya sudah tidak ada tumpukan perintah yang akan dieksekusi
5. Jadi Stack harus kosong dulu, baru Event Loop nya bisa masukin Callbacknya kedalam Stack.
===== */
