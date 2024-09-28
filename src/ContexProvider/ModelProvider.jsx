import { createContext, useState } from "react"

export const ModelContext = createContext()

export const ModelConstant = {
  CREATE_PLAYGROUND : 'CREATE_PLAYGROUND',
  CREATE_FOLDER : 'CREATE_FOLDER'
}


function ModelProvider({children}) {
     const [modelType, setmodelType] = useState(null)
     const modelFeatures ={
        openModel: setmodelType,
        closeModel: () => setmodelType(null),
        activeModel: modelType,
     }
  return (
    <ModelContext.Provider value={modelFeatures}>
        {children}
    </ModelContext.Provider>
  )
}

export default ModelProvider