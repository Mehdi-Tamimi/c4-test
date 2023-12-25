import LoginInput from "./loginInput"
import SubmitButton from "./submitButton"
export default function Validation() {

    return (
        <form className="login_form">
            <LoginInput placeholder={'کد تائید'}/>
            <SubmitButton text={'تائید'}/>
        </form>
    )
}