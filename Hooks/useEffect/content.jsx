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
  //===========================CHUNG===========================
  //callbakck luôn đc gọi sau khi component mounted
  //Cleanup function luôn đc gọi trc khi component unmounted
  //Cleanup function luôn đc gọi trước khi callback được gọi (trừ lần mounted)


  const tabs = ['posts', 'comments', 'albums']
  
  const [title, setTitle] = useState('')
  const [posts, setPosts] = useState([])
  const [type, setType] = useState('posts')
  const [showGoToTop, setShowGoToTop] = useState(false)
  const [width, setWidth] = useState(window.innerWidth)
  const [countdown, setCountdown] = useState(180)
  const [count, setCount] = useState(1)

  

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
  
  //setInterval
  useEffect(() => {
    let timer = setInterval(() => {
      setCountdown(prev => prev - 1)  
      // console.log('countdown...')
    },1000)

    // setTimeout(() => {
    //   setCountdown(countdown -1 )
    // })

    return () => clearInterval(timer)
  }, [/*countdown*/]) // dành cho setTimeout , để mỗi lần countdown thay đổi useEffect sẽ gọi
  
  //học cleanup func
  useEffect(() => {
    console.log(`mounted or re-render ${count}`)
    return () => {
      console.log(`Cleanup: ${count}`)
    }
  }, [count])

  return (
    <div>
      <div>
        <h3>chiều dài màn hình: {width}</h3>
      </div>
      <div>
        <h3>{countdown}</h3>
      </div>
      <div style={{ display: 'flex', marginBottom: '30px', alignItems: 'center' }}>
        <button 
          style={{ width: '80px', height: '25px', alignItems: 'center'}}
          onClick = {() => setCount(count + 1)}
        >Click me!</button>
        <h1 style={{ paddingLeft: '20px', margin: '0px' }}>{count}</h1>
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