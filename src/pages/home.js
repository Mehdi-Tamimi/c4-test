import { useEffect, useState } from 'react'
import { createMarkers } from '../utils/functions'
import Map from '../components/map'
import { getData } from '../utils/requests'
import ProjectPreview from '../components/projectPreview'

const API = 'http://127.0.0.1:8000/api/core/projects/'
export default function Home() {


    const [active, setActive] = useState(null)
    const [projects, setProjects] = useState([])
    useEffect(() => {
        const data = getData(API)
        data.then( res => setProjects(res))

    },[])
    const projectIdentifyer = () => {
        if (projects && active) {
            const project = projects.find(obj => obj.id === active)
            return project
        }
        return null
    }
    const project = projectIdentifyer()
    const markers = createMarkers(projects,active,setActive)
    return (
        <div>
            <Map markers={markers} />
            <ProjectPreview project={project} />
        </div>
        
    )
}