/**
 * @h1 jika di hover akan ada animasi per huruf
 * *1. pecah string menjadi single element dengan Spread
 * *2. sisipkan span ke masing-masing huruf (jadinya dikelilingi oleh span)
 */

const nama = document.querySelector(".nama");

// pecah tiap-tiap hurufnya
// looping array map dan tiap-tiap elemen bungkus dengan span
// kalau ingin langsung jadi string, maka join
const huruf = [...nama.textContent].map((h) => `<span>${h}</span>`).join("");

// kemudian hasil dari huruf masukkan atau timpa ke dalam class nama
nama.innerHTML = huruf;
