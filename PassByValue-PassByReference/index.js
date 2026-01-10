//pass by value (truyền theo giá trị)
//1. sao chép giá trị của biến: let y = x
//2. truyền bản sao vào bên trong hàm
//đặc điểm: gán lại tham số trong hàm, ko làm thay đổi biến bên ngoài hàm

//pass by reference (truyền theo tham chiếu)
//truyền trực tiếp tham chiếu của biến vào bên trong hàm.
//đặc điểm là gán lại tham số của hàm, ngay lập tức biến ngoài hàm cũng bị thay đổi

//*JavaScript chỉ có pass by value thôi ko có pass by reference

function changeValue(y) { //sao chép qua một ô nhớ mới
  y = 20 //sửa trong vùng nhớ của y, ko ảnh hưởng tới vùng nhớ của x
  // từ x qua y nó sao chép giá trị của nhau nên mới gọi là pass by value
}
let x = 10
changeValue(x)
console.log(x)

function changeValue(b) {// copy vùng nhớ mới để tạo b, lúc này vẫn trỏ đến vùng nhớ của a(#0X01)
  b = {name: 'haha'} // gán lại ko ảnh hưởng tới biến a bên ngoài, { name: 'haha' } được tạo bene heap VD:(#0X02), lúc này địa chỉ cảu biến b được sửa thành #0X02
  //b.name = 'hahaha' // hay bị hiểu nhầm: đây là gán lại thuộc tính, ko phải gán lại tham số => ko phải pass by reference
}
let a = { name: 'PTB'} //obj kiểu tham chiếu -> { name: 'PTB } được tạo ra ở heap(#0X01), biến a được lưu bên stack(với địa chỉ của bên heap)(#0X01)
changeValue(a)
console.log(a)

//=> chốt lại javascript ko có pass by reference