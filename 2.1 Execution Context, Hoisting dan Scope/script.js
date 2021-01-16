/* ===== Kasus HOISTING dan SCOPE ===== */
function satu() {
  var nama = "Bayu";
  console.log(nama);
}

function dua() {
  console.log(nama);
}
console.log(nama);
var nama = "Dimas";
satu();
dua("Fauziah");
console.log(nama);

// Urutan hasilnya
// 1. UNDEFINED
// 2. BAYU
// 3. DIMAS
// 4. DIMAS

/* ===== Noted : 
1. CREATION PHASE dulu
- HOISTING function satu(), function dua(), var nama = UNDEFINED
2. EXECUTION PHASE
- mulai dari consolel.log(nama), hasilnya UNDEFINED
- isi variabel nama dengan Dimas
- jalanin function satu()

a. Masuk LOCAL EXECUTION CONTEXT function satu()
- HOISTING var nama dan diisi UNDEFINED dulu.
- EXECUTION var nama diisi Bayu, kemudian console.log(nama), hasilnya Bayu. Karena mengacu ke LOCAL variabel
- kemudian TUMPUKAN EXECUTION function satu() dihilangkan dari memori

3. EXECUTION PHASE
- setelah selesai satu()
- panggil function dua() dengan mengirimkan argument 'Fauziah'

b. Masuk LOCAL EXECUTION CONTEXT function dua()
- di function dua() TIDAK NANGKEP PARAMETER
- Jadi, Fauziah masuk ke Object Arguments
- terus TIDAK ADA HOISTING
- langsung EXECUTION console.log(nama)
- Tapi, nama tidak mempunyai variabel di LOCAL, di argument/parameter function juga tidak ada
- kemudian nyari ke luar yakni GLOBAL
- dan ketemu yakni var nama = Dimas
- tampilkan Dimas
- kemudia hilang dari Tumpukan Execution

4. EXECUTION PHASE
- terakhir EXECUTION consol.log(nama) yang mengacu ke variabel berisi Dimas. Karena ambil dari GLOBAL

===== */
