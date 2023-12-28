import map from '../assets/images/map.png'






export default function Map({markers}) {


    
    return (
        <div className='map_container'>
            <div className="map_holder">
                <img className="map" src={map} alt='map' />
                <div className='markers_container'>
                   {markers}
                </div>
            </div>
        </div>

    )
}