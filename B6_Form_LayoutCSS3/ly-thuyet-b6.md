# Buổi 6 - Layout - CSS3

## Phần 1: Form

### Các Annotation Form API trong HTML5

#### 1. **required**

Thuộc tính `required` được sử dụng để yêu cầu người dùng điền vào trường nhập liệu trước khi gửi biểu mẫu. Nếu trường không được điền, trình duyệt sẽ ngừng gửi biểu mẫu và yêu cầu người dùng nhập dữ liệu.

### Ví dụ:

```html
<input type="text" name="username" required />
```

#### 2. pattern

Thuộc tính `pattern` giúp xác định một mẫu (regex) để kiểm tra dữ liệu nhập vào. Điều này hữu ích để đảm bảo người dùng nhập đúng định dạng dữ liệu.

### Ví dụ:

```html
<input
  type="text"
  name="email"
  pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$"
  required
/>
```

#### 3. minlength / maxlength

Thuộc tính `minlength` và `maxlength` được sử dụng để chỉ định độ dài tối thiểu và tối đa của dữ liệu mà người dùng có thể nhập vào trường.

```html
<input type="text" name="username" minlength="5" maxlength="15" required />
```

#### 4. type

Thuộc tính `type` xác định kiểu dữ liệu mà trường nhập liệu sẽ chấp nhận. HTML5 cung cấp nhiều loại input khác nhau như email, url, date, number, tel, v.v.

```html
<input type="email" name="email" required />
<input type="date" name="birthdate" required />
<input type="number" name="age" min="18" max="99" required />
```

#### 5. value

Thuộc tính `value` chỉ định giá trị mặc định mà trường nhập liệu sẽ có khi trang web được tải lần đầu.

```html
<input type="text" name="username" value="DefaultUser" />
```

#### 6. disabled

Thuộc tính `disabled` được sử dụng để vô hiệu hóa trường nhập liệu, khiến người dùng không thể tương tác với nó.

```html
<input type="text" name="username" disabled />
```

#### 7. readonly

Thuộc tính `readonly` cho phép người dùng xem nhưng không thể sửa đổi giá trị của trường nhập liệu.

```html
<input type="text" name="username" value="ReadOnlyUser" readonly />
```

#### 8. autocomplete

Thuộc tính `autocomplete` cho phép trình duyệt tự động điền các giá trị đã nhập trước đó vào các trường nhập liệu.

```html
<input type="text" name="username" autocomplete="on" />
```

#### 9. step

Thuộc tính `step` được sử dụng với các trường nhập liệu kiểu số để chỉ định các bước giá trị hợp lệ. Nó rất hữu ích khi bạn muốn người dùng chỉ có thể nhập các giá trị theo một bước cụ thể.

```html
<input type="number" name="quantity" step="1" min="1" max="100" />
```

#### 10. target

Thuộc tính `target` được sử dụng trong thẻ form để chỉ định nơi kết quả của biểu mẫu sẽ được hiển thị.

```html
<form action="/submit" target="_blank">
  <input type="text" name="username" />
  <input type="submit" value="Submit" />
</form>
```

#### 11. action

Thuộc tính `action` trong thẻ form xác định URL nơi dữ liệu biểu mẫu sẽ được gửi khi biểu mẫu được gửi đi.

```html
<form action="/submit">
  <input type="text" name="username" />
  <input type="submit" value="Submit" />
</form>
```

#### 12. method

Thuộc tính `method` xác định phương thức HTTP (POST hoặc GET) mà trình duyệt sẽ sử dụng để gửi dữ liệu biểu mẫu.

```html
<form action="/submit" method="post">
  <input type="text" name="username" />
  <input type="submit" value="Submit" />
</form>
```

## Phần 2: Layout

- Layout CSS là cách sử dụng các thuộc tính CSS để bố trí và định dạng các phần tử trong một trang web. Mục đích chính của layout CSS là xác định cách các phần tử như div, header, footer, sidebar, content, v.v. được sắp xếp và hiển thị trên trang. Các kỹ thuật layout giúp kiểm soát cấu trúc của trang, tạo ra giao diện người dùng (UI) hấp dẫn và dễ sử dụng.

### Các kỹ thuật Layout phổ biến trong CSS:

#### Box Model

- Mỗi phần tử HTML được xem như một hộp (box), bao gồm nội dung (content), padding (khoảng cách bên trong hộp), border (đường viền), và margin (khoảng cách bên ngoài hộp).

- Điều này giúp kiểm soát kích thước và khoảng cách giữa các phần tử.

```css
.box {
  width: 300px;
  height: 200px;
  padding: 20px;
  border: 5px solid black;
  margin: 10px;
}
```

#### Flexbox

- Flexbox (Flexible Box Layout) là một mô hình layout mạnh mẽ giúp sắp xếp các phần tử trong một container theo chiều ngang hoặc chiều dọc. Nó cho phép các phần tử co giãn và tự động phân phối không gian.
- Nói đơn gian là trục số

##### Các thuộc tính chính:

- display: flex; để kích hoạt Flexbox.

- justify-content: căn chỉnh các phần tử theo chiều ngang.

- align-items: căn chỉnh các phần tử theo chiều dọc.

```css
.container {
  display: flex;
  justify-content: center;
  align-items: center;
}
```

#### Grid Layout

- Grid Layout là một phương pháp sắp xếp các phần tử thành các hàng và cột. Nó mang lại khả năng linh hoạt cao trong việc thiết kế các layout phức tạp.

