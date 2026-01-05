const { useState } = React

function App() {
  const [show, setShow] = useState(false)
  const [show2, setShow2] = useState(false)
  const [show3, setShow3] = useState(false)
  return (
    <div style={{padding: 20}}>
      <button 
        onClick={() => setShow(!show)}
        style={{marginRight: '20px'}}
      >Toggle</button>
      <button onClick={() => setShow2(!show2)} style={{marginRight: '20px'}}>Toggle</button>
      <button onClick={() => setShow3(!show3)}>Toggle</button>
      {show && <Content />} 
      {show2 && <PreviewAvatar />} 
      {show3 && <Chat />} 
    </div>
  )
}
