// Hàm này ko trả về cái mảng mới đâu nhé! Nó thao tác trực tiếp lên mảng gốc (in-place)
// và trả về ĐỘ DÀI MỚI (new length) của cái mảng đó.

// cú pháp
// array.unshift(item1, item2, ..., itemX)

// Dạng 1: Nhét 1 phần tử đơn côi vào đầu mảng
// Mày có một mảng data, sếp bảo mày nhét thêm một thằng user mới toanh lên đỉnh 
// danh sách để hiển thị trên UI. Quất ngay thằng này.
let techStack = ['Next.js', 'TailwindCSS'];
// Nhét thằng 'Turbopack' lên đầu để tỏ vẻ hiện đại
let newLength = techStack.unshift('Turbopack');

console.log(techStack); // Ra kết quả: ['Turbopack', 'Next.js', 'TailwindCSS']
console.log(newLength); // Ra kết quả: 3 (Độ dài mới của mảng)

// Dạng 2: Tọng 1 đống phần tử cùng lúc (Multiple items)
// Thay vì gọi unshift n lần (ngu, tốn tài nguyên), mày có thể ném 1 nùi 
// các phần tử vào cùng 1 lúc, ngăn cách bằng dấu phẩy. Code chạy rẹt rẹt.
let bugs = ['Lỗi CSS', 'Lỗi Logic'];
// Thêm 1 đống bug mới do mày vừa đẻ ra
bugs.unshift('Lỗi tràn RAM', 'Lỗi API 500');

// Lưu ý: Nó sẽ nhét nguyên cái cục đó vào đầu theo đúng thứ tự mày viết
console.log(bugs); 
// Kết quả: ['Lỗi tràn RAM', 'Lỗi API 500', 'Lỗi CSS', 'Lỗi Logic']

// Dạng 3: Bê nguyên một mảng khác ốp vào đầu (Dùng Spread Operator)
// Đi làm thực tế, ko ai ngồi gõ tay từng cái. Thường mày sẽ lấy data từ 1 cái mảng A,
// nhét lên đầu cái mảng B. Mày phải dùng phép thuật Spread Operator (...) của ES6 thì nó mới bung cái mảng ra được.
let oldData = [3, 4, 5];
let newDataFetched = [1, 2]; // Data mới kéo từ server về
// Dùng 3 dấu chấm (...) để phá vỡ cái mảng newDataFetched ra thành từng mảnh
oldData.unshift(...newDataFetched);

console.log(oldData); 
// Kết quả: [1, 2, 3, 4, 5]