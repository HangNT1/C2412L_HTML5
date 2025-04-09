// Tao 1 array cua doi tuong SV
const listSinhVien = [
  {
    mssv: "HE130461",
    ten: "Nguyen Thuy Hang",
    tuoi: 10,
    diaChi: "Ha noi",
    gioiTinh: "Nam1",
    chuyenNganh: "CNTT",
  },
  {
    mssv: "HE130462",
    ten: "Nguyen Thuy Hang",
    tuoi: 10,
    diaChi: "Ha noi",
    gioiTinh: "Nữ",
    chuyenNganh: "CNTT1",
  },
  {
    mssv: "HE130463",
    ten: "Nguyen Thuy Hang",
    tuoi: 10,
    diaChi: "Ha noi",
    gioiTinh: "Nam1",
    chuyenNganh: "CNTT2",
  },
];
function hienThiDuLieu() {
  const tbody1 = document.getElementById("table-data");
  tbody1.innerHTML = ""; // RESET LAI CAI TABLE
  for (let i = 0; i < listSinhVien.length; i++) {
    const sv = listSinhVien[i];
    // ${ten bien} => Gia tri khong co dinh
    tbody1.innerHTML += `  
     <tr>
          <td>${i + 1}</td>
          <td>${sv.mssv}</td>
          <td>${sv.ten}</td>
          <td>${sv.tuoi}</td>
          <td>${sv.diaChi}</td>
          <td>${sv.gioiTinh}</td>
          <td>${sv.chuyenNganh}</td>
          <td>
            <button onClick="detailSinhVien('${sv.mssv}')">Detail</button>
            <button onClick="xoaSinhVien('${sv.mssv}')">Xoa</button>
          </td>
        </tr>`;
  }
}
hienThiDuLieu();
function xoaSinhVien(ma) {
  // Lay vi tri muon xoa
  //   const i = -1;
  //   for (let index = 0; index < listSinhVien.length; index++) {
  //     const element = listSinhVien[index];
  //     if (element.mssv === ma) {
  //       i = index;
  //     }
  //   }
  const index = listSinhVien.findIndex((a) => a.mssv === ma);
  // Xoa sinh vien => splice
  listSinhVien.splice(index, 1);
  // hien thi lai danh sach table
  hienThiDuLieu();
}

function detailSinhVien(mssv) {}
