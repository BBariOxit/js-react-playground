// Tạo 1 cái Node (Toa tàu)
class Node {
  constructor(value) {
    this.value = value;
    this.next = null; // Mới đẻ ra thì chưa móc với ai
  }
}

// Tạo nguyên cái đoàn tàu
class LinkedList {
  constructor() {
    this.head = null; // Ban đầu tàu đéo có toa nào
    this.tail = null;
    this.length = 0;
  }

    // Thêm 1 toa vào đuôi (Push)
  push(value) {
    const newNode = new Node(value);
    if (!this.head) { // Nếu tàu trống
      this.head = newNode;
      this.tail = newNode;
    } else { // Nếu tàu đã có toa
      this.tail.next = newNode; // Móc toa cuối vào toa mới
      this.tail = newNode;      // Cập nhật lại cái đuôi mới
    }
    this.length++;
    return this;
  }

  // Thêm 1 toa vào đầu (Unshift)
  unshift(value) {
    const newNode = new Node(value);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head; // Móc toa mới vào đầu toa cũ
      this.head = newNode;      // Update lại cái đầu mới
    }
    this.length++;
    return this;
  }

  // In ra console xem cho dễ hình dung
  print() {
    let current = this.head;
    let result = [];
    while (current) {
      result.push(current.value);
      current = current.next;
    }
    console.log(result.join(' -> ') + ' -> null');
  }
}

// Chạy test thử xem chạy ngu hay khôn
const myLL = new LinkedList();
myLL.push("Bảo");
myLL.push("thích");
myLL.push("code");
myLL.unshift("Đm");

myLL.print(); // Output: Đm -> Bảo -> thích -> code -> null