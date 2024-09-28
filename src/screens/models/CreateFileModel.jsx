import { useContext } from 'react'
import './createPlaygroundModel.scss'
import { ModelContext } from '../../ContexProvider/ModelProvider'
import { PlaygroundContext } from '../../ContexProvider/PlaygroundProvider'

function CreateFileModel() {
  const {closeModel, modelPayload} = useContext(ModelContext)
  const PlaygroundFeatures = useContext(PlaygroundContext)

  const onSubmitHandler =(e)=>{
    e.preventDefault();
    const fileName = e.target.fileName.value;
    const language = e.target.language.value;
    
    PlaygroundFeatures.createNewFile(
      modelPayload,
      fileName,
      language
    )

    closeModel()
    
  }
  return (
    <div className="modal-container">
      <form className="modal-body" onSubmit={onSubmitHandler}>
        <h2>
          <span>Create New Playground</span>
          <span className='material-icons close' onClick={closeModel}>close</span>
        </h2>
        <div className='item'>
          <input name='fileName' required style={{width: '100%'}}/>
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

export default CreateFileModel