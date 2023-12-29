import { useRef, useState } from "react";
import LoginInput from "./loginInput";
import SubmitButton from "./submitButton";
import { postData } from "../utils/requests";




const API = 'http://127.0.0.1:8000/api/auth/register/'

export default function RegisterForm({setForm}) {

    // this state is defined to handle error if the form fields are empty
    const [exeption,setExeption] = useState(false)

    // this state is defined to handle error if the use already exists
    const [valid, setValid] = useState(true)

    // this state is defined to set the body of post request
    const [details, setDetails] = useState()

    // these Refs are defined to read value of inputs
    const first_nameRef = useRef('')
    const last_nameRef = useRef('')
    const national_numberRef = useRef('')
    const phone_numberRef = useRef('')

    const handleOnRegister = (res) => {
        // handling the user alredy exists error
        if (res.detail === 'کاربر از قبل وجود دارد') {
            throw new Error('user alredy exists')
        }
        else {
            setValid(true)
        }
    }
    

    const handleOnSubmit = (e) => {

        // not to refresh the page
        e.preventDefault()
        
        if (exeption) {
            // there is an empty field
        }
        else {
            // handle form submit
            const response = postData(details , "POST", API)
            response
            .then(res => handleOnRegister(res))
            .then(() => setForm('login'))
            // if user alredy exists
            .catch(() =>  setValid(false))
        }
    }


    const handleOnClick = () => {

        if (!first_nameRef.current.value ||
            !last_nameRef.current.value ||
            !national_numberRef.current.value ||
            !phone_numberRef.current.value
            ) {
            // there is in empty field
                setExeption(true)
        }
        else {
            // reading value of inputs and setting body of the request
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
            <div className={!valid? 'exeptionMessage': 'hidden'}>
                کاربر از قبل وجود دارد
            </div>
        </form>
    )
}