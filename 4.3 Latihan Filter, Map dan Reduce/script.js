/* =============== Algoritma
1. Ambil semua element video
2. Pilih hanya yang bertulis Javascript Lanjutan
3. Ambil durasi masing-masing video (masih berbentuk string)
4. Ubah string durasi menjadi integer, ubah menit menjadi detik
5. Jumlahkan semua detik
6. Ubah format waktunya jadi Jam Menit Detik
7. Simpan di DOM
=============== */

const videos = Array.from(document.querySelectorAll("[data-duration]"));
const jsLanjut = videos.filter((video) =>
  video.textContent.includes("Javascript Lanjutan")
);
console.log(jsLanjut); // hasilnya ada 8

/* =============== Noted
- Ubah dulu NodeList menjadi Array
- filter semua videos nya dan cari yang ada tulisan Javascript Lanjutan
- video adalah tiap elemen yang ada didalam array videos
=============== */
