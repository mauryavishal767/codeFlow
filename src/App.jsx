import { BrowserRouter, Route, Routes } from "react-router-dom"
import PlaygroundScreen from "./screens/playground/PlaygroundScreen"
import HomeScreen from "./screens/home/HomeScreen"
import PlaygroundProvider from "./ContexProvider/PlaygroundProvider"
import ModelProvider from "./ContexProvider/ModelProvider"
import Error404 from "./screens/error404"


function App() {

  return (
    <PlaygroundProvider>
      <ModelProvider>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomeScreen/>}/>
            <Route path='/playground/:fileId/:folderId' element={<PlaygroundScreen/>}/>
            <Route path="*" element={<Error404 />} />
          </Routes>
        </BrowserRouter>
      </ModelProvider>
    </PlaygroundProvider>
  )
}

export default App
