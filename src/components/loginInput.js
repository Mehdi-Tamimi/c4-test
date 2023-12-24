


export default function LoginInput({placeholder,id}) {

    return (
        <div className="login_items">
            <label className="item_lable" htmlFor={id}> {placeholder} </label>
            <input className="item_input" id={id} placeholder={placeholder}  />
        </div>
        
    )
}