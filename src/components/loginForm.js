import LoginInput from "./loginInput";
import SubmitButton from "./submitButton";



export default function LoginForm({setForm}) {

    return (
        <form className="login_form">
            <LoginInput placeholder={'شماره تلفن'}/>
            <SubmitButton setForm={setForm} text={'ورود'}/>
        </form>
    )
}