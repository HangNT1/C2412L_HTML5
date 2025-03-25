# Lý thuyết buổi 1

# 1. Tổng quan về môn học

- HTML: Là khung xưởng, giống như xương sống của người - khung xương của 1 căn nhà
- CSS: Làm đẹp cho người/ căn nhà .... (tuỳ mắt thẩm mỹ) => đẹp
- JS(Jquery): Tác động, hành động trên trang web

# 2. Giới thiệu về HTML

- HTML là ngôn ngữ đánh dấu khá phổ biến. Là nền tảng để làm việc và tiếp xúc với web. Viết tắt Hypertext Makeup Langugage.
- Ra đời năm 1990. Không phải ngôn ngữ lập trình
  | Tiêu chí | Ngôn ngữ lập trình | Ngôn ngữ đánh dấu |
  |---------------------|----------------------------------------------------------|-------------------------------------------|
  | **Mục đích** | Viết chương trình, thực hiện thuật toán, điều khiển luồng xử lý. | Định dạng, cấu trúc và trình bày nội dung. |
  | **Khả năng thực thi** | Có thể biên dịch hoặc thông dịch để chạy chương trình. | Không thể thực thi độc lập, chỉ mô tả dữ liệu. |
  | **Cú pháp** | Có cú pháp phức tạp, gồm biến, vòng lặp, hàm, điều kiện, toán tử,… | Chủ yếu dùng thẻ (tags) để đánh dấu nội dung. |
  | **Ví dụ** | Python, Java, C++, JavaScript,… | HTML, XML, Markdown,… |

# 3. Cấu trúc của html

```
<!DOCTYPE html>
Khai báo loại tài liệu (Document Type Declaration – DOCTYPE).
Giúp trình duyệt hiểu rằng đây là một tài liệu HTML5.
<html>
Thẻ gốc của tài liệu HTML, bao bọc toàn bộ nội dung trang web.
Thuộc tính lang="en" (hoặc ngôn ngữ khác) giúp công cụ tìm kiếm và trình đọc màn hình hiểu ngôn ngữ của trang.
    <head>
        Chứa thông tin metadata về trang web.
        Một số phần quan trọng trong <head>:
        <meta charset="UTF-8"> – Định dạng mã ký tự (UTF-8 để hỗ trợ đa ngôn ngữ).
        <meta name="viewport" content="width=device-width, initial-scale=1.0"> – Đảm bảo giao diện phù hợp trên thiết bị di động.
        <title> – Tiêu đề hiển thị trên tab trình duyệt.
        <link> – Liên kết đến file CSS, favicon, font...
        <script> – Nhúng JavaScript (nếu cần).
    </head>
    <body>
        Chứa nội dung chính của trang web.
        Các phần quan trọng trong <body>:
        Tiêu đề (<h1> → <h6>) – Định dạng các tiêu đề.
        Đoạn văn (<p>) – Hiển thị văn bản.
        Danh sách (<ul>, <ol>, <li>) – Tạo danh sách.
        Liên kết (<a href="">) – Dẫn đến trang khác.
        Hình ảnh (<img src="" alt="">) – Hiển thị hình ảnh.
        Form (<form>, <input>, <button>) – Nhập dữ liệu từ người dùng.
        Table (<table>, <tr>, <td>) – Hiển thị bảng.
        Div và span (<div>, <span>) – Nhóm và định dạng nội dung.
    </body>
    <footer> (tùy chọn)
    Chứa thông tin cuối trang như bản quyền, liên hệ, mạng xã hội.
    </footer>
</html>
```

# 4. Lưu ý khi đặt tên file HTML

1. Sử dụng chữ cái thường
   ✔ Nên: index.html, about-us.html
   ❌ Tránh: Index.HTML, AboutUs.HTML
   🔹 Lý do: Một số hệ điều hành như Linux phân biệt chữ hoa và chữ thường, trong khi Windows thì không.
2. Không chứa dấu cách
   ✔ Nên: about-us.html, contact*page.html
   ❌ Tránh: about us.html, contact page.html
   🔹 Lý do: Dấu cách có thể gây lỗi khi truy cập URL hoặc khi làm việc với server. Nếu cần ngăn cách từ, hãy dùng:
   Dấu gạch ngang - (khuyến khích)
   Dấu gạch dưới * (ít phổ biến hơn)
3. Nên dùng dấu gạch ngang (-) thay vì dấu gạch dưới (\_)
   ✔ Nên: about-us.html
   ❌ Tránh: about_us.html
   🔹 Lý do:
   Google và các công cụ tìm kiếm ưu tiên dấu - vì nó giúp phân tách từ khóa tốt hơn.

- được xem là dấu phân tách từ trong SEO, còn \_ thì không.

4. Tránh ký tự đặc biệt
   ✔ Nên: services.html, product-list.html
   ❌ Tránh: servíces.html, product@list.html, page#1.html
   🔹 Lý do: Một số ký tự như @, #, ?, &, \* có thể gây lỗi hoặc bị hiểu nhầm trong URL.
