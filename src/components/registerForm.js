import LoginInput from "./loginInput";
import SubmitButton from "./submitButton";


export default function RegisterForm({setForm}) {

    return (
        <form className="login_form">
            <LoginInput placeholder={'کد ملی'} id={1}/>
            <LoginInput placeholder={'شماره تلفن'} id={2}/>
            <SubmitButton setForm={setForm} text={'ثبت نام'}/>
        </form>
    )
}