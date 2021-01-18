# Higher Order Function ?

# Definisi

"Function yang beroperasi pada function yang lain. Baik itu digunakan dalam argument, maupun sebagai return value." - https://eloquentjavascript.net

Karena di dalam Javascript itu sebuah function itu disebut First Class Function. Inti dari Javascript itu sebenarnya adalah function.

"Javascript memperlakukan function sebagai object."
Object itu merupakan value sama seperti integer/string. Maka function juga bisa kita simpan sebagai argument maupun return value dari sebuah function yang lain.

# Kenapa pake Higher Order Function ?

1. Abstraksi, untuk membuat agar code yang kita buat itu bisa lebih sederhana/simple. Menggunakan function sama dengan menyembunyikan kerumitan.
   "Semakin besar sebuah program, semakin tinggi kompleksitasnya, semakin membingungkan programmernya." - eloquentjavascript.net

   "Ada dua cara untuk merancang sebuah software: Cara pertama adalah untuk membuat programnya se-sederhana mungkin sehingga jelas-jelas tidak ada kekurangannya, dan cara lainnya adalah untuk membuat programnya se-kompleks mungkin sehingga tidak ada kekurangan yang jelas." - C.A.R. Hoare, 1980 ACM Turing Award Lecture

# Functional Programming

- program kita akan jadi lebih efektif dan efisien

# Contoh Higher Order Function, khususnya untuk pengelolaan Array

1. Array.prototype.map()
2. Array.prototype.filter()
3. Array.prototype.reduce()
