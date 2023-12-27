import { useEffect, useState } from 'react'

import Map from '../components/map'
import { getData } from '../utils/requests'

const API = 'http://127.0.0.1:8000/api/core/projects/'
export default function Home() {

    const [active, setActive] = useState(null)
    const [projects, setProjects] = useState([])
    useEffect(() => {
        const data = getData(API)
        data.then( res => setProjects(res))

    },[])
    return (
        <div>
            <Map active={active} setActive={setActive} projects={projects} />
        </div>
        
    )
}