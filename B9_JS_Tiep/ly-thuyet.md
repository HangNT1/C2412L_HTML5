## Lý thuyết JS buổi 9

### 1. Tổng quan về JS

- JS - viết tắt của từ Javascript
- JavaScript (JS) là một ngôn ngữ lập trình phổ biến, chủ yếu được sử dụng để tạo nội dung động trên trang web.
- Ban đầu được phát triển để chạy trên trình duyệt, giúp tạo hiệu ứng động cho website.
- Hiện nay, JS có thể chạy trên cả server (Node.js) và nhiều nền tảng khác.
- Là một trong ba công nghệ cốt lõi của web:
- HTML → Cấu trúc trang web.
- CSS → Giao diện và phong cách.
- JavaScript → Thêm tương tác và logic.

### 2. Client-side & Server - side

- JS là ngôn ngữ vừa là client-side & server side
- Client-Side (Phía người dùng - FE - Frontend): JS tương tác với phía trên giao diện: React JS, Vue JS...
- Server-Side (Phía máy chủ - BE - Backend): Node JS

### 3. Cách khai báo biến

- Khai báo biến tên biến
- Có thể dùng var/let/const
- Đặc điểm của var:
  - Có thể gán lại giá trị.
  - Có thể khai báo lại cùng tên biến trong cùng một phạm vi.
  - Không có "block scope", chỉ có "function scope".
  - Dễ gây lỗi vì bị hoisting và không an toàn trong block ({}).

```JS
var name = "John";  // Khai báo biến
console.log(name);  // Output: John

name = "David";  // Gán lại giá trị
console.log(name);  // Output: David

var name = "Alice";  // Khai báo lại biến (KHÔNG BỊ LỖI)
console.log(name);  // Output: Alice
```

- Đặc điểm của let:
  - Có thể gán lại giá trị.
  - KHÔNG thể khai báo lại cùng tên trong cùng một phạm vi.
  - Có "block scope" → Chỉ tồn tại trong {}.
  - Không bị hoisting như var.

```JS
let age = 25;  // Khai báo biến
console.log(age);  // Output: 25

age = 30;  // Gán lại giá trị (ĐƯỢC PHÉP)
console.log(age);  // Output: 30

let age = 40;  // LỖI: Không thể khai báo lại biến trong cùng phạm vi
```

- Đặc điểm của const:
  - KHÔNG thể gán lại giá trị sau khi khai báo.
  - KHÔNG thể khai báo lại cùng tên trong cùng một phạm vi.
  - Có "block scope" như let.
  - Giúp mã dễ đọc, an toàn hơn khi không muốn thay đổi giá trị.

```JS
const PI = 3.14159;
console.log(PI);  // Output: 3.14159

PI = 3.14;  //  LỖI: Không thể gán lại giá trị của const

```

### 4. Các kiểu dữ liệu trong JS

- Trong JavaScript, có 2 loại kiểu dữ liệu chính:
  - Kiểu dữ liệu nguyên thủy (Primitive Types)
  - Kiểu dữ liệu tham chiếu (Reference Types - Objects)
- Kiểu dữ liệu nguyên thủy (Primitive Types)

  - Đặc điểm:
    - Lưu trực tiếp giá trị trong bộ nhớ.
    - Không thể thay đổi (immutable).
    - So sánh bằng giá trị.
  - Số (number): Dùng cho cả số nguyên và số thực.

  ```JS
  let age = 25; // Số nguyên
  let price = 99.99; // Số thực
  let infinity = Infinity; // Vô cực
  let notANumber = NaN; // Not-a-Number (Lỗi toán học)
  console.log(typeof age); //  "number"
  ```

  - String (chuỗi): Dùng để lưu trữ văn bản.

    ```JS
    let name = "John"; // Chuỗi dùng dấu nháy kép
    let message = 'Hello'; // Chuỗi dùng dấu nháy đơn
    let greeting = `Xin chào, ${name}`; // Template literals (ES6)
    console.log(typeof name); //  "string"
    ```

  - Boolean: True/False: Dùng để lưu true hoặc false.

    ```JS
    let isAdmin = true;
    let isLoggedIn = false;
     console.log(typeof isAdmin); // "boolean"
    ```

