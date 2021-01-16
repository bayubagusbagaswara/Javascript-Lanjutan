/* ===== Contoh Kasus ===== */

let nama = "Bayu";
let username = "@bayu_bagaswara";

function cetakURL(username) {
  let twitterURL = "http://twitter.com/";
  return twitterURL + username;
}

console.log(cetakURL(username));

/* ===== Noted : Urutan proses Visualize code nya
1.  Proses CREATION dengan Hoisting mengambil variabel(nama dan username) diisi UNDEFINED dan function cetakURL diisi code dalam function itu sendiri.

2. Proses EXECUTION program dari atas : 
- masukkan Bayu kedalam variabel nama
- masukkan @bayu_bagaswara kedalam variabel username
- function di skip dulu
- jalanin console log
- ketika console log di dijalankan ternyata tugasnya adalah EXECUTIN function, maka akan masuk ke dalam LOCAL EXECUTION CONTEXT milik function cetakURL.

3. Proses LOCAL EXECUTION CONTEXT dalam FUNCTION cetakURL 
a. Proses pertama yang dilakukan juga CREATION PHASE
- username langsung diisi dengan Bayu. KENAPA? karena variabel username sudah di EXECUTION dan diisi Bayu dalam GLOBAL CONTEXT
- lalu variabel twitterURL : diisi UNDEFINED. Ketika di EXECUTION PHASE maka diisi http://twitter.com/
- selanjutnya CREATION return dan EXECUTION kemudia simpan hasil return ke memori. 

4. Selanjutnya proses akan keluar dari LOCAL EXECUTION FUNCTION. Dan otomatis tumpukan stack eksekusi localnya hilang dari memori

5. Kemudian kembali ke GLOBAL EXECUTION dan akan EXECUTION console.log cetakURL

6. Tampilkan Haslinya http://twitter.com/@bayu_bagaswara

7. Selesai

===== */
