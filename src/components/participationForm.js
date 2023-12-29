import { useState } from "react"
import {postData} from '../utils/requests'
import axios from "axios"



export default function ParticipationForm({id}) {
    
    const API = `http://127.0.0.1:8000/api/core/projects/${id}/participation/`

    // defined to get image from input
    const [image, setImage] = useState(null)

    let userToken = localStorage.getItem('user')
    const token = JSON.parse(userToken).token
    const handleOnSubmit = (e) => {
        // not refresh the page
        e.preventDefault()
        // sending the request (receipt image)
        const data = new FormData()
        data.append("receipt_photo", image)
        const request = fetch(API, {
            headers: {
                'Authorization': `Bearer ${token}`,
            },
            method: "POST",
            body: data
        })
        request.then(res => console.log(res))
        .catch(e => console.log(e))

    }
    const handleOnClick = (e) => {
        if (!image) {
            // do not submit the form if ther is no file
            e.preventDefault()
        }
    }
    return (
        <div className="participationFrom_holder">
            <form onSubmit={(e) => handleOnSubmit(e)} className="participationForm">
                <div className="participationForm_message">
                    فیش واریزی را آپلود کنید
                </div>
                <input onChange={(e) => setImage(e.target.files[0])} className="participationForm_input" type="file" />
                <button onClick={(e) => handleOnClick(e)} type="submit" className="participationForm_button">
                    ارسال
                </button>
            </form>

        </div>
    )
}