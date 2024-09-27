import { useContext } from "react"
import { ModelContext } from "../../ContexProvider/ModelProvider"
import CreatePlaygroundModel from "./CreatePlaygroundModel"


function Model() {
    const {activeModel} = useContext(ModelContext)


  return (
    <>
    {activeModel === 'CREATE_PLAYGROUND' && <CreatePlaygroundModel/>}
    </>
  )
}

export default Model