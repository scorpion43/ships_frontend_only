import { Directions } from "@/constants"
import ShipGenerator from "@/services/ShipsGenerator"

const generateFields= (size, except = []) => {
    const allFields = []
    for (let x = 0; x < size; x++) {
        for (let y = 1; y <= size; y++) {
            const field = {
                x: x,
                y: y
            }
            if (!except.some(item => item.x === field.x && item.y === field.y)) {
                allFields.push({
                    x: x,
                    y: y
                })
            }
        }
    }

    return allFields
}

describe("ShipsGenerator", () => {
    it.only("should random Coordinates 100 times in range of board size", () => {
        const size = 7
        const shipGenerator = new ShipGenerator(size)

        for (let i = 1; i <= 1000; i++) {
            const coordinates = shipGenerator.randomCoordinates()
            expect(coordinates.x).toBeGreaterThanOrEqual(0);
            expect(coordinates.x).toBeLessThanOrEqual(size - 1);
            expect(coordinates.y).toBeGreaterThanOrEqual(1);
            expect(coordinates.y).toBeLessThanOrEqual(size);
        }
    })

    describe('getFinalDirection', () => {
        it('should return proper direction for start field (x: 0, y: 1) and ship size equals 1 and free fields on board { x: 0, y: 1 }', () => {
            const boardSize = 10
            const shipSize = 1
            const openFields = [ {x: 0, y: 1} ]
            const coveredFields = generateFields(boardSize, openFields)

            const shipGenerator = new ShipGenerator(boardSize, coveredFields)
            const randomCoordinatesMock = jest.spyOn(shipGenerator, 'randomCoordinates')
            randomCoordinatesMock.mockReturnValue({ x: 0, y: 1 });

            const finalDirection = shipGenerator.getFinalDirection(shipSize)
            expect(Object.values(Directions).includes(finalDirection)).toBe(true)
        })
        
        it('should return direction RIGHT for start field { x: 0, y: 1 } ship size equals 2 and free fields on board:  [ {x: 0, y: 1}, {x: 1, y: 1}, {x: 2, y: 1} ]', () => {
            const boardSize = 10
            const shipSize = 2
            const openFields = [ {x: 0, y: 1}, {x: 1, y: 1}, {x: 2, y: 1} ]
            const coveredFields = generateFields(boardSize, openFields)

            const shipGenerator = new ShipGenerator(boardSize, coveredFields)
            const randomCoordinatesMock = jest.spyOn(shipGenerator, 'randomCoordinates')
            randomCoordinatesMock.mockReturnValue({ x: 0, y: 1 });

            const finalDirection = shipGenerator.getFinalDirection(shipSize)

            expect(finalDirection).toBe(Directions.RIGHT)
        })
    })

    
})