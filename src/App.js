import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/header"
import Home from "./pages/home"
import Login from "./pages/login"

export default function App() {

  return (
    <>
      
      <BrowserRouter>
          <div className="container">
              <Header/>
              <Routes>
                  <Route path="/" element={<Home/>} />
                  <Route path="/login" element={<Login/>} />
              </Routes>
          </div>
      </BrowserRouter>
    </>
  )
}

