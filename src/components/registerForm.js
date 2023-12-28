import { useRef, useState } from "react";
import LoginInput from "./loginInput";
import SubmitButton from "./submitButton";
import { postData } from "../utils/requests";




const API = 'http://127.0.0.1:8000/api/auth/register/'
export default function RegisterForm({setForm}) {

    const [exeption,setExeption] = useState(false)
    const [details, setDetails] = useState()
    const first_nameRef = useRef('')
    const last_nameRef = useRef('')
    const national_numberRef = useRef('')
    const phone_numberRef = useRef('')
    


    const handleOnSubmit = (e) => {
        e.preventDefault()
        
        if (exeption) {
            console.log(1)
        }
        else {
            
            const response = postData(details , "POST", API)
    
            response
            .then(res => { setForm('login')})
            .catch(err=> console.log(`${err} : خطایی رخ داده`) )
        }


        
    }
    const handleOnClick = () => {

        if (!first_nameRef.current.value ||
            !last_nameRef.current.value ||
            !national_numberRef.current.value ||
            !phone_numberRef.current.value
            ) {
                setExeption(true)
        }
        else {
            setExeption(false)
            const userDetails = {
                "first_name": first_nameRef.current.value,
                "last_name": last_nameRef.current.value,
                "national_code": national_numberRef.current.value,
                "phone_number": phone_numberRef.current.value
            }
            setDetails(userDetails)
            
    
        }
        
    }
    return (
        <form onSubmit={handleOnSubmit} className="login_form">
            <LoginInput Ref={first_nameRef} placeholder={'نام'} id={1}/>
            <LoginInput Ref={last_nameRef} placeholder={'نام خانوادگی'} id={2}/>
            <LoginInput Ref={national_numberRef} placeholder={'کد ملی'} id={3}/>
            <LoginInput Ref={phone_numberRef} placeholder={'شماره تلفن'} id={4}/>
            <SubmitButton handleOnClick={handleOnClick} text={'ثبت نام'}/>
            <div className={exeption? 'exeptionMessage': 'hidden'}>
                فرم را پر کنید
            </div>
        </form>
    )
}