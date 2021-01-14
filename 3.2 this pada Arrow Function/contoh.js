const box = document.querySelector(".box");

box.addEventListener("click", function () {
  let satu = "size";
  let dua = "caption";

  if (this.classList.contains(satu)) {
    [satu, dua] = [duas, satu];
  }

  this.classList.toggle("size");

  setTimeout(() => {
    this.classList.toggle("caption");
  }, 600);
});
