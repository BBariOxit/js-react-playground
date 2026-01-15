'use strict'

//lưu ý trong strict mode vẫn có this nếu được bind
this.firstName = 'thái'
this.lastName = 'Bảo'
function showFullName2() {
  // console.log(this)//this ở đây là đang trỏ tới phạm vi window
  console.log(`${this.firstName} ${this.lastName}`)
}
// showFullName2() //trong strict mode sẽ báo lỗi ngay, ko sài được this, vì this trong hàm nó trỏ ra ngoài global nên ko có firstName và lastName nên error
showFullName2.call(this)
