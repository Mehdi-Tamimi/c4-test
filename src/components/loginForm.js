import { useRef, useState } from "react";
import LoginInput from "./loginInput";
import SubmitButton from "./submitButton";
import { postData } from "../utils/requests";

const API = 'http://127.0.0.1:8000/api/auth/otp-create/'

export default function LoginForm({setId,setForm,setReceiver,receiver}) {

    // this state is defined to handle error if the form fields are empty
    const [exeption, setExeption] = useState(false)

    // this state is defined to handle error if the user has not registerd
    const [notFound, setNotFound] = useState()

    const numberRef = useRef()
    const handleOnClick = () => {
        // reading value of input using numberRef
        if (!numberRef.current.value) {
            // field is empty
            setExeption(true)
        }
        
        else {
            // set the value of input to send it in a request to the server
            setExeption(false)
            setReceiver(numberRef.current.value)
            
        }
    }


    const handleLogin = (res) => {
        // handle if user not found
        if (res.detail === 'کاربر وجود ندارد') {
            throw new Error('user not found')
        }
        else {
            setNotFound(false)
            setId(res.request_id)
        }
    }


    const handleOnSubmit = async (e) => {
        e.preventDefault()
        if (exeption) {
            // do not submit if there is exeption(empty fields)
        }
        else {
            // set the request body
            const data = {
                "receiver": receiver
            }

            // sending the request
            const response = postData(data , "POST", API)
            response
            .then((res) => handleLogin(res))
            .then(() => {
                // redirect user to validation form if there is no error
                setForm('validation')
            })
            .catch(() => setNotFound(true))

        }
    }


    return (
        <form onSubmit={handleOnSubmit} className="login_form">
            <LoginInput Ref={numberRef} placeholder={'شماره تلفن'}/>
            <SubmitButton handleOnClick={handleOnClick} setForm={setForm} text={'ورود'}/>
            <div className={exeption? 'exeptionMessage': 'hidden'}>
                فرم را پر کنید
            </div>
            <div className={notFound? 'exeptionMessage': 'hidden'}>
                برای ورود ابتدا ثبت نام کنید
            </div>
        </form>
    )
}