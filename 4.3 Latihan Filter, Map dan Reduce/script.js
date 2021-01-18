const videos = Array.from(document.querySelectorAll("[data-duration]"));
let jsLanjut = videos
  .filter((video) => video.textContent.includes("Javascript Lanjutan"))
  .map((item) => item.dataset.duration)
  .map((waktu) => {
    const parts = waktu.split(".").map((part) => parseFloat(part));
    return parts[0] * 60 + parts[1];
  })
  .reduce((total, detik) => total + detik);

const jam = Math.floor(jsLanjut / 3600);
jsLanjut = jsLanjut - jam * 3600;
const menit = Math.floor(jsLanjut / 60);
const detik = jsLanjut - menit * 60;

// simpan di DOM
// masukkan jam menit detik
const pDurasi = document.querySelector(".total-durasi");
pDurasi.textContent = `${jam} Jam, ${menit} Menit, ${detik} Detik`;

// hitung jumlah video
const jmlVideo = videos.filter((video) =>
  video.textContent.includes("Javascript Lanjutan")
).length;
const pJmlVideo = document.querySelector(".jumlah-video");
pJmlVideo.textContent = `${jmlVideo} Video`;
console.log(detik);

/* =============== Noted
- simpan di DOM
- cari elemen class nya total-durasi
- isi textContentnya dengan Jam Menit Detik

- hitung jumlah Video
- ambil data array yg sudah difilter tadi karena filter Javascript Lanjutan
- kemudian hitung dengan tambahkan function length
- cari elemen class jumlah-video
- isi textContentnya dengan jumlah Video
=============== */
