import { useContext } from "react"
import { ModelContext } from "../../ContexProvider/ModelProvider"
import CreatePlaygroundModel from "./CreatePlaygroundModel"
import CreateFolderModel from './CreateFolderModel'
import { ModelConstant } from "../../ContexProvider/ModelProvider"


function Model() {
    const {activeModel} = useContext(ModelContext)


  return (
    <>
    {activeModel === ModelConstant.CREATE_PLAYGROUND && <CreatePlaygroundModel/>}
    {activeModel === ModelConstant.CREATE_FOLDER && <CreateFolderModel/>}
    </>
  )
}

export default Model