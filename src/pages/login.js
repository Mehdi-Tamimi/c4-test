import { useState } from "react"
import LoginForm from "../components/loginForm"
import RegisterForm from "../components/registerForm"
import Validation from "../components/validation"
import arrow from '../assets/icons/left-round.svg'
import { useNavigate } from "react-router-dom"


export default function Login({setIsLogin,setUser}) {

    const navigate = useNavigate()
    // this states is used to determine the form should be shown 
    const [form, setForm] = useState('login')

    const [receiver, setReceiver] = useState('')

    const [id, setId] = useState()

    // determine the component according to the form state
    const component = (form === 'login')? <LoginForm setId={setId} receiver={receiver} setReceiver={setReceiver} setForm={setForm}/>:
                      (form === 'register')?
                      <RegisterForm setForm={setForm}/>: 
                      <Validation
                      id={id}
                      receiver={receiver}
                      setIsLogin={setIsLogin}
                      setUser={setUser}/>
    
    const handleOnClick = (e) => {
        (form === 'validation')? setForm('login'):navigate('/')
    }
    
    return (
        <div className="login_page">
            <div className="login">
                <div className="returnButton_holder">
                    <button onClick={handleOnClick} className="returnButton">
                        <img className="returnButton_icon" src={arrow} alt="arrow"/>
                    </button>
                    <div>
                        {(form === 'validation')? 'بازگشت':'صفحه اصلی'}
                    </div>
                </div>
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