import { createContext, useState } from "react"

export const ModelContext = createContext()

export const ModelConstant = {
  CREATE_PLAYGROUND : 'CREATE_PLAYGROUND',
  CREATE_FOLDER : 'CREATE_FOLDER',
  EDIT_FOLDER : 'EDIT_FOLDER',
  CREATE_FILE : 'CREATE_FILE',
  EDIT_FILE : 'EDIT_FILE',
  EDIT_PLAYGROUND_FILE : 'EDIT_PLAYGROUND_FILE'
}


function ModelProvider({children}) {
     const [modelType, setmodelType] = useState(null)
     const [modelPayload, setModelPayload] = useState(null)

     const closeModel = ()=>{
      setmodelType(null) 
      setModelPayload(null)
     }
     const modelFeatures ={
        openModel: setmodelType,
        closeModel,
        activeModel: modelType,
        modelPayload,
        setModelPayload,
     }
  return (
    <ModelContext.Provider value={modelFeatures}>
        {children}
    </ModelContext.Provider>
  )
}

export default ModelProvider