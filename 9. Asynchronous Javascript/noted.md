1. Javascript

   "Bahasa pemrograman tingkat tinggi dan dinamis yang secara umum dapat berjalan pada browser."

2. Javascript secara luas

   "Is a single-threaded, non-blocking, asynchronous and concurrent language."

3. Thread

   "Urutan eksekusi kode yang dapat dilakukan secara bebas / independent satu sama lain."

4. Single-threaded, hanya bisa mengeksekusi program pada saat waktu tertentu, Jika Task 1 selesai, kemudian baru bisa melakukan Task 2 nya.
5. Multi-threaded, thread bisa banyak, umumnya Task tetap dikerjakan satu persatu, tapi bisa dikerjakan oleh thread yang lain.

6. Blocking, harus nunggu loading Task 1 sebelumnya sampe selesai, baru bisa mengeksekusi Task selanjutnya.
7. Non-blocking, meskipun Task 1 masih loading belum beres, tetep bisa mengerjakan Task 2 selanjutnya.

8. Synchronous -> urutan seperti biasa
9. Asynchronous -> bisa lompat-lompat urutan, sampe semuanya selesai. Jika Task 1 belum beres, maka thread bisa berpindah untuk mengerjakan Task 2, sampai akhirnya Task 1 selesai dan Task 2 selesai.

10. Asynchronous + Single-threaded = Concurrency
11. Asynchronous + Multi-threaded = Parallelism

# Kesimpulan

1. Single vs Multi Thread, lingkungan eksekusi 'task'
2. Blocking vs Non-blocking, teknik 'ngoding' (IO related)
3. Synchronous vs Asynchronous, teknik 'ngoding' (HTTP Request related), kalo kita menggunakan AJAX
4. Concurrent vs Parallel, lingkungan eksekusi 'task'

# Noted

1. di dalam Javascript ada V8 Engine atau mesin yang ngejalanin JS, yang ditanam di web browser. Isi V8 Engine ada Heap dan Stack.
2. Heap -> alokasi memori, penyimpanan variabel dan function, ada hubungan hoisting,
3. Stack -> untuk pemanggilan function dan eksekusi scriptnya

- Asychronous Callback, bisa terjadi karena ada sesuatu
- agar kita bisa menciptakan sebuah program yang nyaman digunakan oleh user
