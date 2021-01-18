const videos = Array.from(document.querySelectorAll("[data-duration]"));
const jsLanjut = videos
  .filter((video) => video.textContent.includes("Javascript Lanjutan"))
  .map((item) => item.dataset.duration);

console.log(jsLanjut);
// Hasilnya ["11.18", "21.40", "12.10", "20.43", "26.38", "17.33", "10.39", "17.31"]

/* =============== Noted
- ambil durasi masing-masing video
- method dataset untuk mengambil atribut data-.....
- gunakan chaining method
=============== */
