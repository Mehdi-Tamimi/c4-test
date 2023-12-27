

export function calculateCordinates(long,lat) {

    const x = (((long - 44)/19.5) * 100).toFixed(3)
    const y = (((lat- 25)/15) * 100).toFixed(3)

    return([x,y])
}