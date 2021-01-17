# Closure

- Menurut MDN
  "Closure merupakan kombinasi antara function dan lingkungan leksikal (lexical scope) di dalam function tersebut."

- Menurut w3school
  "Closure adalah sebuah function ketika memiliki akses ke parent scope-nya, meskipun parent scope-nya sudah selesai dieksekusi."

- Menurut Code Fellow
  "Closure adalah sebuah function dikembalikan oleh function yang lain, yang memiliki akses ke lingkungan saat ia diciptakan."

- Menurut Techsith
  "Closure adalah sebuah function yang sebelumnya sudah memiliki data, hasil dari function yang lain."

# Lexical Scope

- function init() {
  let nama = 'Bayu';
  function tampilNama() {
  console.log(nama);
  }
  tampilNama();
  }
  init();

* Catatan:

- Closure adalah bicara tentang SCOPE. Bagaimana sebuah function bisa mengambil data dari data/variabel yang berada di function lain (Function Parentnya).
- Makanya Closure disebut merupakan gabungan dari Function dan Lexical Scopenya.

# Kenapa menggunakan Closure ?

1. Untuk membuat Function Factories.
2. Untuk membuat seolah-olah mempunyai Private Method.
