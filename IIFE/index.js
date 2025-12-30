// IIFE - Immediately Invoked Function Expression
// Self-invoked Function

//IIFE
;(function(message) {
  console.log('Message:', message);
})('hello :>>>>');

//IIFE with arrow function
;(() => {
  console.log('alo alo')
})()

//private
let i = 0
;(function MyFunc() {
  i++
  console.log(i);
  
  if(i<10)
    MyFunc()
})()

//MyFunc()  //private nên ko gọi ngoài được

//các cách khác
//đặt gọi hàm bên trong luôn
;(function() {
  let fullName = 'PTB'
  console.log(fullName);
}())


//sử dụng dấu toán tử ở phía trước để ! + - ..., function ko nằm trong () nữa
;!function() {
  let fullName = 'PTB'
  console.log(fullName);
}()

//VD
const app = (function () {
  //private biến phạm vi
  const cars = []
  return {
    get(index) {
      return cars[index]
    },
    add(car) {
      cars.push(car)
    },
    edit(index, car) {
      cars[index] =car
    },
    delete(index) {
      cars.splice(index, 1)
    }
  }
})()