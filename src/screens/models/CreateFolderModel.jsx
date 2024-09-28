import { useContext } from 'react'
import './createPlaygroundModel.scss'
import { ModelContext } from '../../ContexProvider/ModelProvider'
import { PlaygroundContext } from '../../ContexProvider/PlaygroundProvider'

function CreateFolderModel() {
    const {closeModel} = useContext(ModelContext)
    const PlaygroundFeatures = useContext(PlaygroundContext)
  
    const onSubmitHandler =(e)=>{
      e.preventDefault();
      const folderName = e.target.folderName.value;
      
      PlaygroundFeatures.createNewFolder({folderName})
  
      closeModel()
    }
    return (
      <div className="modal-container">
        <form className="modal-body" onSubmit={onSubmitHandler}>
          <h2>
            <span>Create New Folder</span>
            <span className='material-icons close' onClick={closeModel}>close</span>
          </h2>
          <div className='item' style={{gap: '30px'}}>
            <input name='folderName' required style={{flexGrow: 1}}/>
            <button type='submit'>
              Create Folder
            </button>
          </div>
        </form>
      </div>
    )
  }
  
  export default CreateFolderModel