/* ===== Kasus SCOPE ===== */
let nama = "Bayu";
let username = "@bayu_bagaswara";

function cetakURL() {
  let twitterURL = "http://twitter.com/";
  return twitterURL + username;
}

console.log(cetakURL("dimas_widyatama"));

// Hasilnya adalah http://twitter.com/@bayu_bagaswara

/* ===== Noted  
- Jika parameter function dihapus dan tetap mengirimkan argument, maka argument tersebut tidak ada yang nangkep.
- Terus kemana isi argument tersebut? Akan dimasukkan kedalam Object di Javascript yang bernama Arguments.

- Untuk variabel di dalam function, pertama kali dia akan mengecek pada parameter function yakni LOCAL. Jika tidak ada, maka variabel tersebut akan mengecek ke luar (GLOBAL), sampai ketemu varibel yang cocok. 

- dan jika di GLOBAL tetep tidak ada, maka akan ERROR karena tidak terdefinisi/tidak ada referensi variabel tersebut
===== */
