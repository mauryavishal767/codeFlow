import logo from '../../../assets/logo.png'

function File({title, language}) {
  return (
    <div className="card">
      <div className='first'>
      <img src={logo}/>
      <div className='title-container'>
        <span>{title}</span>
        <span>Language: {language}</span>
      </div>
      </div>
      <div style={{display:'flex', gap: '10px'}}>
        <span className="material-icons">delete</span>
        <span className="material-icons">edit</span>
      </div>
    </div>
  )
}

export default File