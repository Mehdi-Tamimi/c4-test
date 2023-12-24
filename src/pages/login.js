import { useState } from "react"
import LoginForm from "../components/loginForm"
import RegisterForm from "../components/registerForm"


export default function Login() {
    
    const [login, setLogin] = useState(true)
    const component = login? <LoginForm/> : <RegisterForm/>
    return (
        <div className="login_page">
            <div className="login">
                <div className="form_choise">
                    <div className={`choise ${login? 'text-[#DD6B4D]' : null}`} onClick={() => setLogin(true)}>ورود</div>
                    <div className={`choise ${login? null : 'text-[#DD6B4D]'}`} onClick={() => setLogin(false)}>ثبت نام</div>
                </div>
                <div className="form_holder">
                    {component}
                </div>
            
            </div>
        </div>
    )
}