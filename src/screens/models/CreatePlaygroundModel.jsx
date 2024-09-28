import { useContext } from 'react'
import './createPlaygroundModel.scss'
import { ModelContext } from '../../ContexProvider/ModelProvider'
import { PlaygroundContext } from '../../ContexProvider/PlaygroundProvider'

function CreatePlaygroundModel() {
  const {closeModel} = useContext(ModelContext)
  const PlaygroundFeatures = useContext(PlaygroundContext)

  const onSubmitHandler =(e)=>{
    e.preventDefault();
    const folderName = e.target.folderName.value;
    const fileName = e.target.fileName.value;
    const language = e.target.language.value;
    
    PlaygroundFeatures.createNewPlayground({
      folderName,
      fileName,
      language
    })

    closeModel()
    
  }
  return (
    <div className="modal-container">
      <form className="modal-body" onSubmit={onSubmitHandler}>
        <h2>
          <span>Create New Playground & Create New Folder</span>
          <span className='material-icons close' onClick={closeModel}>close</span>
        </h2>
        <div className='item'>
          <p>Enter folder Name</p>
          <input name='folderName' required/>
        </div>
        <div className='item'>
          <p>Enter card name</p>
          <input name='fileName' required/>
        </div>
        <div className='item'>
          <select name='language' required>
            <option value="cpp">CPP</option>
            <option value="java">Java</option>
            <option value="javascript">JavaScript</option>
            <option value="python">Python</option>
          </select>
          <button type='submit'>
            Create Playground
          </button>
        </div>
      </form>
    </div>
  )
}

export default CreatePlaygroundModel