import map from '../assets/images/map.png'

export default function Map() {

    return (
        <div className='map_container'>
            <div className="map_holder">
                <img className="map" src={map} alt='map' />
                <div className='markers_container'>
                    <div className='marker_holder'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="32" viewBox="0 0 384 512"><path fill="currentColor" d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0M192 128a64 64 0 1 1 0 128a64 64 0 1 1 0-128"/></svg>
                    </div>

                </div>
            </div>

        </div>

    )
}