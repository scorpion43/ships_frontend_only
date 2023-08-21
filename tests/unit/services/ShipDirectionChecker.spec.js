import ShipDirectionChecker from "@/services/ShipDirectionChecker"
import { Directions } from "@/constants"

const checkDirections = (directions, expectedDirections) => {
    expect(directions.length).toEqual(expectedDirections.length)
    expectedDirections.forEach(item => {
        expect(directions.includes(item)).toEqual(true)
    })
} 

describe("ShipDirectionChecker", () => {
    describe("allowedDirections", () => {
        let directionChecker = null
        beforeEach(() => {
            directionChecker = new ShipDirectionChecker(7);
        })

        it("should contain right, and down for {x: 0, y: 1} and ship size 4", () => {
            const directions = directionChecker.getAllowedDirections({x: 0, y: 1}, 4)
            checkDirections(directions, [ Directions.RIGHT, Directions.DOWN ])
        })

        it("should contain right, down, left for {x: 3, y: 1} and ship size 4", () => {
            const directions = directionChecker.getAllowedDirections({x: 3, y: 1}, 4)
            checkDirections(directions, [Directions.LEFT, Directions.DOWN, Directions.RIGHT])
        })

        it("should contain left, down for {x: 6, y: 1} and ship size 4", () => {
            const directions = directionChecker.getAllowedDirections({x: 6, y: 1}, 4)
            checkDirections(directions, [Directions.LEFT, Directions.DOWN ])
        })

        it("should contain up, right, down for {x: 6, y: 1} and ship size 4", () => {
            const directions = directionChecker.getAllowedDirections({x: 0, y: 4}, 4)
            checkDirections(directions, [Directions.UP, Directions.RIGHT, Directions.DOWN ])
        })
        
        it("should contain up, right, down, left for {x: 3, y: 4} and ship size 4", () => {
            const directions = directionChecker.getAllowedDirections({x: 3, y: 4}, 4)
            checkDirections(directions, [Directions.UP, Directions.RIGHT, Directions.DOWN, Directions.LEFT ])
        })

        it("should contain up, down, left for {x: 6, y: 4} and ship size 4", () => {
            const directions = directionChecker.getAllowedDirections({x: 6, y: 4}, 4)
            checkDirections(directions, [Directions.UP, Directions.DOWN, Directions.LEFT ])
        })

        it("should contain up, right for {x: 0, y: 7} and ship size 4", () => {
            const directions = directionChecker.getAllowedDirections({x: 0, y: 7}, 4)
            checkDirections(directions, [Directions.UP, Directions.RIGHT ])
        })

        it("should contain up, right, left for {x: 3, y: 7} and ship size 4", () => {
            const directions = directionChecker.getAllowedDirections({x: 3, y: 7}, 4)
            checkDirections(directions, [Directions.UP, Directions.RIGHT, Directions.LEFT ])
        })

        it("should contain up, left for {x: 6, y: 7} and ship size 4", () => {
            const directions = directionChecker.getAllowedDirections({x: 6, y: 7}, 4)
            checkDirections(directions, [Directions.UP, Directions.LEFT ])
        })

        //test for too big shipSize 5

        it("should contain right, and down for {x: 0, y: 1} and ship size 5", () => {
            const directions = directionChecker.getAllowedDirections({x: 0, y: 1}, 5)
            checkDirections(directions, [ Directions.RIGHT, Directions.DOWN ])
        })

        it("should contain right, down, left for {x: 3, y: 1} and ship size 5", () => {
            const directions = directionChecker.getAllowedDirections({x: 3, y: 1}, 5)
            checkDirections(directions, [ Directions.DOWN ])
        })

        it("should contain left, down for {x: 6, y: 1} and ship size 5", () => {
            const directions = directionChecker.getAllowedDirections({x: 6, y: 1}, 5)
            checkDirections(directions, [Directions.LEFT, Directions.DOWN ])
        })

        it("should contain up, right, down for {x: 6, y: 1} and ship size 5", () => {
            const directions = directionChecker.getAllowedDirections({x: 0, y: 4}, 5)
            checkDirections(directions, [Directions.RIGHT])
        })
        
        it("should contain up, right, down, left for {x: 3, y: 4} and ship size 5", () => {
            const directions = directionChecker.getAllowedDirections({x: 3, y: 4}, 5)
            checkDirections(directions, [ ])
        })

        it("should contain up, down, left for {x: 6, y: 4} and ship size 5", () => {
            const directions = directionChecker.getAllowedDirections({x: 6, y: 4}, 5)
            checkDirections(directions, [ Directions.LEFT ])
        })

        it("should contain up, right for {x: 0, y: 7} and ship size 5", () => {
            const directions = directionChecker.getAllowedDirections({x: 0, y: 7}, 5)
            checkDirections(directions, [Directions.UP, Directions.RIGHT ])
        })

        it("should contain up, right, left for {x: 3, y: 7} and ship size 5", () => {
            const directions = directionChecker.getAllowedDirections({x: 3, y: 7}, 5)
            checkDirections(directions, [Directions.UP ])
        })

        it("should contain up, left for {x: 6, y: 7} and ship size 5", () => {
            const directions = directionChecker.getAllowedDirections({x: 6, y: 7}, 5)
            checkDirections(directions, [Directions.UP, Directions.LEFT ])
        })

        //test for too big shipSize 7

        it("should contain right, and down for {x: 0, y: 1} and ship size 7", () => {
            const directions = directionChecker.getAllowedDirections({x: 0, y: 1}, 7)
            checkDirections(directions, [ Directions.RIGHT, Directions.DOWN ])
        })

        it("should contain right, down, left for {x: 3, y: 1} and ship size 7", () => {
            const directions = directionChecker.getAllowedDirections({x: 3, y: 1}, 7)
            checkDirections(directions, [ Directions.DOWN ])
        })

        it("should contain left, down for {x: 6, y: 1} and ship size 7", () => {
            const directions = directionChecker.getAllowedDirections({x: 6, y: 1}, 7)
            checkDirections(directions, [Directions.LEFT, Directions.DOWN ])
        })

        it("should contain up, right, down for {x: 6, y: 1} and ship size 7", () => {
            const directions = directionChecker.getAllowedDirections({x: 0, y: 4}, 7)
            checkDirections(directions, [Directions.RIGHT])
        })
        
        it("should contain up, right, down, left for {x: 3, y: 4} and ship size 7", () => {
            const directions = directionChecker.getAllowedDirections({x: 3, y: 4}, 7)
            checkDirections(directions, [ ])
        })

        it("should contain up, down, left for {x: 6, y: 4} and ship size 7", () => {
            const directions = directionChecker.getAllowedDirections({x: 6, y: 4}, 7)
            checkDirections(directions, [ Directions.LEFT ])
        })

        it("should contain up, right for {x: 0, y: 7} and ship size 7", () => {
            const directions = directionChecker.getAllowedDirections({x: 0, y: 7}, 7)
            checkDirections(directions, [Directions.UP, Directions.RIGHT ])
        })

        it("should contain up, right, left for {x: 3, y: 7} and ship size 7", () => {
            const directions = directionChecker.getAllowedDirections({x: 3, y: 7}, 7)
            checkDirections(directions, [Directions.UP ])
        })

        it("should contain up, left for {x: 6, y: 7} and ship size 7", () => {
            const directions = directionChecker.getAllowedDirections({x: 6, y: 7}, 7)
            checkDirections(directions, [Directions.UP, Directions.LEFT ])
        })

        //test for too big shipSize 8

        it("should contain right, and down for {x: 0, y: 1} and ship size 8", () => {
            const directions = directionChecker.getAllowedDirections({x: 0, y: 1}, 8)
            checkDirections(directions, [ ])
        })

        it("should contain right, down, left for {x: 3, y: 1} and ship size 8", () => {
            const directions = directionChecker.getAllowedDirections({x: 3, y: 1}, 8)
            checkDirections(directions, [ ])
        })

        it("should contain left, down for {x: 6, y: 1} and ship size 8", () => {
            const directions = directionChecker.getAllowedDirections({x: 6, y: 1}, 8)
            checkDirections(directions, [ ])
        })

        it("should contain up, right, down for {x: 6, y: 1} and ship size 8", () => {
            const directions = directionChecker.getAllowedDirections({x: 0, y: 4}, 8)
            checkDirections(directions, [ ])
        })
        
        it("should contain up, right, down, left for {x: 3, y: 4} and ship size 8", () => {
            const directions = directionChecker.getAllowedDirections({x: 3, y: 4}, 8)
            checkDirections(directions, [ ])
        })

        it("should contain up, down, left for {x: 6, y: 4} and ship size 8", () => {
            const directions = directionChecker.getAllowedDirections({x: 6, y: 4}, 8)
            checkDirections(directions, [ ])
        })

        it("should contain up, right for {x: 0, y: 7} and ship size 8", () => {
            const directions = directionChecker.getAllowedDirections({x: 0, y: 7}, 8)
            checkDirections(directions, [ ])
        })

        it("should contain up, right, left for {x: 3, y: 7} and ship size 8", () => {
            const directions = directionChecker.getAllowedDirections({x: 3, y: 7}, 8)
            checkDirections(directions, [ ])
        })

        it("should contain up, left for {x: 6, y: 7} and ship size 8", () => {
            const directions = directionChecker.getAllowedDirections({x: 6, y: 7}, 8)
            checkDirections(directions, [ ])
        })
    })
    describe("checkDirectionsForOtherShips", () => {
        let directionChecker = null
        beforeEach(() => {
            directionChecker = new ShipDirectionChecker(7)
        })

        it('should return no directions as allowed for ship 4size and {x: 3, y: 4}', () => {
            directionChecker.setCoveredField([{x: 0, y: 4}, {x: 3, y: 1}, {x: 6, y: 4}, {x: 3, y: 7}])
            const allowedDirections = directionChecker.checkDirectionsForOtherShips([Directions.UP, Directions.RIGHT, Directions.DOWN, Directions.LEFT], 4, {x: 3, y: 4})
            expect(allowedDirections.length).toEqual(0)
        })

        it('should return UP directions as allowed for ship 4size and {x: 3, y: 4}', () => {
            directionChecker.setCoveredField([{x: 0, y: 4}, {x: 6, y: 4}, {x: 3, y: 7}])
            const allowedDirections = directionChecker.checkDirectionsForOtherShips([Directions.UP, Directions.RIGHT, Directions.DOWN, Directions.LEFT], 4, {x: 3, y: 4})
            expect(allowedDirections.length).toEqual(1)
            expect(allowedDirections.includes(Directions.UP)).toEqual(true)
        })

        it('should return RIGHT directions as allowed for ship 4size and {x: 3, y: 4}', () => {
            directionChecker.setCoveredField([{x: 0, y: 4}, {x: 3, y: 1}, {x: 3, y: 7}])
            const allowedDirections = directionChecker.checkDirectionsForOtherShips([Directions.UP, Directions.RIGHT, Directions.DOWN, Directions.LEFT], 4, {x: 3, y: 4})
            expect(allowedDirections.length).toEqual(1)
            expect(allowedDirections.includes(Directions.RIGHT)).toEqual(true)
        })

        it('should return RIGHT directions as allowed for ship 4size and {x: 3, y: 4}', () => {
            directionChecker.setCoveredField([{x: 0, y: 4}, {x: 3, y: 1}, {x: 3, y: 7}])
            const allowedDirections = directionChecker.checkDirectionsForOtherShips([Directions.UP, Directions.RIGHT, Directions.DOWN, Directions.LEFT], 4, {x: 3, y: 4})
            expect(allowedDirections.length).toEqual(1)
            expect(allowedDirections.includes(Directions.RIGHT)).toEqual(true)
        })

        it('should return DOWN directions as allowed for ship 4size and {x: 3, y: 4}', () => {
            directionChecker.setCoveredField([{x: 0, y: 4}, {x: 3, y: 1}, {x: 6, y: 4}])
            const allowedDirections = directionChecker.checkDirectionsForOtherShips([Directions.UP, Directions.RIGHT, Directions.DOWN, Directions.LEFT], 4, {x: 3, y: 4})
            expect(allowedDirections.length).toEqual(1)
            expect(allowedDirections.includes(Directions.DOWN)).toEqual(true)
        })

        it('should return LEFT directions as allowed for ship 4size and {x: 3, y: 4}', () => {
            directionChecker.setCoveredField([{x: 3, y: 1}, {x: 6, y: 4}, {x: 3, y: 7}])
            const allowedDirections = directionChecker.checkDirectionsForOtherShips([Directions.UP, Directions.RIGHT, Directions.DOWN, Directions.LEFT], 4, {x: 3, y: 4})
            expect(allowedDirections.length).toEqual(1)
            expect(allowedDirections.includes(Directions.LEFT)).toEqual(true)
        })

        it('should return [] directions as allowed for ship 4size and {x: 0, y: 7}', () => {
            directionChecker.setCoveredField([{x: 3, y: 1}, {x: 6, y: 4}, {x: 3, y: 7}])
            const allowedDirections = directionChecker.checkDirectionsForOtherShips([Directions.UP, Directions.RIGHT, Directions.DOWN, Directions.LEFT], 4, {x: 3, y: 4})
            expect(allowedDirections.length).toEqual(1)
            expect(allowedDirections.includes(Directions.LEFT)).toEqual(true)
        })
    })
})