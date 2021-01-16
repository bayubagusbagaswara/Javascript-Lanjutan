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
