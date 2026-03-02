// class trong JavaScript là cách viết tạo object theo mô hình OOP (lập trình hướng đối tượng).
// Nhưng quan trọng:
// Class trong JS KHÔNG phải OOP thật như Java.
// Nó chỉ là “syntactic sugar” (cách viết đẹp hơn) của prototype.

class Person {
  constructor(name, age) {
    this.name = name
    this.age =age
  }
  greet() {
    console.log('hi my name ' + this.name)
  }
}

// constructor là hàm chạy khi dùng new
// Dùng để khởi tạo dữ liệu ban đầu
const p1 = new Person("An", 20)
// Khi đó: this.name = "An"  this.age = 20

// this = object đang được tạo
console.log(p1.name) // An

// Method trong class lưu ở đâu?
// Method không nằm trong object, mà nằm trong: Person.prototype
// Tức là tất cả object tạo từ Person đều dùng chung một bản greet().

// class = prototype
function Person2(name) {
  this.name =name
}
Person2.prototype.greet = function() {
  console.log('hi' + this.name)
}
// Class chỉ là cách viết gọn hơn.

// Static method
// Dùng khi method thuộc về class, không thuộc object.
class MathUtils {
  static add(a, b) {
    return a + b
  }
}
console.log(MathUtils.add(2,3))
// Không cần new.

// Kế thừa (Inheritance)
class Animal {
  speak() {
    console.log('animal sound')
  }
}

class Dog extends Animal {
  bark() {
    console.log('woof')
  }
}
const d = new Dog()
d.speak() // kế thừa
d.bark()
// extends dùng prototype chain phía sau.

// Prototype Chain hoạt động ra sao?
// Khi gọi: d.speak()
// JS tìm theo thứ tự:
// 1. Trong object d
// 2. Trong Dog.prototype
// 3. Trong Animal.prototype
// 4. Trong Object.prototype
// 5. null
// Đó gọi là prototype chain.

// Class có private không?
// JS hiện đại có:
class User {
  #password
  constructor(pw) {
    this.#password = pw
  }
}
// Dấu # = private thật sự.