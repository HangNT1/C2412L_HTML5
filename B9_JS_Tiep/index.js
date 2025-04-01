// Viet code JS
// thong bao
// alert("Xin chao ...");
// // muon nhap tt
// var name = prompt("Nhap ten di");
// // in duoi man hinh
// console.log(name);
// // Viet 1 gia tri tren HTML
// document.writeln("Hien thi text tren HTML<br>");
// document.write("Hien thi text tren HTML<br>");
// document.writeln("Hien thi text tren HTML");

/**
 * Khai bao bien:
 * C: kieu du lieu tenBien = giaTri;
 * JS: Pham vi(var/let/const) tenBien :kieu Du lieu = giaTri;
 */
// var number = 10;
// console.log(number);
// number = "Nguyen Thuy Hang";
// console.log("test" + number);

// let name = "Nguyen Van a";
// console.log(name);
// name = "Nguyen Van b";
// console.log(name);

// const name1 = "Nguyen van c";
// console.log(name1);
// name1 = "Nguyen van D";
// console.log("aaaa" + name1);

// ES6: let & const
// let: Thay doi duoc gia tri cua bien

// const: Gia tri cua bien la duy nhat

// Kieu du lieu:
// 1. number => kieu so
// 2. String => kieu chuoi (ki tu)
// 3. Object: doi tuong - {}
// 4. Mang: []

// const number1 = 10;
// const name2 = "aaa";
// // Object - 2 cach khai bao
// // C1: new
// const sinhVien = new Object();
// // gan thuoc tinh => dac trung (ai la sinh vien cung co)
// // ten bien
// sinhVien.ten = "Hang";
// sinhVien.tuoi = 10;
// sinhVien.lopHoc = 10;
// sinhVien.chuyenNganh = "Ky Thuat Phan Mem";
// // Ham (phuong thuc): SV co cac hanh dong gi
// sinhVien.diHoc = function () {
//   // lam gi thi lam => 1 ham
//   console.log(sinhVien.ten);
// };
// // goi ham => ()
// console.log(sinhVien.diHoc());
// // Goi thuoc tinh
// console.log(sinhVien.ten);

// // Tao doi tuong thucVat gom cac thuoc tinh
// // ma - String, ten - String, chieuCao - number
// // canNang - number  va ham inThongTin() : muc dich dung de in tat ca thong tin cua doi tuong thuc vat
// // Goi doi tuong va ham in thong tin ra man hinh console
// // C1: Su dung tu khoa new
// const thucVat = new Object();
// thucVat.ma = "123";
// thucVat.ten = "Hieu";
// thucVat.chieucao = 10;
// thucVat.canNang = 30;
// thucVat.inThongTin = function () {
//   console.log(thucVat.ma);
//   console.log(thucVat.ten);
//   console.log(thucVat.chieucao);
//   console.log(thucVat.canNang);
// };
// console.log(thucVat.inThongTin());

// // C2: {}
// let tv1 = {
//   // liet ke tt cua doi tuong thuc vat
//   ma: "TV01",
//   ten: "ten1",
//   chieuCao: 500,
//   canNang: 100,
//   inThongTin: function () {
//     // viet noi dung cua ham
//     console.log(this.ma);
//   },
// };
// https://viblo.asia/p/tim-hieu-ve-mang-trong-javascript-oOVlYJmB58W
// console.log(tv1.inThongTin());
// Mang : []
// const listString = ["HTML5", "Javascript", "CSS"];
// // console.log(listString);
// // for
// // for(i)
// // for in
// // for of
// // For (i) : Giong C
// for (let index = 0; index < listString.length; index++) {
//   // index: vi tri
//   console.log(listString[index]);
// }
// // for of => for each
// // for(khai bao bien gia tri of ten mang)
// // Khong lay duoc vi tri index cua mang
// console.log("C2: For - of");
// for (const element of listString) {
//   // element
//   console.log(element);
// }
// // for in => vi tri
// console.log("C3: for - in");
// // for(khai bao bien in ten mang)
// for (const key in listString) {
//   console.log(key);
// }

// // Tao 1 mang String hien thi thong tin cac sinh vien trong lop
// // In danh sach cua toan bo sinh vien
// // In danh sach cua cac sinh vien o vi tri chan
// // In danh sach cua cac sinh vien o vi tri le
// let listtensinhvien = ["dat", "hai", "dung", "phat"];
// for (let index = 0; index < listtensinhvien.length; index++) {
//   const element = listtensinhvien[index];
//   console.log(element);
// }
// //  for i
// for (let i = 0; i < listtensinhvien.length; index++) {
//   const a = listtensinhvien[index];
//   if (i % 2 != 0) {
//     console.log(a);
//   }
// }

/**
 * SS long leo (==): SS ma chi quan tam toi gia tri ma khong quan tam toi kieu du lieu
 * SS chat che (===): SS ca gia tri & kieu du lieu
 */
const a = "aa";
// typeof => kiem tra kieu du lieu cua 1 bien
console.log(typeof a);
// 5 & '5'
console.log(5 == "5");
console.log(5 === "5");
console.log(5 === 5);
console.log(5 == 5);

/**
 * null & undefined
 * null:
 *  - la gia tri dac biet trong JS
 *  - Dai dien cho 1 gia tri trong hoac khong ton tai
 *  - thuong gan chu dong vao 1 bien
 *  - KHONG CO KIEU DU LIEU NULL . TYPEOF => OBJECT
 * undefined
 *  - la gia tri mac dinh trong JS
 *  - Neu bien co gia tri undefined khi bien chua duoc gan gia tri
 *  - Kieu du lieu cua undefined khi dung type of => undefined
 */
const dongHo = null;
console.log(dongHo);
console.log(typeof dongHo); // Object
let a1; // CHUA GAN
console.log(a1);
console.log(typeof a1); // undefined
