# Lý thuyết buổi 3

## Nội dung buổi học

- Học về cách tạo table
- Phân biệt đường dẫn tuyệt đối và tương đối và cách sử dụng đường dẫn trong máy của mình
- Giới thiệu về CSS
- Ôn tập tổng hợp

## 1 Table

- Cấu trúc table: Để tạo ra bảng luôn luôn chứa trong cặp thẻ table
- Cú pháp chung:

```
<table>
    <!-- Đầu table: thead -->
    <thead>
    <!-- Chung dòng tr-->
        <tr>
            <th> STT</th>
            <th>Họ và tên</th>
        </tr>
    </thead>
    <!-- Thân table: tbody -->
    <tbody>
         <!--Dữ liệu trong thân table là td: table data  -->
        <tr>
            <td>1</td>
            <td>Nguyễn Văn A</td>
        </tr>
    </tbody>
</table>
```

## Tổng quan table

| **Loại bảng**                     | **Đặc điểm**                                  | **Khi nào dùng?**                                |
| --------------------------------- | --------------------------------------------- | ------------------------------------------------ |
| **Bảng cơ bản**                   | Không có viền, không tiêu đề                  | Khi chỉ cần hiển thị dữ liệu đơn giản            |
| **Bảng có viền**                  | Có khung, dễ nhìn hơn                         | Khi cần bảng rõ ràng, dễ đọc                     |
| **Bảng có tiêu đề**               | Có `<thead>`, `<th>` để mô tả cột             | Khi bảng chứa nhiều dữ liệu                      |
| **Bảng gộp ô**                    | Dùng `colspan` & `rowspan`                    | Khi cần nhóm ô chung nội dung                    |
| **Bảng có chân bảng**             | Dùng `<tfoot>` để hiển thị tổng hợp           | Khi cần hiển thị tổng số tiền, dữ liệu cuối cùng |
| **Bảng căn giữa**                 | Dùng `text-align: center;` và `margin: auto;` | Khi muốn bảng hiển thị đẹp, cân đối              |
| **Bảng kẻ ngang (Striped Table)** | Có màu xen kẽ từng dòng                       | Khi bảng có nhiều dữ liệu và cần dễ đọc          |

## 2. Đường dẫn của thẻ

- Có thể sử dụng đường dẫn online / offline
- Online: copy online paste vào
- Offline có 2 loại là đường dẫn tương đối và đường dẫn tuyệt đối
  2.1 Tuyệt đối
- Lấy full đường dẫn : VD: /Users/hangnt/documents... (bịa ra tuỳ vào đường dẫn của các bạn)
  2.2 Tương đối
- Muốn ra ngoài folder: ../

## 3. CSS

- Mục tiêu:
  - Nắm được tính năng chính CSS
  - Nắm được bộ chọn selector
  - Thẻ lồng nhau
  - Định nghĩa các lớp, id (class, id cho từng phần tử ntn )
  - Định danh cho từng phần tử và cách gán CSS cho vào từng phần tử ntn
- CSS: Cascading styles sheet là ngôn ngữ định dạng kiểu => CSS này sẽ làm cho trình duyệt hiểu được và hiển thị được định dạng của HTML trên nó ( bịa giống mấy hôm trước làm đẹp)

  => Làm cho HTML hiểu định dạng ntn ?
  Chưa có CSS thì chúng ta muốn 1 đoạn text vừa in đậm, vừa gạch chân, vừa in nghiêng => chúng ta dùng những thẻ nào ??? => dùng quá nhiều thẻ thẻ lồng thẻ rất rối => Cần chỉnh sửa đọc đau cả mắt ....
  => Do vậy chúng ta cần xây dựng CSS để họ nhìn đỡ rối => Chuyển sang sử dụng CSS tường minh hơn rõ ràng hơn, đẹp hơn và định dạng được nhiều thứ hơn .

- CSS giúp định dạng màu sắc, font chữ, tạo được nhiều thứ hơn. Mỗi phiên bản CSS thì có thêm các tính năng khác nhau => Ngày xưa CSS 1 thì k có tính năng shadown, ( đỏ bóng)... bây h CSS 3 đã có rồi ... còn nhiều tính năng đẹp hơn nữa.
- CSS giúp chúng ta chia thành nhiều phần để hỗ trợ định dạng kiểu 1 cách tốt hơn.
- Sau này các bạn có thể tiếp xúc vs SCSS, SASS, Taidwind.... => Đây là các FW nền tảng phát triển từ CSS làm đẹp hơn .... VD: SCSS còn giúp các bạn tạo được tên biến trong CSS và có thể tái sử dụng biến đó trên các trang CSS khác nhau... Các bạn có thể tìm hiểu thêm
- Để sử dụng được CSS chúng ta sẽ có thểm khái niệm nữa là selector (bộ chọn): Tức là để định dạng 1 kiểu thì phải biết phần tử muốn định dạng là cái gì ??
  (Có thể là 1 thẻ, 1 class, 1 id...)
- Chúng ta sẽ có các module trong CSS 3 như sau:

* tranform: Biến đổi (Biến đổi text này từ định dạng gì thành định dạng gì)
* transistion : Trượt đi trượt lại
* flexbox:...
* ...

"Khái niệm selector: Nhớ đơn giản chúng ta muốn apply hoặc đưa định dạng vào thì chúng ta phải biết đưa định dạng gì (luwaj chon CSS muon ap dung vao)
THuộc tính gì ? "
"VD: style=""color:red"" => color là thuộc tính. Thuộc tính là attribute là cái mà định dạng phần tử: VD: phần tử này cao bao nhiêu, font chữ gì....
Value: giá trị... => giá trị đi kèm ( giống trước kia các bạn học) . Giá trị phải đi kèm thuộc tính. "
Cú pháp:

- "Loại 1: inline => viết trực tiếp trong thẻ
- Loại 2: internal/Embedded => phải có thẻ style (nói về thuộc tính importain)
- Loại 3: exteral style css"

* Độ ưu tiên: inline CSS bao h cũng quan trọng hơn internal CSS
  Ch- o toàn bộ trang web là dấu \*{}
* "selector:
  - elemenet: the
  - universal : dau \* : ap dung cho toan bo trang web
  - id: dat thuoc tinh ten la id cho the va dinh dang tren id day => id cua moi the la khac nhau => Nguyen tac cua HTML => cac the khac nhau phai co ID khac nhau => ID la duy nhat
  - class: khi chung ta muon gom nhom co cung dinh dang => gom theo class"
    "Độ ưu tiên cac loại CSS:
* Tạo sao phải sử dụng extenal CSS: GS trnag web có nhiều trang con và trang con có nhiều CSS giống nhau => nên viết ra trang riêng và link vào trang cần => thay vì copy paste
