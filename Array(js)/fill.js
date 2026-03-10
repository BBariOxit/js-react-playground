// fill() trong JavaScript là phương thức của Array dùng để điền (gán) một giá trị cho nhiều phần tử trong mảng.
// lưu ý: fill() làm thay đổi mảng gốc.

// Cú pháp: array.fill(value, start, end)

// | Tham số | Ý nghĩa                          |
// | ------- | -------------------------------- |
// | `value` | giá trị muốn điền                |
// | `start` | vị trí bắt đầu (mặc định = 0)    |
// | `end`   | vị trí kết thúc (không tính end) |

// Ví dụ cơ bản
let arr = [1, 2, 3, 4]
arr.fill(0)
console.log(arr) // [0, 0, 0, 0]
// Tất cả phần tử bị thay bằng 0

// Điền từ vị trí xác định
let arr2 = [1, 2, 3, 4]
arr.fill(9, 1)
console.log(arr2) // [1, 9, 9, 9]
// Điền 9 từ index 1

// Điền trong khoảng
let arr3 = [1, 2, 3, 4, 5]
arr3.fill(7, 1, 4)
console.log(arr3) // [1, 7, 7, 7, 5]
// Thay từ index 1 → 3

// Tạo mảng nhanh
// fill() hay dùng để tạo mảng giá trị giống nhau
let arr4 = new Array(5).fill(0)
console.log(arr4) // [0, 0, 0, 0, 0]

// Ví dụ thực tế
// Tạo mảng điểm mặc định:
let scores = new Array(10).fill(0)
console.log(scores)

// Lưu ý quan trọng (object)
let arr5 = new Array(3).fill({name: "A"})
arr5[0].name = "B"
console.log(arr) // [{name:"B"}, {name:"B"}, {name:"B"}]
// Vì object dùng chung reference