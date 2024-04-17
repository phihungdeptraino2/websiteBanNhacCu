const chitiet = document.querySelectorAll("#ctsp");

chitiet.forEach((ct) => {
  ct.addEventListener("click", function (event) {
    event.preventDefault();

    const item = this.closest(".card");
    const img = item.querySelector("img").src;
    const name = item.querySelector(".card-title").textContent;
    const gia = item.querySelector(".card-price").textContent;

    localStorage.setItem("img", img);
    localStorage.setItem("name", name);
    localStorage.setItem("gia", gia);

    window.location.href = "../chiTietSanPham.html";
  });
});
