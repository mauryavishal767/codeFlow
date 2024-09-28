import { useContext } from 'react'
import './createPlaygroundModel.scss'
import { ModelContext } from '../../ContexProvider/ModelProvider'
import { PlaygroundContext } from '../../ContexProvider/PlaygroundProvider'

function EditFolderModel() {
    const {closeModel, modelPayload} = useContext(ModelContext)
    const {editFolder} = useContext(PlaygroundContext)
  
    const onSubmitHandler =(e)=>{
      e.preventDefault();
      const title = e.target.folderName.value;
      
      editFolder(modelPayload,title)
  
      closeModel()
    }
    return (
      <div className="modal-container">
        <form className="modal-body" onSubmit={onSubmitHandler}>
          <h2>
            <span>Edit Folder Title</span>
            <span className='material-icons close' onClick={closeModel}>close</span>
          </h2>
          <div className='item' style={{gap: '30px'}}>
            <input name='folderName' required style={{flexGrow: 1}}/>
            <button type='submit'>
              Update Title
            </button>
          </div>
        </form>
      </div>
    )
  }
  
  export default EditFolderModel