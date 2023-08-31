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

export { checkIsInRangeOfBoundaries, mergeFields }