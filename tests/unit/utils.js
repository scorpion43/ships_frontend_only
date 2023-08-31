const isOnBoard = (coordinatePart, boundary) => {
    return coordinatePart >= boundary.min && coordinatePart <= boundary.max
}

const checkIsInRangeOfBoundaries = (coordinates, boardSize) => {
    const boundaries = {
        x: {
            min: 0,
            max: boardSize - 1
        },
        y: {
            min: 1,
            max: boardSize
        }
    }

    return isOnBoard(coordinates.x, boundaries.x) && isOnBoard(coordinates.y, boundaries.y)
}

const mergeFields = (ships) => {
    let fields = []
    ships.forEach(ship => {
        fields = fields.concat(ship.fields)
    })
    return fields
}

const getBorderCoordinates = (fields) => {
    const borderPoints = []
    const start = {
        x: fields[0].x - 1,
        y: fields[0].y - 1
    }
    const end = {
        x: fields[fields.length - 1].x + 1,
        y: fields[fields.length - 1].y + 1
    }

    for (let y = start.y; y <= end.y; y++) {
        for (let x = start.x; x <= end.x; x++) {
            const point = {x: x, y: y}
            if (fields.every(field => point.x !== field.x || point.y !== field.y)) {
                borderPoints.push(point)
            }
        }
    }

    return borderPoints
}

const checkShipsAreProperlyGenerated = (ships, boardSize) => {
    let isOk = true
    while (ships.length > 0 && isOk) {
        const ship = ships.shift()
        const allFields = mergeFields(ships)
        const borderPoints = getBorderCoordinates(ship.fields)
        isOk = borderPoints.every(point => {
            if (!checkIsInRangeOfBoundaries(point, boardSize)) {
                return true
            }
            else {
                const test = allFields.every(field => field.x !== point.x || field.y !== point.y)
                return test
            }
        })

    }

    return isOk
}

export { checkIsInRangeOfBoundaries, mergeFields, getBorderCoordinates, checkShipsAreProperlyGenerated }