console.log(nama);
var nama = "Bayu";

/* ===== Noted
- hasilnya UNDEFINED tapi TIDAK ERROR
- KENAPA? karena variabel nama sudah di HOISTING terlebih dulu (FASE CREATION) dan diisi UNDEFINED , tetapi keburu di jalankan console.log (FASE EXECUTION) sebelum variabel nama sempat diisi nilainya yakni String Bayu.
===== */

/* ===== urutan prosesnya 
1. Javacript akan mengecek var dan function. Dihoisting diisi dengan undefined
2. Jalankan console.log -> hasilnya undefined
3. Baru variabel nama diisi dengan nilai Bayu.
Jadi, kedahuluan console.log sebelum variabel nama ada isinya
===== */