- Kiểu dữ liệu tham chiếu (Reference Types - Objects)
  - Lưu trữ tham chiếu đến vùng nhớ, không lưu giá trị trực tiếp.
  - Khi so sánh, JS so sánh tham chiếu, không phải giá trị.
- Object: Dùng để nhóm nhiều giá trị thành một cấu trúc.

  - Khai báo bằng {} hoặc từ khoá new

    ```JS
    let person = {
        name: "Alice",
        age: 25,
        isStudent: false
    };
    console.log(person.name); // 👉 "Alice"
    console.log(typeof person); // 👉 "object"
    ```

- Array: Mảng: Là một object đặc biệt chứa danh sách các giá trị.

  ```JS
  let numbers = [1, 2, 3, 4, 5];
  console.log(numbers[0]); // 👉 1
  console.log(typeof numbers); // 👉 "object"

  ```

- Dùng typeOf để kiểm tra kiểu dữ liệu

### 5. Phân biệt == & ===

- Trong JavaScript, có hai cách so sánh giá trị:
  - == (so sánh bằng lỏng lẻo)
  - === (so sánh bằng chặt chẽ)
- ==
  - So sánh giá trị, không quan tâm kiểu dữ liệu.
  - JavaScript sẽ tự động ép kiểu (type coercion) nếu hai giá trị khác kiểu.

```JS
console.log(5 == "5"); // 👉 true (Ép kiểu: "5" → 5)
console.log(0 == false); // 👉 true (Ép kiểu: false → 0)
console.log(null == undefined); // 👉 true (Được coi là tương đương)
console.log(" " == 0); // 👉 true (Chuỗi rỗng → 0)
```

=> Vấn đề của == là nó có thể cho kết quả không mong muốn vì JavaScript tự động chuyển đổi kiểu.

- ===
  - So sánh cả giá trị và kiểu dữ liệu.
  - Không có ép kiểu - nếu khác kiểu, kết quả luôn false.

```JS
console.log(5 === "5"); // 👉 false (Số và chuỗi khác kiểu)
console.log(0 === false); // 👉 false (Số và boolean khác kiểu)
console.log(null === undefined); // 👉 false (Khác kiểu)
console.log(" " === 0); // 👉 false (Chuỗi và số khác kiểu)
```

### 6. Phân biệt null & underfine

- null
  - Là một giá trị đặc biệt trong JavaScript.
  - Đại diện cho một giá trị trống hoặc không tồn tại.
  - Thường được lập trình viên gán một cách chủ động để biểu thị rằng biến hoặc đối tượng không có giá trị.
  - Kiểu dữ liệu của null khi dùng typeof là "object" (đây là một lỗi trong JavaScript từ đầu, nhưng không được sửa để tránh làm hỏng các chương trình cũ).

```JS
let x = null;
console.log(x);        // null
console.log(typeof x); // "object" (lỗi trong JavaScript)
```

- underfined
  - Là một giá trị mặc định trong JavaScript.
  - Một biến sẽ có giá trị undefined nếu chưa được gán giá trị.
  - Khi một hàm không trả về giá trị (return), nó sẽ mặc định trả về undefined.
  - Khi truy cập vào một thuộc tính không tồn tại của một đối tượng, kết quả là undefined.
  - Kiểu dữ liệu của undefined khi dùng typeof là "undefined".

```JS
let y;
console.log(y);        // undefined
console.log(typeof y); // "undefined"
```

### 7. Các loại vòng lặp trong JS

- for(i)
- for in => key là vị trí
- for of => đối tượng không có vị trí
- while (điều kiện)
- do...while

# https://viblo.asia/p/cac-loai-vong-lap-trong-javascript-07LKXp82KV4
