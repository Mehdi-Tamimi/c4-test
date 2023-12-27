import { useRef, useState } from "react";
import LoginInput from "./loginInput";
import SubmitButton from "./submitButton";
import { postData } from "../utils/requests";

const API = 'http://127.0.0.1:8000/api/auth/otp-create/'
export default function LoginForm({setId,setForm,setReceiver,receiver}) {

    const [exeption, setExeption] = useState(false)
    const numberRef = useRef()
    const handleOnClick = () => {
        if (!numberRef.current.value) {
            setExeption(true)
        }
        else {
            setExeption(false)
            setReceiver(
                numberRef.current.value
            )
            console.log(numberRef.current.value)
            
        }
        

    }
    
    const handleOnSubmit = async (e) => {
        e.preventDefault()
        if (exeption) {

        }
        else {
            
            const data = {
                "receiver": receiver
            }
            const response = postData(data , "POST", API)
        
            response
            .then(res => setId(res.request_id))
            .then(() => {
                setForm('validation')
            }).catch(err=> console.log(`${err} : خطایی رخ داده`))

        }
    }


    return (
        <form onSubmit={handleOnSubmit} className="login_form">
            <LoginInput Ref={numberRef} placeholder={'شماره تلفن'}/>
            <SubmitButton handleOnClick={handleOnClick} setForm={setForm} text={'ورود'}/>
            <div className={exeption? 'exeptionMessage': 'hidden'}>
                فرم را پر کنید
            </div>
        </form>
    )
}