/* ===== Function Factories ===== */

function ucapkanSalam(waktu) {
  return function (nama) {
    console.log(`Halo ${nama}, Selamat ${waktu}, semoga harimu menyenangkan!`);
  };
}

// simpan kedalam variabel, untuk menjalankan dulu function OUTER nya (paling luar). Disini function sudah jalan setengahnya
let selamatPagi = ucapkanSalam("Pagi");
let selamatSiang = ucapkanSalam("Siang");
let selamatMalam = ucapkanSalam("Malam");

// menjalankan setengah lagi function ucapkanSalam dan mengirimkan argument untuk ditangkep parameter nama
selamatPagi("Bayu");
selamatSiang("Bagus");
selamatMalam("Bagaswara");

/* ===== Noted :
- kalau kita jalankan function ucapkanSalam dengan mengirimkan argument, maka akan lansung ditangkap oleh parameter WAKTU, ini disimpan kedalam CLOSURE
- Tetapi, di dalam function ucapkanSalam hanya berisi return function ()
- Dari situ maka ucapkanSalam() hanya dieksekusi sebagian.
- Oleh karena itu, simpan function ucapkanSalam() kedalam sebuah variabel, misal let selamatPagi
- Dan untuk menjalankan sebagiannya lagi, maka jalankan variabel function selamatPagi() tersebut 
- Jalankan variabel function selamatPagi('Bayu') dengan diisi argument untuk dikirimkan menjadi parameter nama.

- FACTORIES FUNCTION -> bikin function sesuai dengan function yang lain
===== */
