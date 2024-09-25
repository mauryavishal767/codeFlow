import { BrowserRouter, Route, Routes } from "react-router-dom"
import PlaygroundScreen from "./screens/playground/PlaygroundScreen"
import HomeScreen from "./screens/home/HomeScreen"


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeScreen/>}/>
        <Route path="/playground" element={<PlaygroundScreen/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
