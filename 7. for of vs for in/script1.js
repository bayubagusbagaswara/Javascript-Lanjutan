/* =============== For .. of =============== */
// 3. looping pada Node List (biasanya untuk query pada DOM)

// ambil li nama
const liNama = document.querySelectorAll(".nama");
console.log(liNama); // hasilnya NodeList

// bisa looping pake ForEach
liNama.forEach((n) => console.log(n.textContent));

// atau bisa pake For Of
for (n of liNama) {
  console.log(n.innerHTML);
}

// 4. looping arguments
function jumlahkanAngka() {
  // argument di tampung di Object Arguments, karena tidak ditangkep parameter. Hanya bisa pake for..of
  let jumlah = 0;
  for (a of arguments) {
    jumlah += a;
  }
  return jumlah;
}
// manggil function
console.log(jumlahkanAngka(1, 2, 3, 4, 5)); // hasilnya 15
