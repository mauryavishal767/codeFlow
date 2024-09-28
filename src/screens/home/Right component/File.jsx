import { useContext } from 'react'
import logo from '../../../assets/logo.png'
import { PlaygroundContext } from '../../../ContexProvider/PlaygroundProvider'
import { ModelContext, ModelConstant } from '../../../ContexProvider/ModelProvider'

function File({title, language, id, parentId}) {
  const {deleteFile} = useContext(PlaygroundContext)
  const onDeleteHandler = ()=>{
    deleteFile(id, parentId)
  }

  const {setModelPayload, openModel} = useContext(ModelContext)
  const onEditHandler = ()=>{
    setModelPayload({id, parentId})
    openModel(ModelConstant.EDIT_FILE)
  }

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
        <span className="material-icons" onClick={onDeleteHandler}>delete</span>
        <span className="material-icons" onClick={onEditHandler}>edit</span>
      </div>
    </div>
  )
}

export default File