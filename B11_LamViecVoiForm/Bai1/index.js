// Khi muon vao 1 phat chay luon => viet o script luon
// B1: Lay gia tri cua o username & password
let user = document.getElementById("username");
let pass = document.getElementById("p1");
let errors = document.getElementsByClassName("error-message");
// class => nhieu => mang

// Nhung khi muon viet su kien cho 1 ham => function
function checkLogin() {
  // reset gia tri cua span
  errors[0].innerText = "";
  errors[1].innerText = "";
  // check trong
  if (user.value === "") {
    errors[0].innerText = "Username dang trong";
  }
  if (pass.value === "") {
    errors[1].innerText = "Password dang trong";
  }
  // Nếu username & password là HangNT169 & 123456
  // => Hiển thị thông báo login thành công
  //  và ngược lại hiển thị login thất bại
  if (user.value === "HangNT169" && pass.value === "123456") {
    alert("Dang nhap thanh cong");
  } else {
    alert("Dang nhap that bai");
  }
}
