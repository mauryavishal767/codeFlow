import { BrowserRouter, Route, Routes } from "react-router-dom"
import PlaygroundScreen from "./screens/playground/PlaygroundScreen"
import HomeScreen from "./screens/home/HomeScreen"
import PlaygroundProvider from "./ContexProvider/PlaygroundProvider"
import ModelProvider from "./ContexProvider/ModelProvider"


function App() {

  return (
    <PlaygroundProvider>
      <ModelProvider>
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomeScreen/>}/>
            <Route path="/playground" element={<PlaygroundScreen/>}/>
          </Routes>
        </BrowserRouter>
      </ModelProvider>
    </PlaygroundProvider>
  )
}

export default App
