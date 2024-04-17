// const pimg = localStorage.getItem("img");
const pname = localStorage.getItem("name");
const pgia = localStorage.getItem("gia");
if (pname !== null) {
  // Nếu tồn tại, làm gì đó với giá trị đã lấy được
  console.log("Giá trị từ Local Storage:", pname);
} else {
  // Nếu không tồn tại, xử lý trường hợp này
  console.log(
    "Không có giá trị nào được lưu trữ với khóa 'myKey' trong Local Storage."
  );
}
// document.getElementById("pimg").src = pimg;
document.getElementById("pname").textContent = pname;
document.getElementById("pgia").textContent = pgia;
