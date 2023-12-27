import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/header"
import Home from "./pages/home"
import Login from "./pages/login"
import ProjectDetails from "./pages/projectDetails"
import { useState } from "react"

export default function App() {

  const [isLogin, setIsLogin] = useState(false)
  const [user, setUser] = useState(null)

  return (
    <>
      
      <BrowserRouter>
          <div className="main_container">
              <Header isLogin={isLogin} user={user} />
              <Routes>
                  <Route path="/" element={<Home/>} />
                  <Route path="/login" element={<Login setUser={setUser} setIsLogin={setIsLogin}/>} />
                  <Route path="/projects/:id" element={<ProjectDetails/>}/>
              </Routes>
          </div>
      </BrowserRouter>
    </>
  )
}

