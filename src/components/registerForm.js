import LoginInput from "./loginInput";
import SubmitButton from "./submitButton";


export default function RegisterForm() {

    return (
        <form className="login_form">
            <LoginInput placeholder={'کد ملی'} id={1}/>
            <LoginInput placeholder={'شماره تلفن'} id={2}/>
            <SubmitButton text={'ثبت نام'}/>
        </form>
    )
}