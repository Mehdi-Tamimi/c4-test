



export default function SubmitButton({text,handleOnClick}) {
    
    return (
        <button type="submit" onClick={handleOnClick} className="submitButton">
            {text}
        </button>
    )
}