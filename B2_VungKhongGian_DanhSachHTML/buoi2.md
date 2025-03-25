# Lý thuyết buổi 2

# 1. Vùng không gian của thẻ

- Thẻ có vùng không gian: Vùng không gian bằng khoảng cách mà thẻ đó có (có thể là full màn hình)
- Thẻ không có vùng không gian: Vùng không gian bằng chính độ dài mà thẻ đấy (VD: không gian bằng độ dài của ảnh/content -text)

# 2. Margin & Padding

- 2.1. Padding - Khoảng cách bên trong
  - Định nghĩa:Padding là khoảng cách giữa nội dung của một phần tử và viền (border) của nó.
  - Khi nào dùng? Khi bạn muốn tạo khoảng trống giữa nội dung và viền của phần tử.
  - Giúp nội dung không bị dính sát vào mép.
- 2. 2. Margin - Khoảng cách bên ngoài
     - Định nghĩa: Margin là khoảng cách giữa phần tử này với phần tử khác.
     - Khi nào dùng? Khi bạn muốn tạo khoảng cách giữa các phần tử trên trang.
     - Giúp các phần tử không bị dính sát vào nhau.
       | **Thuộc tính** | **Tác dụng** | **Ảnh hưởng đến kích thước tổng thể?** |
       |--------------|---------------------------|--------------------------------|
       | **Padding** | Tạo khoảng cách bên trong phần tử (giữa nội dung và viền) | Có - Làm phần tử to hơn (tăng kích thước tổng thể) |
       | **Margin** | Tạo khoảng cách bên ngoài phần tử (với các phần tử khác) | Có - Ảnh hưởng đến không gian chiếm dụng nhưng không làm to phần tử (chỉ thay đổi khoảng cách xung quanh) |

# 3. Thẻ định dạng

- Thẻ định dạng:

  - Thẻ in đậm: b
  - Thẻ in nghiêng: i, ...
  - Thẻ small - thẻ này chỉ có trong HTML5 : dùng để text bé đi
  - Thẻ gạch chân: u
  - Thẻ del: gạch ngang chữ
  - Thẻ ins: nhìn biểu tượng khác
  - Thẻ strong: dùng để nhấn mạnh cũng khá giống b
  - Thẻ sub: Kiểu hiển thị H2S04 - số 2 dưới dùng thẻ sub : đưa xuống vị trí nhỏ
  - Thẻ sup thì ngược lại vs sub thì là đưa lên giống giỏ hàng icon và giống facebook mess có thông báo
  - Trong 1 số trường hợp có thẻ pre : Có thể tab hoặc enter xuống dòng thì có thể nhận hết : Thường giữ nguyên định dạng trong đấy code ntn thì trong đấy giữ nguyên thế
  - em: cũng giúp làm đậm
  - blockquote: coi như đoạn trích dẫn

  .... Các bạn có thể tìm hiểu thêm các thẻ khác

# 4. Danh sách

- Trọng HTML có quy định :

* Loại danh sách có thứ tự : dùng cặp thẻ ol & mỗi phần tử trong ds có thứ tự là 1 cặp thẻ li => ol & li => DS có thứ tự là ntn ??? Và stt có thể thay đổi được mở lại word : 1,2,3 I, II, III... => ol có thuộc tính type => ol có 5 kiểu và default là 123 => nếu không tin mình điền type bừa thì sao ?
* Loại danh sách không có thứ tự : Đằng trước chỉ hiển thị biểu tượng có thể dấu chấm và k có số: ul, li: tròn đen: disc.. => có thể dùng ul, li nhưng bây h thường sẽ dùng display flex sau học CSS cô sẽ nói
* Loại danh sách tự định nghĩa: dl
