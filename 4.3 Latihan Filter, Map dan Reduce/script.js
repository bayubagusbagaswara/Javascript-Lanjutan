const videos = Array.from(document.querySelectorAll("[data-duration]"));
const jsLanjut = videos
  .filter((video) => video.textContent.includes("Javascript Lanjutan"))
  .map((item) => item.dataset.duration)
  .map((waktu) => {
    // durasi 10.30, pecah jadi array ["10", "30"] -> split
    const parts = waktu.split(".");
    // kalikan parts ke 0 dengan 60 ditambah
    return parts;
  });
console.log(jsLanjut);

/* =============== Noted
- ubah durasinya dari STRING menjadi INTEGER
- parts adalah array yang menampung waktu [10,30]
- part adalah tiap elemen dalam array parts


=============== */
