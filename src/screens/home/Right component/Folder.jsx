import File from './File'

function Folder({title, files}) {
  return (
    <div className="folder-container">
        <div className="folder-header">
            <div className='folder-header-item'>
                <span className="material-icons" style={{color: "#FFCA29"}}>folder</span>
                <span>{title}</span>
            </div>
            <div className='folder-header-item'>
                <span className="material-icons">delete</span>
                <span className="material-icons">edit</span>
                <button>
                    <span className="material-icons">add</span>
                    <span>New Playground</span>
                </button>
            </div>
        </div>
        <div className="cards-container">
            {
                files?.map((file)=>{
                    return <File
                    key={file.id}
                    title={file.title}
                    language={file.language}/>
                })
            }
        </div>
    </div>
  )
}

export default Folder