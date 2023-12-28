import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/header"
import Home from "./pages/home"
import Login from "./pages/login"
import ProjectDetails from "./pages/projectDetails"
import { useState, useEffect } from "react"
import { fetchUrl } from "./utils/requests"

const API = 'http://127.0.0.1:8000/api/auth/authenticate/'
export default function App() {

  const [isLogin, setIsLogin] = useState(false)
  const [user, setUser] = useState(null)
  let userToken = localStorage.getItem('user')
  
  useEffect(() => {
    if (userToken) {
    const token = JSON.parse(userToken).token

    const userData = fetchUrl(token, API, "GET")
    userData.then(res => setUser(res))
            .then(() => setIsLogin(true))
            .catch(err => console.log(err))

    
    }
    
    
  },[isLogin])
  return (
    <>
      
      <BrowserRouter>
          <div className="main_container">
              <Header setIsLogin={setIsLogin} isLogin={isLogin} user={user} />
              <Routes>
                  <Route path="/" element={<Home/>} />
                  <Route path="/login" element={<Login setUser={setUser} setIsLogin={setIsLogin}/>} />
                  <Route path="/:id" element={<ProjectDetails/>}/>
              </Routes>
          </div>
      </BrowserRouter>
    </>
  )
}

