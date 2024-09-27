import { useContext } from 'react'
import './createPlaygroundModel.scss'
import { ModelContext } from '../../ContexProvider/ModelProvider'

function CreatePlaygroundModel() {
  const {closeModel} = useContext(ModelContext)
  return (
    <div className="modal-container">
      <form className="modal-body">
        <h2>
          <span>Create New Playground & Create New Folder</span>
          <span className='material-icons close' onClick={closeModel}>close</span>
        </h2>
        <div className='item'>
          <p>Enter folder Name</p>
          <input />
        </div>
        <div className='item'>
          <p>Enter card name</p>
          <input />
        </div>
        <div className='item'>
          <select>
            <option value="cpp">CPP</option>
            <option value="java">Java</option>
            <option value="javascript">JavaScript</option>
            <option value="python">Python</option>
          </select>
          <button>
            Create Playground
          </button>
        </div>
      </form>
    </div>
  )
}

export default CreatePlaygroundModel