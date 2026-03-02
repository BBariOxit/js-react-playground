// Tạo Node
class Node {
  constructor(data) {
    this.data = data
    this.next = null
  }
}
// Tạo Linked List
class LinkedList {
  constructor() {
    this.head = null
  }
  // Thêm phần tử vào cuối danh sách
  append(data) {
    const newNode = new Node(data)
    //nếu ds rỗng
    if (this.head === null) {
      this.head = newNode
      return
    }
    // duyệt đến cuối ds
    let curr = this.head
    while (curr.next !== null) {
      curr = curr.next
    }
    // Gắn node mới vào cuối
    curr.next = newNode
  }

  //Thêm phần tử vào đầu danh sách
  prepend(data) {
    const newNode = new Node(data)
    newNode.next = this.head
    this.head = newNode
  }
  // Xóa phần tử theo giá trị
  delete(value) {
    if (this.head === null) return
    // nếu xóa node đầu
    if (this.head.data === value) {
      this.head = this.head.next
      return
    }
    // Tìm và diệt mấy thằng ở giữa hoặc ở cuối
    let curr = this.head
    while (curr.next !== null) {
      if (curr.next.data === value) {
        curr.next = curr.next.next
        return
      }
      curr = curr.next
    }
  }
  // In toàn bộ danh sách
  print() {
    let curr = this.head
    let result = ''
    while (curr !== null) {
      result += curr.data + ' -> '
      curr = curr.next
    }
    console.log(result + 'null')
  }
}

// Test
const list = new LinkedList()
list.append(10)
list.append(20)
list.append(30)
list.print()
list.prepend(5)
list.print()
list.delete(20)
list.print()
