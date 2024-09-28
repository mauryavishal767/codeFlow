import './index.scss'
import Folder from './Folder'
import { useContext } from 'react'
import { PlaygroundContext } from '../../../ContexProvider/PlaygroundProvider'
import { ModelConstant, ModelContext } from '../../../ContexProvider/ModelProvider'

function RightComponent() {
    const folders = useContext(PlaygroundContext).folders

    const {openModel} = useContext(ModelContext)
    const openCreateNewFolderModel= ()=>{
        openModel(ModelConstant.CREATE_FOLDER)
    }
    
  return (
    <div className='right-container'>
        <div className="Header">
            <div className="title"><span>My</span> Playground</div>
            <button className="add-folder" onClick={openCreateNewFolderModel}>
                <span className="material-icons">add</span>
                <span>New Folder</span>
            </button>
        </div>
        {
            folders?.map((folder)=>{
                return <Folder 
                key={folder.id} 
                id={folder.id}
                title={folder.title} 
                files={folder.files}/>
            })
        }
    </div>
  )
}

export default RightComponent