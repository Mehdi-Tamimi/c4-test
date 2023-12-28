

export function calculateCordinates(long,lat) {

    const x = (((long - 44)/19.5) * 100).toFixed(3)
    const y = (((lat- 25)/15) * 100).toFixed(3)

    return([x,y])
}

export function fullName(user) {

    if (user) {
        const fullName = user.user.first_name + ' ' + user.user.last_name
        return fullName
    }
    
}

export const createMarkers = (projects,active,setActive) => {
    if (projects) {

        const markers = projects.map((project,index) => {
            const [x,y] = calculateCordinates(project.location_x,project.location_y)
            return (
            <div 
            onClick={() => (active === project.id)? setActive(null):setActive(project.id)}
            key={index}
            className='marker_holder'
            style={{
                left: `${x}%`,
                bottom: `${y}%`,
                
            }}>
                
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="32" viewBox="0 0 384 512"><path fill={(active === project.id)? "#FFF80A":"#DD6B4D"} d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0M192 128a64 64 0 1 1 0 128a64 64 0 1 1 0-128"/></svg>
                
            </div> 
        )})
        return markers
    }

    else {
        return [null]
    }

}