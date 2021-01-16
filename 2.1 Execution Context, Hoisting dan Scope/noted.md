# Urutan Fase pada Execution Context Javascript ada 2:

1. Creation
2. Execution

# Fase Creation

Javascript akan mengecek di dalam program terdapat :

- Variabel
- Function

* Jika ada VARIABEL : beri isi UNDEFINED
* Jika ada FUNCTION : beri isi code FUNCTION itu sendiri
* Konsep pengecekan oleh Javascript disebut HOISTING (Pengangkatan). Tujuannya untuk mengangkat dulu ke memorinya tanpa ada isi/nilainya.
* Jadi, Javascript akan melakukan screening terhadap variabel dan function, tetapi tanpa mempedulikan isi/value dari variabel tersebut.

# Catatan tambahan

- Javascript mendefinisikan object window = global object
- Javascript mendefinisikan this = window
- Untuk memahami proses HOISTING code program bisa kunjungi Javascript Visualize - Python Tutor

# Fase Execution

Setelah Javascript melakukan screening variabel & function pada Fase Creation, kemudian dilanjutkan dengan Fase Execution. Dimana pada fase ini perintah seperti console.log akan dijalankan atau eksekusi.
Pada fase ini programnya akan dieksekusi mulai dari atas sampai bawah.
