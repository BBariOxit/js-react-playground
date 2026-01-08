const { useEffect, useState } = React
 
function Content({ count }) { 

  console.log('rerender')
  return (
    <h2>HELLO ANH EM - {count}</h2> //trường hợp có truyền props , count thay đổi -> render lại
  )
}
//nhận vào 1 component, nó check các props của component này sau mỗi lần render có bị thay đổi hay ko
const MemoContent = React.memo(Content)
// export default memo(Content)