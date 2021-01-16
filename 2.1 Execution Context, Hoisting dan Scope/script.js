/* ===== Arguments ===== */
let nama = "Bayu";
let username = "@bayu_bagaswara";

function cetakURL() {
  console.log(arguments); // cek object arguments
  let twitterURL = "http://twitter.com/";
  return twitterURL + username;
}

console.log(cetakURL("dimas_widyatama", "bambang"));

// Hasilnya adalah http://twitter.com/@bayu_bagaswara

/* ===== Noted  
- Isi argument yang dikirimkan bersama dengan pemanggilan function sebenarnya tidak hilang, tapi disimpan dalam Object Javascript bernama Arguments.

- Apapun yang tidak ditangkep PARAMETER FUNCTION, maka secara langsung akan disimpan dalam Arguments

===== */
