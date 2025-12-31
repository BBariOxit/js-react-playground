let luong = 0

// Dùng OR (||) - Cách của mấy thằng ngu
let lucNhan = luong || 10
console.log(lucNhan) //nó ra 10 => sai phải là 0 mới đúng mà || nó hiểu 0 là falsy 

// Dùng Nullish Coalescing (??)
let lucNhan2 = luong ?? 10//Nếu thằng bên trái là null hoặc undefined, nó sẽ lấy thằng bên phải
console.log(lucNhan2) 