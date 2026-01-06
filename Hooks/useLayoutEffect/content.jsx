const { useLayoutEffect, useEffect,  useState } = React

//useEffect
//1. cập nhật lại state
//2. cập nhật lại DOM (muatated)
//3. render lại UI
//4. gọi cleanup func nếu deps thay đổi
//5. gọi useEffect callback

//useLayoutEffect
//1. cập nhật lại state
//2. cập nhật lại DOM (mutated)
//3. gọi cleanup nếu deps thay đổi (sync)
//4. gọi useLayoutEffect callback (sync)
//5. render lại UI

 
function Content() {
  const [count, setCount] = useState(1)

  // useEffect(() => {
  //   if (count >3)  // do nó đưa số 4 vào DOM rồi mới gọi call back của useEffect nên số 4 hiện ra một cách chớp nhoáng
  //     setCount(0)
  // }, [count])

  //cách xử lý
  useLayoutEffect(() => {
    if (count >3)  
      setCount(0)
  }, [count])

  const handleCount = () => {
    setCount(count + 1)
  }
  return (
    
    <div>
      <h1>{count}</h1>
      <button
        onClick={handleCount}
      >Click to count</button>
    </div>
  )
}