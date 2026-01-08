const { useState } = React

function App() {
  const [count, setCount] = useState(0)
  const increase = () => {
    setCount(count + 1)
  }
  return (
    <div className="wapper" style={{padding: 20}}>
      {/* bởi vì <Content /> là con, nên mỗi khi render lại component cha thì component con cũng re-render */}
      {/* <Content /> */}
      <MemoContent count={count}/>  {/* đã sài memo nên ko bị render lại ko cần thiết, chỉ khi nào truyền vào props thay đổi mới bị render*/}
      <h1>{count}</h1>
      <button onClick={increase}>Click me</button>
    </div>
  )
}