import { useState } from "react"
import { useParams } from "react-router-dom"
import { getData } from "../utils/requests"


 
export default function ProjectDetails() {

    
    const params = useParams()
    const API = `http://127.0.0.1:8000/api/core/projects/${params.id}`
    const [data, setData] = useState()
    
    const response = getData(API)
    response.then(res => setData(res))
    
    return (
        <div>
            <div className="projectImage">
                <div>

                </div>
                <div>

                </div>
                <div>
                    
                </div>
            </div>
            
        </div>
    )
}