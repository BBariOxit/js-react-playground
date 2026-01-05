const { useEffect, useState } = React
 
function Content() { //khi component này render thì code được đọc từ trên xuống
  
  //useEffect dùng để quản lý Side Effects
  // useEffect(callback, [deps])  //callback là bắt buộc, dependencies là ko bắt buộc

  //1. useEffect(callback)
  //-gọi callback mỗi khi component rerender
  //-gọi callback mỗi khi component thêm element vào DOM
  //2. useEffect(callback, [])
  //-chỉ gọi callback 1 lần sau khi component mounted
  //3. useEffect(callback, [deps])
  //-callback sẽ được gọi lại mỗi khi deps thay đổi
  //===============================
  //cả 3 trường hợp trên callbakck luôn đc gọi sau khi component mounted
  //Cleanup func luôn đc gọi trc khi component unmounted


  const tabs = ['posts', 'comments', 'albums']
  
  const [title, setTitle] = useState('')
  const [posts, setPosts] = useState([])
  const [type, setType] = useState('posts')
  const [showGoToTop, setShowGoToTop] = useState(false)
  const [width, setWidth] = useState(window.innerWidth)

  console.log(type);
  

  useEffect(() => {
    // console.log('mounted') //nó gọi thằng useEffect và đưa cho thằng này 1 cái callback, 
    // useEffect chạy ngay lúc đó và nhận được cái callback này 
    // -> nó cất cái callback tạm đi
    // (sau khi đưa element vào trong DOM thì nó sẽ quay lại đây gọi cái callback đã được truyền) 
    // document.title = title

    fetch(`https://jsonplaceholder.typicode.com/${type}`)
    .then(res => res.json())
    .then((posts) => {
      setPosts(posts) 
    })
  }, [type])

  //Listen DOM event
  useEffect(() => {
    const handleScroll = () => {
      
      if (window.scrollY >= 200) {
        setShowGoToTop(true)  //nó gọi useEffect liên tục sau mốc 200 nhưng nó ko re-render lại, react tự làm cho chúng ta
        console.log('set state')
      } else {
        setShowGoToTop(false)
      }
      // setShowGoToTop(window.scrollY >= 200)
    }
    
    window.addEventListener('scroll', handleScroll) //unmouted component nhưng sự kiện này vẫn còn => memory leak 
    console.log('addEventListener')
    
    //Cleanup Function
    return () => {
      window.removeEventListener('scroll', handleScroll)
      console.log('removeEventListener')
    }
  }, [])

  //resize
  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth) 
    }
    window.addEventListener('resize', handleResize)
    //cleaup func
    return () => (
      window.removeEventListener('resize', handleResize)
    )
  }, [])
  

  return (
    <div>
      <div>
        <h1>chiều dài màn hình: {width}</h1>
      </div>

        {tabs.map((tab) => (
          <button 
            key={tab}
            style={type === tab ? {
              color: '#fff',
              backgroundColor: "#333",
            } : {} }
            onClick={() => setType(tab)}
          >
            {tab}
          </button>
        ))}

      <input
        value={title}
        onChange = {(e) => setTitle(e.target.value)}
      />
      <ul>
        {posts.map(post => (
          <li key={post.id}>{post.title || post.name}</li>
        ))}
      </ul>
    {/* {console.log('render')}  */}
    {/* 'render' lúc nào cũng được in ra trước 'mounted'  */}

       {showGoToTop && (
        <button
          style={{
            position: 'fixed',
            right: '20px',
            bottom: '20px'
          }}
        >
          Go to top
        </button>
       )} 

    </div>
    
  )
}