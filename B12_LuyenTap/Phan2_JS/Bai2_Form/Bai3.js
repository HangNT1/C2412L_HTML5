function DangKy() {
    let ma = document.getElementById("ma").value;
    let age = document.getElementById("age").value;
    let password = document.getElementById("password").value;
    let rePassword = document.getElementById("re-password").value;
    if (ma === "") {
        document.getElementById("check1").innerHTML =
            "Mã sinh viên không được để trống";
    }

    if (age === "") {
        document.getElementById("check2").innerHTML = "Tuoi không được để trống";
    }
    if (password != rePassword) {
        document.getElementById("check4").innerHTML = "Mật khẩu không khớp";
    }
    if (ma != "" && age != "" && password == rePassword) {
        alert("Đăng ký thành công");
    } else {
        alert("Đăng ký thất bại");
    }
}