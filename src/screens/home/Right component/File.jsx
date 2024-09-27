import logo from '../../../assets/logo.png'

function File() {
  return (
    <div className="card">
        <img src={logo}/>
        <div className='title-container'>
            <span>{'greedy'}</span>
            <span>Language: {'js'}</span>
        </div>
        <div style={{display:'flex', gap: '10px'}}>
            <span className="material-icons">delete</span>
            <span className="material-icons">edit</span>
        </div>
    </div>
  )
}

export default File