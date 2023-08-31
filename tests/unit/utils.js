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

export { checkIsInRangeOfBoundaries }