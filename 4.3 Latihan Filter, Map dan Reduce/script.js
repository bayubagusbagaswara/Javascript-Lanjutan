const videos = Array.from(document.querySelectorAll("[data-duration]"));
const jsLanjut = videos
  .filter((video) => video.textContent.includes("Javascript Lanjutan"))
  .map((item) => item.dataset.duration)
  .map((waktu) => {
    const parts = waktu.split(".").map((part) => parseFloat(part));
    return parts[0] * 60 + parts[1];
  })
  // total detik
  .reduce((total, detik) => total + detik);

console.log(jsLanjut);

/* =============== Noted
- reduce untuk menjumlahkan semua waktu dalam video
=============== */
