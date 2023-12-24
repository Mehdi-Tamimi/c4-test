import map from '../assets/images/map.svg'

export default function Map() {

    return (
        <div className='map_container'>
            <div className='map_holder'>
                <img src={map} alt="map" className='map'/>
            </div>
        </div>
    )
}