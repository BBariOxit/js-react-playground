const { useEffect, useState } = React

function PreviewAvatar() {
  const [avatar, setAvatar] = useState()

  useEffect(() => {
    //cleanup func
    return () => {
      avatar && URL.revokeObjectURL(avatar.preview)  
    }
  }, [avatar])

  const handlePreviewAvatar = (e) => {
    const file = e.target.files[0]
    
    file.preview = URL.createObjectURL(file)
    setAvatar(file)
  }
  
  return (
    <div>
      <input 
        type="file"
        onChange={handlePreviewAvatar}
        style={{marginTop: '20px'}}
      />
      {avatar && (
        <img src={avatar.preview} alt="" width='40%' />
      )}
    </div>
  )
}