5. Không bắt đầu tên file bằng số hoặc ký tự đặc biệt
   ✔ Nên: page-1.html
   ❌ Tránh: 1page.html, @homepage.html
   🔹 Lý do: Một số hệ thống hoặc server có thể gặp vấn đề khi xử lý file bắt đầu bằng số hoặc ký tự đặc biệt.

# 5. Chú ý

- Ví dụ dự án của bạn có 10 file HTML thì trang web luôn luôn phải có trang chủ ( tức là trang đầu tiên chạy vào và từ trang đấy link ra các trang khác) => Để phát chạy được luôn thì đặt tên trang chủ là index.html

# 6. Lưu ý cài đặt

## 6.1 Cài đặt VS Code - nên cài bản mới nhât.

## 6.2 Extension

- Live Server - nên dùng bản có lượt dùng cao hơn - chỉ cài 1 cái
- Prettier - Code formatter : Dùng để format dự án

## 6.3 Setting vào dự án

- Vào mục setting cuối thanh bên phải rồi search chữ form và chọn format là prettier rồi tích cả vào format on save

## 6.4 Video hướng dẫn

- Video cài đặt VS Code(cả setting các extension): https://youtu.be/tDvc8PVehBc?si=mHI9msSTYpKPfUFe

# 7. Lý thuết về HTML tag

- Cú pháp chung: <tên thẻ> .... </tên thẻ>
- Thẻ nào mở sau thì đóng trước, và thẻ hoàn toàn có thể lồng thẻ
- VD:

```
<div>
    <p> ABC</p>
</div>
```

- Có 2 loại thẻ: Thẻ đầy đủ và thẻ thiếu(hay còn gọi là thẻ tự đóng)
- VD: Đầy đủ: h1, h2, a, i, strong...
  Tự đóng: br, hr, input....
- Tên của thẻ thì theo quy chuẩn của HTML
- Trong HTML5 thì chỉ cần ghi <br> thì sẽ tự hiểu là thẻ tự đóng. Còn trong những phiên bản cũ thì phải ghi thêm / vì nó tuân thủ quy tắc của XML sau này các bạn sẽ có môn về XML
- Tất cả mọi thứ viết trong body đều được hiển thị lên web trừ trường hợp bị ẩn đi.
- HTML tag: còn có attribute - thuộc tính của thẻ
- Nằm trong thẻ mở
- Có 2 phần : tên thuộc tính & giá trị của thuộc tính
  Thuộc tính là tính chất định nghĩa thêm cho 1 thẻ
- VD:

```
<a href="/abcdđ"> abcd </a> hoặc <p style="color:red">Test</p>
```

# 8. Chú ý

1. Căn chỉnh văn bản
   text-align: Căn chỉnh ngang của văn bản.
   Giá trị: left, right, center, justify.
2. Định dạng văn bản
   text-decoration: Trang trí văn bản.
   Giá trị: none, underline, overline, line-through, blink.
   font-style: Kiểu chữ.
   Giá trị: normal, italic, oblique.
   font-weight: Độ đậm của chữ.
   Giá trị: normal, bold, bolder, lighter, hoặc giá trị số (100–900).
3. Kích thước và phông chữ
   font-size: Kích thước chữ.
   Giá trị: px, em, %, rem, vw, vh.
   font-family: Định nghĩa phông chữ.
   Ví dụ: "Arial", "Times New Roman", "Courier New", sans-serif, serif.
   letter-spacing: Khoảng cách giữa các ký tự.
   Giá trị: normal, hoặc độ dài (ví dụ: 2px, 0.5em).
   line-height: Khoảng cách giữa các dòng.
   Giá trị: normal, số (1.5), hoặc đơn vị chiều dài (px, %).
4. Biến đổi chữ
   text-transform: Biến đổi kiểu chữ.
   Giá trị: capitalize, uppercase, lowercase, none.
   white-space: Quản lý khoảng trắng.
   Giá trị: normal, nowrap, pre, pre-line, pre-wrap.
5. Màu sắc
   color: Màu chữ.
   Giá trị: color name (ví dụ: red, blue), hex (ví dụ: #FF0000), rgb(), hoặc hsl().
   background-color: Màu nền của văn bản.
6. Hiệu ứng
   text-shadow: Tạo bóng cho văn bản.
   Giá trị: <offset-x> <offset-y> <blur-radius> <color>.
   Ví dụ: 2px 2px 5px gray.
7. Khoảng cách và căn lề
   padding: Khoảng cách bên trong giữa văn bản và biên.
   Giá trị: px, %, em, rem.
   margin: Khoảng cách bên ngoài giữa phần tử văn bản và các phần tử khác.
8. Hiển thị và hướng
   writing-mode: Hướng viết của văn bản.
   Giá trị: horizontal-tb (ngang từ trái sang phải), vertical-rl (dọc từ phải sang trái).
   direction: Hướng của văn bản.
   Giá trị: ltr (trái sang phải), rtl (phải sang trái).
