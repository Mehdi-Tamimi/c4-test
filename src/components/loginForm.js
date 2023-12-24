import LoginInput from "./loginInput";
import SubmitButton from "./submitButton";



export default function LoginForm({text}) {

    return (
        <form className="login_form">
            <LoginInput placeholder={'شماره تلفن'}/>
            <SubmitButton text={'ورود'}/>
        </form>
    )
}