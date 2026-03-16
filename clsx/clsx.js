// clsx là một thư viện JavaScript nhỏ dùng để quản lý và ghép các class CSS một cách linh hoạt,
// thường dùng trong React, Next.js, hoặc các dự án dùng Tailwind CSS.

// clsx giúp kết hợp nhiều class CSS thành một chuỗi duy nhất, đồng thời hỗ trợ:
// điều kiện true/false
// object
// Array
// loại bỏ class không cần thiết
// Kích thước rất nhỏ (~239 bytes).

import clsx from "clsx"

// 1. Truyền string bình thường
clsx('foo', 'bar'); 
// => 'foo bar'

// 2. Truyền Object (Cái này dùng nhiều nhất này)
// Nếu cái value là true thì cái key mới được lên sóng
clsx({ 
  'btn-primary': true, 
  'is-loading': false, 
  'active': 1 > 0 
});
// => 'btn-primary active'

// 3. Kết hợp cả đống lăng nhăng
const isAdmin = true;
clsx('base-class', { 'admin-mode': isAdmin }, ['extra-stuff', 'more-shit']);
// => 'base-class admin-mode extra-stuff more-shit'