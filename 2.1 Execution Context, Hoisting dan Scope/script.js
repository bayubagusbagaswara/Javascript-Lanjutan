/* ===== Kasus SCOPE ===== */
let nama = "Bayu";
let username = "@bayu_bagaswara";

function cetakURL(username) {
  let twitterURL = "http://twitter.com/";
  return twitterURL + username;
}

console.log(cetakURL("dimas_widyatama"));

// Hasilnya adalah http://twitter.com/dimas_widyatama

/* ===== Noted  
- KENAPA Hasilnya beda dari kasus awal? karena SCOPE
- begitu memanggil function sekaligus mengirim argument
- maka argument tersebut akan menjadi parameter bagi function itu sendiri
- Sehingga nilai parameter itulah yang menjadi rujukan untuk isi program function tersebut

===== */
