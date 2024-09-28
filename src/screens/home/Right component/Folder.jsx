import { PlaygroundContext } from '../../../ContexProvider/PlaygroundProvider'
import { ModelContext, ModelConstant } from '../../../ContexProvider/ModelProvider'
import { useContext } from 'react'
import File from './File'

function Folder({title, files, id}) {
    const {deleteFolder} = useContext(PlaygroundContext)
    const {openModel, setModelPayload} = useContext(ModelContext)

    const onDeleteHandler = ()=>{
        deleteFolder(id)
    }

    const openEditFolderModel= ()=>{
        setModelPayload(id)
        openModel(ModelConstant.EDIT_FOLDER)
    }

    const onAddFileHandler = ()=>{
        setModelPayload(id)
        openModel(ModelConstant.CREATE_FILE)
    }


  return (
    <div className="folder-container">
        <div className="folder-header">
            <div className='folder-header-item'>
                <span className="material-icons" style={{color: "#FFCA29"}}>folder</span>
                <span>{title}</span>
            </div>
            <div className='folder-header-item'>
                <span className="material-icons" onClick={onDeleteHandler}>delete</span>
                <span className="material-icons" onClick={openEditFolderModel}>edit</span>
                <button onClick={onAddFileHandler}>
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
                    parentId={id}
                    id={file.id}
                    title={file.title}
                    language={file.language}/>
                })
            }
        </div>
    </div>
  )
}

export default Folder