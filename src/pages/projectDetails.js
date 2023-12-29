import { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"
import { getData } from "../utils/requests"
import Map from "../components/map"
import { calculateCordinates } from "../utils/functions"
import ProjectDetailsItems from "../components/projectDetailsItems"
import ParticipationForm from "../components/participationForm"


export default function ProjectDetails() {

    
    const params = useParams()
    const API = `http://127.0.0.1:8000/api/core/projects/${params.id}`

    // defined to read the data of project
    const [data, setData] = useState()

    useEffect(() => {
        // getting project's data
        const response = getData(API)
        response.then(res => setData(res))
        .catch(err => console.log(err))

        return () => {
            setData(null)
        }
    },[])

    const {id,title,status,units_number,completed_units_number,
        sold_units_number,location_x,location_y,contractor_name,
        applied_people_number,project_area} = data? data: {}


    const [x,y] =  calculateCordinates(location_x,location_y)
    // postioning maarkes on the map
    const marker = <div
                    style={{
                        left: `${x}%`,
                        bottom: `${y}%`
                    }}
                    className="marker_holder"> 
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="32" viewBox="0 0 384 512"><path fill="#FFF80A" d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0M192 128a64 64 0 1 1 0 128a64 64 0 1 1 0-128"/></svg>
                    </div>
    return (
        <div className="detailsPage_container">
            <div className="detailsPage">
                
                <h1 className="detailsPage_title">
                    {title}
                </h1>
                <Map markers={[marker]}/>
                <div className="projectPreview_container">
                    <div>
                        <ProjectDetailsItems title={`وضعیت پروژه:`} text={status}/>
                        <ProjectDetailsItems title={'مساحت پروژه:'} text={project_area + ' متر مربع'}/>
                        <ProjectDetailsItems title={'پیمانکار:'} text={contractor_name} />
                        <ProjectDetailsItems title={'تعداد واحد‌ها:'} text={units_number}/>
                        <ProjectDetailsItems title={'واحد های کامل شده:'} text={completed_units_number}/>
                        <ProjectDetailsItems title={'واحد های فروخته شده:'} text={sold_units_number}/>
                        {/* <ProjectDetailsItems title={'امکانات رفاهی مجموعه:'} text={units_facilities} /> */}
                        <ProjectDetailsItems title={'افراد متقاضی:'} text={applied_people_number + ' نفر'} />

                    </div>
                    <ParticipationForm id={id} />
                    
                    
                </div>
            </div>
            
        </div>
    )
}