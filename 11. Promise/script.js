// AJAX Vanilla JS, data hasil kembalian bentuknya Object karne sudah di parse JSON
// let xhr = new XMLHttpRequest();
// xhr.onreadystatechange = function () {
//   if (xhr.status === 200) {
//     if (xhr.readyState === 4) {
//       console.log(JSON.parse(xhr.response));
//     }
//   } else {
//     console.log(xhr.responseText);
//   }
// };

// xhr.open("GET", "http://www.omdbapi.com/?apikey=dca61bcc&s=avengers");
// xhr.send();

// FETCH adalah suate metode pengganti AJAX untuk mengambil data dari API, akan tetapi data kembalian yang dihasilkan FETCH berbentuk Promise
// const movies = fetch("http://www.omdbapi.com/?apikey=dca61bcc&s=avengers");
// console.log(movies); // hasilnya adalah Promise

fetch("http://www.omdbapi.com/?apikey=dca61bcc&s=avengers")
  // .then((response) => console.log(response.json())) // hasilnya Promise
  .then((response) => response.json()) // hasilnya Promise
  .then((response) => console.log(response)); // hasilnya Object
