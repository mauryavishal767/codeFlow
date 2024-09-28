import './index.scss'
import Folder from './Folder'
import { useContext } from 'react'
import { PlaygroundContext } from '../../../ContexProvider/PlaygroundProvider'

function RightComponent() {
    const folders = useContext(PlaygroundContext).folders
    
  return (
    <div className='right-container'>
        <div className="Header">
            <div className="title"><span>My</span> Playground</div>
            <button className="add-folder">
                <span className="material-icons">add</span>
                <span>New Folder</span>
            </button>
        </div>
        {
            folders?.map((folder)=>{
                return <Folder 
                key={folder.id} 
                title={folder.title} 
                files={folder.files}/>
            })
        }
    </div>
  )
}

export default RightComponent