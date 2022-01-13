import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"

import MyNavbar from "./components/MyNavbar"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import Register from "./Register"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <MyNavbar></MyNavbar>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/register" element={<Register />}></Route>
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
