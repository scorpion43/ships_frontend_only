import { Directions, FIELD_STATE } from "@/constants"
import ShipGenerator from "@/services/ShipsGenerator"
import { checkShipsAreProperlyGenerated, mergeFields } from "../utils"

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
    it("should random Coordinates 100 times in range of board size", () => {
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

    describe('getDirectionWithCoordinates', () => {
        it('should return proper direction for start field (x: 0, y: 1) and ship size equals 1 and free fields on board { x: 0, y: 1 }', () => {
            const boardSize = 10
            const shipSize = 1
            const openFields = [ {x: 0, y: 1} ]
            const coveredFields = generateFields(boardSize, openFields)

            const shipGenerator = new ShipGenerator(boardSize, coveredFields)
            const randomCoordinatesMock = jest.spyOn(shipGenerator, 'randomCoordinates')
            randomCoordinatesMock.mockReturnValue({ x: 0, y: 1 });

            const finalDirection = shipGenerator.getDirectionWithCoordinates(shipSize)
            expect(Object.values(Directions).includes(finalDirection.direction)).toBe(true)
        })
        
        it('should return direction RIGHT for start field { x: 0, y: 1 } ship size equals 2 and free fields on board:  [ {x: 0, y: 1}, {x: 1, y: 1}, {x: 2, y: 1} ]', () => {
            const boardSize = 10
            const shipSize = 2
            const openFields = [ {x: 0, y: 1}, {x: 1, y: 1}, {x: 2, y: 1} ]
            const coveredFields = generateFields(boardSize, openFields)

            const shipGenerator = new ShipGenerator(boardSize, coveredFields)
            const randomCoordinatesMock = jest.spyOn(shipGenerator, 'randomCoordinates')
            randomCoordinatesMock.mockReturnValueOnce({ x: 9, y: 10 });
            randomCoordinatesMock.mockReturnValueOnce({ x: 0, y: 10 });
            randomCoordinatesMock.mockReturnValueOnce({ x: 3, y: 1 });
            randomCoordinatesMock.mockReturnValueOnce({ x: 0, y: 1 });

            const finalDirection = shipGenerator.getDirectionWithCoordinates(shipSize)

            expect(finalDirection.direction).toBe(Directions.RIGHT)
        })

        it('should return direction UP for start field { x: 5, y: 5 } ship size equals 2 and free fields on board:  [ {x: 5, y: 5}, {x: 5, y: 4}, {x: 5, y: 3} ]', () => {
            const boardSize = 10
            const shipSize = 2
            const openFields = [ {x: 5, y: 5}, {x: 5, y: 4}, {x: 5, y: 3}]
            const coveredFields = generateFields(boardSize, openFields)

            const shipGenerator = new ShipGenerator(boardSize, coveredFields)
            const randomCoordinatesMock = jest.spyOn(shipGenerator, 'randomCoordinates')
            randomCoordinatesMock.mockReturnValueOnce({ x: 9, y: 10 });
            randomCoordinatesMock.mockReturnValueOnce({ x: 0, y: 10 });
            randomCoordinatesMock.mockReturnValueOnce({ x: 3, y: 1 });
            randomCoordinatesMock.mockReturnValueOnce({ x: 5, y: 5 });

            const finalDirection = shipGenerator.getDirectionWithCoordinates(shipSize)

            expect(finalDirection.direction).toBe(Directions.UP)
        })

        it('should return direction DOWN for start field { x: 5, y: 5 } ship size equals 2 and free fields on board:  [ {x: 5, y: 5}, {x: 5, y: 6}, {x: 5, y: 7} ]', () => {
            const boardSize = 10
            const shipSize = 2
            const openFields = [ {x: 5, y: 5}, {x: 5, y: 6}, {x: 5, y: 7} ]
            const coveredFields = generateFields(boardSize, openFields)

            const shipGenerator = new ShipGenerator(boardSize, coveredFields)
            const randomCoordinatesMock = jest.spyOn(shipGenerator, 'randomCoordinates')
            randomCoordinatesMock.mockReturnValueOnce({ x: 5, y: 5 });

            const finalDirection = shipGenerator.getDirectionWithCoordinates(shipSize)

            expect(finalDirection.direction).toBe(Directions.DOWN)
        })

        it('should return direction LEFT for start field { x: 5, y: 5 } ship size equals 2 and free fields on board:  [ {x: 5, y: 5}, {x: 4, y: 5}, {x: 3, y: 5} ]', () => {
            const boardSize = 10
            const shipSize = 2
            const openFields = [ {x: 5, y: 5}, {x: 4, y: 5}, {x: 3, y: 5} ]
            const coveredFields = generateFields(boardSize, openFields)

            const shipGenerator = new ShipGenerator(boardSize, coveredFields)
            const randomCoordinatesMock = jest.spyOn(shipGenerator, 'randomCoordinates')
            randomCoordinatesMock.mockReturnValueOnce({ x: 9, y: 10 });
            randomCoordinatesMock.mockReturnValueOnce({ x: 0, y: 10 });
            randomCoordinatesMock.mockReturnValueOnce({ x: 3, y: 1 });
            randomCoordinatesMock.mockReturnValueOnce({ x: 5, y: 5 });

            const finalDirection = shipGenerator.getDirectionWithCoordinates(shipSize)

            expect(finalDirection.direction).toBe(Directions.LEFT)
        })
    })

    describe('generateShips', () => {
        it('should ships array contains proper ships definition for mocked functions', () => {
            const size = 10
            const shipGenerator = new ShipGenerator(size)

            const randomCoordinatesMock = jest.spyOn(shipGenerator, 'randomCoordinates')
            const getDirectionWithCoordinatesMock = jest.spyOn(shipGenerator, 'getDirectionWithCoordinates')

            randomCoordinatesMock.mockReturnValueOnce({ x: 8, y: 9 });
            randomCoordinatesMock.mockReturnValueOnce({ x: 8, y: 4 });
            randomCoordinatesMock.mockReturnValueOnce({ x: 4, y: 7 });
            randomCoordinatesMock.mockReturnValueOnce({ x: 1, y: 9 });
            randomCoordinatesMock.mockReturnValueOnce({ x: 3, y: 4 });
            randomCoordinatesMock.mockReturnValueOnce({ x: 6, y: 3 });
            randomCoordinatesMock.mockReturnValueOnce({ x: 6, y: 9 });
            randomCoordinatesMock.mockReturnValueOnce({ x: 1, y: 7 });
            randomCoordinatesMock.mockReturnValueOnce({ x: 1, y: 5 });
            randomCoordinatesMock.mockReturnValueOnce({ x: 1, y: 2 });

            getDirectionWithCoordinatesMock.mockReturnValueOnce({ direction: Directions.UP, coordinates: { x: 8, y: 9 } });
            getDirectionWithCoordinatesMock.mockReturnValueOnce({ direction: Directions.UP, coordinates: { x: 8, y: 4 } });
            getDirectionWithCoordinatesMock.mockReturnValueOnce({ direction: Directions.RIGHT, coordinates: { x: 4, y: 7 } });
            getDirectionWithCoordinatesMock.mockReturnValueOnce({ direction: Directions.RIGHT, coordinates: { x: 1, y: 9 } });
            getDirectionWithCoordinatesMock.mockReturnValueOnce({ direction: Directions.DOWN, coordinates: { x: 3, y: 4 } });
            getDirectionWithCoordinatesMock.mockReturnValueOnce({ direction: Directions.UP, coordinates: { x: 6, y: 3 }});

            const ships = shipGenerator.generateShips()

            expect(ships.length).toBe(10)

            expect(ships[0].fields).toEqual(expect.arrayContaining([
                { x: 8, y: 9, state: FIELD_STATE.CLEAR }, { x: 8, y: 8, state: FIELD_STATE.CLEAR  }, { x: 8, y: 7, state: FIELD_STATE.CLEAR }, { x: 8, y: 6, state: FIELD_STATE.CLEAR }
            ]))
            expect(ships[1].fields).toEqual(expect.arrayContaining([
                { x: 8, y: 4, state: FIELD_STATE.CLEAR  }, { x: 8, y: 3, state: FIELD_STATE.CLEAR }, { x: 8, y: 2, state: FIELD_STATE.CLEAR }
            ]))
            expect(ships[2].fields).toEqual(expect.arrayContaining([
                { x: 4, y: 7, state: FIELD_STATE.CLEAR }, { x: 5, y: 7, state: FIELD_STATE.CLEAR }, { x: 5, y: 7, state: FIELD_STATE.CLEAR }
            ]))
            expect(ships[3].fields).toEqual(expect.arrayContaining([
                { x: 1, y: 9, state: FIELD_STATE.CLEAR }, { x: 2, y: 9, state: FIELD_STATE.CLEAR }
            ]))
            expect(ships[4].fields).toEqual(expect.arrayContaining([
                { x: 3, y: 4, state: FIELD_STATE.CLEAR }, { x: 3, y: 5, state: FIELD_STATE.CLEAR }
            ]))
            expect(ships[5].fields).toEqual(expect.arrayContaining([
                { x: 6, y: 3, state: FIELD_STATE.CLEAR }, { x: 6, y: 2, state: FIELD_STATE.CLEAR }
            ]))
            expect(ships[6].fields).toEqual(expect.arrayContaining([
                { x: 6, y: 9, state: FIELD_STATE.CLEAR }
            ]))
            expect(ships[7].fields).toEqual(expect.arrayContaining([
                { x: 1, y: 7, state: FIELD_STATE.CLEAR }
            ]))
            expect(ships[8].fields).toEqual(expect.arrayContaining([
                { x: 1, y: 5, state: FIELD_STATE.CLEAR }
            ]))
            expect(ships[9].fields).toEqual(expect.arrayContaining([
                { x: 1, y: 2, state: FIELD_STATE.CLEAR }
            ]))
        })

        it('brute force tests for generateShips (1000 tries)', () => {
            let previousShips = null
            for (let i = 0; i <= 1000; i++) {
                const shipGenerator = new ShipGenerator(10)
                const ships = shipGenerator.generateShips()
                const result = checkShipsAreProperlyGenerated(ships)
                if (previousShips) {
                    const allFields = mergeFields(ships)
                    const previousAllFields = mergeFields(previousShips)
                    expect(allFields).not.toEqual(expect.arrayContaining(previousAllFields))
                }
                expect(result).toEqual(true)
            }
        })
    })
})