#### Các thuộc tính chính:

- display: grid; để kích hoạt Grid.
- grid-template-columns: định nghĩa các cột.
- grid-template-rows: định nghĩa các hàng.

```css
.container {
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 10px;
}
```

#### Float

- Thuộc tính float được sử dụng để làm cho phần tử trôi theo một bên của phần tử chứa, giúp các phần tử khác "chạy" xung quanh.

- Thường được sử dụng trong thiết kế bố cục nhiều cột.

```css
.left {
  float: left;
  width: 50%;
}
.right {
  float: right;
  width: 50%;
}
```

### Ưu nhược điểm của các kỹ thuật chia layout

#### 1. Float

- Ưu điểm:

  - Dễ sử dụng: Float rất dễ hiểu và có thể áp dụng cho các trường hợp layout đơn giản, ví dụ như bố cục nhiều cột.
  - Hỗ trợ rộng rãi: Float đã tồn tại từ lâu và được hỗ trợ trên tất cả các trình duyệt.

  * Chạy text xung quanh: Float rất tốt khi muốn tạo hiệu ứng văn bản quấn quanh hình ảnh hoặc các phần tử khác.

- Nhược điểm:

  - Khó kiểm soát bố cục phức tạp: Float không được thiết kế để xử lý các bố cục phức tạp, đặc biệt là khi các phần tử có chiều cao khác nhau.
  - Cần phải clear float: Sau khi sử dụng float, bạn cần phải sử dụng thuộc tính clear để tránh hiện tượng các phần tử bị lấn lên nhau.
  - Không linh hoạt: Float không dễ dàng tạo ra các bố cục linh hoạt, đặc biệt là khi bạn cần bố cục có chiều cao động hoặc cần kiểm soát căn chỉnh chính xác.
  - Vấn đề với các phần tử bị "nổi": Một số phần tử có thể trôi ra ngoài hoặc không căn chỉnh đúng nếu không được xử lý đúng.

#### 2. Flexbox

- Ưu điểm:

  - Dễ sử dụng và linh hoạt: Flexbox cho phép bạn dễ dàng căn chỉnh và phân phối không gian giữa các phần tử trong container theo chiều ngang hoặc dọc.

  - Tự động điều chỉnh kích thước: Các phần tử trong Flexbox có thể tự động co giãn hoặc thay đổi kích thước để phù hợp với không gian có sẵn.

  - Dễ dàng căn chỉnh: Flexbox cho phép căn chỉnh các phần tử giữa, căn chỉnh theo trục chính và trục phụ, giúp việc căn chỉnh trở nên đơn giản.

  - Hỗ trợ tốt trên các trình duyệt hiện đại: Flexbox được hỗ trợ rộng rãi trên các trình duyệt hiện đại.

- Nhược điểm:

  - Không thích hợp cho bố cục 2 chiều phức tạp: Flexbox không thực sự phù hợp khi bạn cần tạo các bố cục phức tạp với cả chiều ngang và chiều dọc như trong các giao diện phức tạp.

  - Khó kiểm soát khi có nhiều phần tử: Nếu bạn có quá nhiều phần tử trong một container và cần một bố cục phức tạp, Flexbox có thể trở nên khó kiểm soát.

  - Hạn chế với chiều cao: Mặc dù Flexbox rất tốt để căn chỉnh các phần tử theo chiều ngang, nhưng khi xử lý chiều cao hoặc các phần tử có chiều cao phức tạp, nó có thể không đáp ứng tốt như Grid.

#### 3. Grid Layout

- Ưu điểm:

  - Linh hoạt cao: Grid là công cụ mạnh mẽ cho việc tạo các bố cục phức tạp với các hàng và cột. Bạn có thể dễ dàng phân chia không gian và kiểm soát vị trí của các phần tử.

  - Thiết kế 2 chiều: Grid hỗ trợ bố cục cả theo chiều ngang và chiều dọc, rất phù hợp với các bố cục phức tạp như lưới.

  - Dễ dàng thay đổi kích thước: Các phần tử trong Grid có thể thay đổi kích thước tự động và linh hoạt, giúp tiết kiệm không gian hoặc điều chỉnh theo nhu cầu.

  - Định vị chính xác: Bạn có thể định vị chính xác các phần tử trong lưới bằng cách sử dụng các hàng và cột, đồng thời dễ dàng kiểm soát khoảng cách giữa chúng.

- Nhược điểm:

  - Hỗ trợ trình duyệt không hoàn hảo (trước đây): Mặc dù Grid hiện nay đã được hỗ trợ trên hầu hết các trình duyệt, nhưng một số trình duyệt cũ hoặc phiên bản Internet Explorer cũ không hỗ trợ đầy đủ.

  - Phức tạp hơn để học: Nếu bạn chưa quen với CSS Grid, nó có thể hơi khó học và khó hiểu hơn Flexbox, đặc biệt là khi cần tạo ra các lưới phức tạp.

  - Không cần thiết cho bố cục đơn giản: Grid có thể là quá sức đối với các bố cục đơn giản, nơi Flexbox hoặc thậm chí float có thể giải quyết tốt hơn.

### Link tham khảo:

- https://tenten.vn/tin-tuc/float-css-la-gi/
- https://www.w3schools.com/css/css3_flexbox_responsive.asp
- https://viblo.asia/p/css-flexible-box-flexbox-day-du-nhat-Ljy5VDWoZra
