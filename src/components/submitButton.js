



export default function SubmitButton({text,setForm}) {
    const handleOnClick = (e) => {
        setForm('validation')
        e.preventDefault()
    }
    return (
        <button onClick={(e) => handleOnClick(e)} className="submitButton">
            {text}
        </button>
    )
}