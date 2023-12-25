import { useState } from "react"
import LoginForm from "../components/loginForm"
import RegisterForm from "../components/registerForm"
import Validation from "../components/validation"


export default function Login() {

    // this states is used to determine the form should be shown 
    const [form, setForm] = useState('login')

    // determine the component according to the form state
    const component = (form === 'login')? <LoginForm setForm={setForm}/>:
                      (form === 'register')?
                      <RegisterForm setForm={setForm}/> : <Validation setForm={setForm}/>
    
    return (
        <div className="login_page">
            <div className="login">
                <div className={`${(form === 'validation')? 'hidden' : 'form_choise'}`}>

                    <span className={`choise ${(form === 'login')? 'text-[#DD6B4D]' : ''}`} 
                        onClick={() => setForm('login')}>ورود</span>

                    <span className={`choise ${(form === 'register')? 'text-[#DD6B4D]' : ''}`}
                        onClick={() => setForm('register')}>ثبت نام</span>

                </div>
                <div 
                className={`validation_message ${(form === 'validation')? '' : 'hidden'}`}>
                    <p>
                        کد ارسال شده را وارد کنید
                    </p>
                </div>
                <div className="form_holder">
                    {component}
                </div>
            
            </div>
        </div>
    )
}