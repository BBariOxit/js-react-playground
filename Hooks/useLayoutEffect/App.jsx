const { useState } = React

function App() {
  const [show, setShow] = useState(false)
  return (
    <div style={{padding: 20}}>
      <button 
        onClick={() => setShow(!show)}
        style={{marginRight: '20px'}}
      >Toggle</button>
      {show && <Content />} 
    </div>
  )
}
