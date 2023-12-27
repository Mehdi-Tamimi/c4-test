import LoginInput from "./loginInput"
import SubmitButton from "./submitButton"
import { postData } from "../utils/requests"
import { useRef, useState } from "react"

const API = 'http://127.0.0.1:8000/api/auth/otp-check/'
export default function Validation({setIsLogin,id,receiver,setUser}) {

    const passRef = useRef('')
    const [password, setPassword] = useState()

    const handleOnClick = () => {
        setPassword(passRef.current.value)
    }
    const handleOnSubmit = async (e) => {
        e.preventDefault()
        const data = {
            "request_id": id,
            "receiver": receiver,
            "password": password
        }
        console.log(receiver)
        const response = postData(data , "POST", API)
    
        response
        .then(res => console.log(res))
        .then(() => {
            setIsLogin(true)
        }).catch(err => console.log(`${err} : خطایی رخ داده`) )
    }
    return (
        <form onSubmit={handleOnSubmit} className="login_form">
            <LoginInput Ref={passRef} placeholder={'کد تائید'}/>
            <SubmitButton handleOnClick={handleOnClick} text={'تائید'}/>
        </form>
    )
}