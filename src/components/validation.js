import LoginInput from "./loginInput"
import SubmitButton from "./submitButton"
import { postData } from "../utils/requests"
import { useRef, useState } from "react"
import { useNavigate } from "react-router-dom"

const API = 'http://127.0.0.1:8000/api/auth/otp-check/'
export default function Validation({setIsLogin,id,receiver,setUser}) {

    const navigate = useNavigate()

    // defined to read value of input
    const passRef = useRef('')

    // defined to set the body of request
    const [password, setPassword] = useState()

    // this state is defined to handle error if the validation code is not valid
    const [valid, setValid] = useState(true)

    // this state is defined to handle if password length is not 4
    const [validLength, setValidLength] = useState(true)

    const handleOnClick = () => {
        
        if (passRef.current.value.length === 4) {
            //reading and save value of the input (the password)
            setValidLength(true)
            setPassword(passRef.current.value)        
        }
        else {
            // handle error if the length is not 4
            setValidLength(false)
        }
        
    }


    const handleValidation = (res) => {
        // handle if user not found
        if (res.detail === 'کد اشتباه است') {
            setValid(false)
            throw new Error('code not valid')
        }
        else {
            setValid(true)
            localStorage.setItem('user',JSON.stringify(res))
        }
    }
    

    const handleOnSubmit = async (e) => {
        // not to refresh the page
        e.preventDefault()

        if (validLength) {
            // body of the request
            const data = {
                "request_id": id,
                "receiver": receiver,
                "password": password
            }
            // sending the request to the server
            const response = postData(data , "POST", API)
            response
            .then(res => handleValidation(res))
            .then(() => {
                setIsLogin(true)
                navigate('/')
            }).catch(() => setValid(false))
            }
        }


    return (
        <form onSubmit={handleOnSubmit} className="login_form">
            <LoginInput Ref={passRef} placeholder={'کد تائید'}/>
            <SubmitButton handleOnClick={handleOnClick} text={'تائید'}/>
            <div className={!valid? 'exeptionMessage': 'hidden'}>
                کد نامعتبر است
            </div>
            <div className={!validLength? 'exeptionMessage': 'hidden'}>
                طول کد 4 رقم باید باشد
            </div>
        </form>
    )
}