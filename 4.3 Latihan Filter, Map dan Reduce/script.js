const videos = Array.from(document.querySelectorAll("[data-duration]"));
const jsLanjut = videos
  .filter((video) => video.textContent.includes("Javascript Lanjutan"))
  .map((item) => item.dataset.duration)
  .map((waktu) => {
    // Ubah dulu string menjadi
    const parts = waktu.split(".").map((part) => parseFloat(part));
    // kalikan parts ke 0 dengan 60 ditambah parts ke 1. Hitung menjadi satuan detik
    return parts[0] * 60 + parts[1];
  });
console.log(jsLanjut);

/* =============== Noted
- ubah durasinya dari STRING menjadi INTEGER
- parts adalah array yang menampung waktu [10,30]
parts[0] = 10 menit, parts[1] = 30 detik
- semua element parts harus diubah menjadi detik.
- part adalah tiap elemen dalam array parts
- part yang isinya masih berupa STRING harus diubah dulu menjadi bentuk integer/float agar bisa dijumlahkan


=============== */
