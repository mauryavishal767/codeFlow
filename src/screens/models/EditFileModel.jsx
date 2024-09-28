import { useContext } from 'react'
import './createPlaygroundModel.scss'
import { ModelContext } from '../../ContexProvider/ModelProvider'
import { PlaygroundContext } from '../../ContexProvider/PlaygroundProvider'

function EditFileModel() {
    const {closeModel, modelPayload} = useContext(ModelContext)
    const {editFile} = useContext(PlaygroundContext)
  
    const onSubmitHandler =(e)=>{
      e.preventDefault();
      const title = e.target.fileName.value;
      
      editFile(modelPayload.id, modelPayload.parentId,title)
  
      closeModel()
    }
    return (
      <div className="modal-container">
        <form className="modal-body" onSubmit={onSubmitHandler}>
          <h2>
            <span>Edit Card Title</span>
            <span className='material-icons close' onClick={closeModel}>close</span>
          </h2>
          <div className='item' style={{gap: '30px'}}>
            <input name='fileName' required style={{flexGrow: 1}}/>
            <button type='submit'>
              Update Title
            </button>
          </div>
        </form>
      </div>
    )
  }
  
  export default EditFileModel