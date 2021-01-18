const videos = Array.from(document.querySelectorAll("[data-duration]"));
let jsLanjut = videos
  .filter((video) => video.textContent.includes("Javascript Lanjutan"))
  .map((item) => item.dataset.duration)
  .map((waktu) => {
    const parts = waktu.split(".").map((part) => parseFloat(part));
    return parts[0] * 60 + parts[1];
  })
  .reduce((total, detik) => total + detik);

//   ubah format waktu
const jam = Math.floor(jsLanjut / 3600);
// jsLanjut = total detik awal - 2 jam * 3600 -> hasilnya detik
jsLanjut = jsLanjut - jam * 3600;
// jsLanjut dibagi 60
const menit = Math.floor(jsLanjut / 60);
// hitung detik
const detik = jsLanjut - menit * 60;

console.log(detik);

/* =============== Noted
- ubah formatnya menjadi Jam Menit Detik
- pertama bagi waktu menjadi jam dulu dengan bagi 3600 dan dibulatkan Math.floor(pembulatan ke bawah)
- sisanya hitung untuk menit. jsLanjut - 2 * 3600. Hasilnya detik, kemudia jadikan menit dengan cara bagi 60
- sisanya lagi adalah detik
=============== */
