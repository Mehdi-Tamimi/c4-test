


export default function LoginInput({placeholder,id,Ref}) {
    return (
        <div className="login_items">
            <label className="item_lable" htmlFor={id}> {placeholder} </label>
            <input
            ref={Ref}
            className="item_input"
            id={id}
            placeholder={placeholder}
            />
        </div>
        
    )
}