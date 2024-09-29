import { useContext } from "react"
import { ModelContext } from "../../ContexProvider/ModelProvider"
import CreatePlaygroundModel from "./CreatePlaygroundModel"
import CreateFolderModel from './CreateFolderModel'
import EditFolderModel from "./EditFolderModel"
import CreateFileModel from "./CreateFileModel"
import EditFileModel from "./EditFileModel"
import { ModelConstant } from "../../ContexProvider/ModelProvider"


function Model() {
    const {activeModel} = useContext(ModelContext)


  return (
    <>
    {activeModel === ModelConstant.CREATE_PLAYGROUND && <CreatePlaygroundModel/>}
    {activeModel === ModelConstant.CREATE_FOLDER && <CreateFolderModel/>}
    {activeModel === ModelConstant.EDIT_FOLDER && <EditFolderModel/>}
    {activeModel === ModelConstant.CREATE_FILE && <CreateFileModel/>}
    {activeModel === ModelConstant.EDIT_FILE && <EditFileModel/>}
    {activeModel === ModelConstant.EDIT_PLAYGROUND_FILE && <EditFileModel/>}
    </>
  )
}

export default Model