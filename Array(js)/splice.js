// splice() trong JavaScript là phương thức của Array dùng để:
// - xóa phần tử
// - thêm phần tử
// - thay thế phần tử
// splice() sẽ làm thay đổi mảng gốc.

// Cú pháp: array.splice(start, deleteCount, item1, item2, ...)
// | Tham số       | Ý nghĩa            |
// | ------------- | ------------------ |
// | `start`       | vị trí bắt đầu     |
// | `deleteCount` | số phần tử cần xóa |
// | `item`        | phần tử thêm vào   |

// Xóa phần tử
let arr = [10, 20, 30, 40]
arr.splice(1,2)
console.log(arr) //[10, 40]
// Xóa 2 phần tử từ vị trí 1 (20 và 30)

// Thêm phần tử
let arr2 = [10, 20, 30]
arr2.splice(1, 0, 15)
console.log(arr2) // [10, 15, 20, 30]
// bắt đầu vị trí 1, xóa 0 phần tử, thêm 15

// Thay thế phần tử
let arr3 = [10, 20, 30]
arr3.splice(1,1,50)
console.log(arr3) // [10, 50, 30]
// Xóa 20 và thêm 50

// Lấy phần tử bị xóa
// splice() trả về mảng chứa phần tử bị xóa
let arr4 = [10, 20, 30]
let removed = arr4.splice(1,1)
console.log(removed) // [20]

// Ví dụ
// Xóa sinh viên trong danh sách:
let students = ["An", "Bình", "Chi", "Dũng"]
students.splice(2, 1)
console.log(students) // ["An", "Bình", "Dũng"]
