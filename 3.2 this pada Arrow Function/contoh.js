// ambil element object box dulu, simpan kedalam variabel
const box = document.querySelector(".box");

// ketika box nya diklik lakukan sesuatu
box.addEventListener("click", function () {
  // atur animasi pergantian class nya
  let satu = "size";
  let dua = "caption";
  // jika class nya sudah ada satu
  if (this.classList.contains(satu)) {
    // maka balikin class nya atau tukar classnya
    [satu, dua] = [duas, satu];
  }

  // this di dalam ini sudah mengacu ke object box
  // jika diklik lakukan kelolas Class dengan toggle yakni apabila diklik tambahkan class size, jika diklik lagi maka hilangin
  this.classList.toggle("size");

  // setelah 6 detik tambahkan class Caption
  // karena setTimeout dijalankan saat Hoisting, jadi apapun this didalamnya akan mencari di global
  // oleh karena itu function declaration diganti jadi arrow function
  setTimeout(() => {
    //   this langsung mengacu ke object box
    this.classList.toggle("caption");
  }, 600);
});
