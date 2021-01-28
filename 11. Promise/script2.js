// Contoh 1
// let ditepati = false;
// // buat Promise
// const janji = new Promise((resolve, reject) => {
//   if (ditepati) {
//     // jalankan function callback resolve
//     resolve("Janji telah ditepati");
//   } else {
//     // jalankan function callback reject
//     reject("Ingkar janji..");
//   }
// });
// Untuk menangkap hasil promise diatas gunakan then dan catch. otomatis then akan menangkap resolve dan catch akan menangkap reject
// janji
//   .then((responseResolve) => console.log("OK " + responseResolve))
//   .catch((responseReject) => console.log("Sorry " + responseReject));

//   Contoh 2
// let ditepati2 = true;
// const janji2 = new Promise((resolve, reject) => {
//   if (ditepati2) {
//     setTimeout(() => {
//       resolve("Ditepati setelah beberapa detik");
//     }, 2000);
//   } else {
//     setTimeout(() => {
//       reject("Tidak ditepati setelah beberapa detik");
//     }, 2000);
//   }
// });
// console.log("mulai");
// console.log(janji2.then(() => console.log(janji2)));

// janji2
//   .finally(() => console.log("selesai menunggu"))
//   .then((responseResolve) => console.log("OK " + responseResolve))
//   .catch((responseReject) => console.log("Sorry " + responseReject));
// console.log("selesai");

// Promise.all() untuk mengatasi jika ingin membuat Promise banyak, biasanya untuk akses API yang banyak

const film = new Promise((resolve) => {
  setTimeout(() => {
    resolve([
      {
        // array of object
        judul: "Avengers",
        sutradara: "Bayu",
        pemeran: "Bagus",
      },
    ]);
  }, 1000);
});

const cuaca = new Promise((resolve) => {
  setTimeout(() => {
    resolve([
      {
        kota: "Bandung",
        tempe: 26,
        kondisi: "Cerah Berawan",
      },
    ]);
  }, 500);
});

// Jalankan beberapa Promise sekaligus
Promise.all([film, cuaca])
  // .then((responseResolve) => console.log(responseResolve))
  .then((responseResolve) => {
    const [film, cuaca] = responseResolve; // di spread
    console.log(film);
    console.log(cuaca);
  });
