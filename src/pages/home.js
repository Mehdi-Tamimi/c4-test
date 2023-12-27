import Map from '../components/map'
import { getData } from '../utils/requests'

const API = 'http://127.0.0.1:8000/api/core/projects/'
export default function Home() {

    const data = getData(API)

    return (
        <div>
            <Map/>
        </div>
        
    )
}