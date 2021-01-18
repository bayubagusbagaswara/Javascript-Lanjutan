/* =============== Algoritma
1. Ambil semua element video
2. Pilih hanya yang bertulis Javascript Lanjutan
3. Ambil durasi masing-masing video (masih berbentuk string)
4. Ubah string durasi menjadi integer, ubah menit menjadi detik
5. Jumlahkan semua detik
6. Ubah format waktunya jadi Jam Menit Detik
7. Simpan di DOM
=============== */

const videos = document.querySelectorAll("[data-duration]");
console.log(videos);

/* =============== Noted
1. Ambil atribut yang ada data-duration 
2. Tapi, hasil dari videos adalah NodeList. Yaitu kumpulan Node dan ini beda dengan Array, jadi tidak bisa di kasih map, filter, reduce 
NodeList(12)
0: li
1: li
2: li
3: li
4: li
5: li
6: li
7: li
8: li
9: li
10: li
11: li
=============== */
