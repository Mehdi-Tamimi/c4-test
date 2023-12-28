import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getData } from "../utils/requests"


 
export default function ProjectDetails() {

    
    const params = useParams()
    const API = `http://127.0.0.1:8000/api/core/projects/${params.id}`
    const [data, setData] = useState()
    
    useEffect(() => {

        const response = getData(API)
        response.then(res => setData(res))

        return () => {
            setData(null)
        }
    },[])

    const {id,title,status,units_number,completed_units_number,
        sold_units_number,x_location,y_location,units_facilitie,
        contractor_name,paid_invitations_number,applied_people_number,
        image_url} = data? data: {}
    return (
        <div className="detailsPage_container">
            <div className="detailsPage">
                
                <h1 className="detailsPage_title">
                    {title}
                </h1>
                <div>
                    
                </div>
            </div>
            
        </div>
    )
}