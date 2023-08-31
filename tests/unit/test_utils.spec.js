import FieldGenerator from "@/services/FieldGenerator"
import { checkIsInRangeOfBoundaries, getBorderCoordinates, mergeFields } from "./utils"
import Ship from "@/models/Ship"

describe("utils.js", () => {
    it("should return true when points are in range for  boundaries of board", () => {
        const boardSize = 10
        FieldGenerator.getFieldsForRIGHT({x: 0, y: 1}, boardSize).forEach(coordinates => {
            expect(checkIsInRangeOfBoundaries(coordinates, boardSize)).toBe(true)
        })
        FieldGenerator.getFieldsForDOWN({x: 9, y: 2}, boardSize - 1).forEach(coordinates => {
            expect(checkIsInRangeOfBoundaries(coordinates, boardSize)).toBe(true)
        })
        FieldGenerator.getFieldsForLEFT({x: 8, y: 10}, boardSize - 1).forEach(coordinates => {
            expect(checkIsInRangeOfBoundaries(coordinates, boardSize)).toBe(true)
        })
        FieldGenerator.getFieldsForUP({x: 0, y: 9}, boardSize - 1).forEach(coordinates => {
            expect(checkIsInRangeOfBoundaries(coordinates, boardSize)).toBe(true)
        })

        expect(checkIsInRangeOfBoundaries({x: 5, y: 5}, boardSize)).toBe(true)
    })

    it("should return false when points are not in range for boundaries of board", () => {
        const boardSize = 10
        FieldGenerator.getFieldsForRIGHT({x: 0, y: 0}, boardSize).forEach(coordinates => {
            expect(checkIsInRangeOfBoundaries(coordinates, boardSize)).toBe(false)
        })
        FieldGenerator.getFieldsForDOWN({x: 10, y: 1}, boardSize - 1).forEach(coordinates => {
            expect(checkIsInRangeOfBoundaries(coordinates, boardSize)).toBe(false)
        })
        FieldGenerator.getFieldsForLEFT({x: 9, y: 11}, boardSize - 1).forEach(coordinates => {
            expect(checkIsInRangeOfBoundaries(coordinates, boardSize)).toBe(false)
        })
        FieldGenerator.getFieldsForUP({x: -1, y: 10}, boardSize - 1).forEach(coordinates => {
            expect(checkIsInRangeOfBoundaries(coordinates, boardSize)).toBe(false)
        })
    })
    
    it("should return all fields in one array from all ships", () => {
        const ships = []
        ships.push(new Ship([{ x: 8, y: 9 }, { x: 8, y: 8 }, { x: 8, y: 7 }, { x: 8, y: 6 }]))
        ships.push(new Ship([{ x: 8, y: 4 }, { x: 8, y: 3 }, { x: 8, y: 2 }]))
        ships.push(new Ship([{ x: 4, y: 7 }, { x: 5, y: 7 }, { x: 5, y: 7 }]))
        ships.push(new Ship([{ x: 1, y: 9 }, { x: 2, y: 9 }]))
        ships.push(new Ship([{ x: 3, y: 4 }, { x: 3, y: 5 }]))
        ships.push(new Ship([{ x: 6, y: 3 }, { x: 6, y: 2 }]))
        ships.push(new Ship([{ x: 6, y: 9 }]))
        ships.push(new Ship([{ x: 1, y: 7 }]))
        ships.push(new Ship([{ x: 1, y: 5 }]))
        ships.push(new Ship([{ x: 1, y: 2 }]))

        const fields = mergeFields(ships)

        expect(fields).toEqual(expect.arrayContaining([
            { x: 8, y: 9 }, { x: 8, y: 8 }, { x: 8, y: 7 }, { x: 8, y: 6 },
            { x: 8, y: 4 }, { x: 8, y: 3 }, { x: 8, y: 2 },
            { x: 4, y: 7 }, { x: 5, y: 7 }, { x: 5, y: 7 },
            { x: 1, y: 9 }, { x: 2, y: 9 },
            { x: 3, y: 4 }, { x: 3, y: 5 },
            { x: 6, y: 3 }, { x: 6, y: 2 },
            { x: 6, y: 9 },
            { x: 1, y: 7 },
            { x: 1, y: 5 },
            { x: 1, y: 2 },
        ]))
    })

    it("should return proper borderPoints for: [ {x: 6, y: 2} ]", () => {
        const fields  = [ {x: 6, y: 2} ]
        const borderPoints = getBorderCoordinates(fields)
        expect(borderPoints).toEqual(expect.arrayContaining([
            {x: 5, y: 1}, {x: 6, y: 1}, {x: 7, y: 1}, 
            {x: 5, y: 2}, {x: 7, y: 2},
            {x: 5, y: 3}, {x: 6, y: 3}, {x: 7, y: 3}
        ]))
    })
    
    it("should return proper borderPoints for: [ {x: 6, y: 2}, {x: 6, y: 3} ]", () => {
        const fields  = [ {x: 6, y: 2}, {x: 6, y: 3} ]
        const borderPoints = getBorderCoordinates(fields)
        expect(borderPoints).toEqual(expect.arrayContaining([
            {x: 5, y: 1}, {x: 6, y: 1}, {x: 7, y: 1}, 
            {x: 5, y: 2}, {x: 7, y: 2},
            {x: 5, y: 3}, {x: 7, y: 3},
            {x: 5, y: 4}, {x: 6, y: 4}, {x: 7, y: 4},
        ]))
    })
    
    it("should return proper borderPoints for: [ {x: 0, y: 1}, {x: 0, y: 2}, {x: 0, y: 3}, {x: 0, y: 4}, {x: 0, y: 5} ]", () => {
        const fields  = [ {x: 0, y: 1}, {x: 0, y: 2}, {x: 0, y: 3}, {x: 0, y: 4}, {x: 0, y: 5} ]
        const borderPoints = getBorderCoordinates(fields)
        expect(borderPoints).toEqual(expect.arrayContaining([
            {x: -1, y: 0}, {x: 0, y: 0}, {x: 1, y: 0},
            {x: -1, y: 1}, {x: 1, y: 1},
            {x: -1, y: 2}, {x: 1, y: 2},
            {x: -1, y: 3}, {x: 1, y: 3},
            {x: -1, y: 4}, {x: 1, y: 4},
            {x: -1, y: 5}, {x: 1, y: 5},
            {x: -1, y: 6}, {x: 0, y: 6}, {x: 1, y: 6}
        ]))
    })

    it("should return proper borderPoints for: [ {x: 0, y: 10}, {x: 1, y: 10}, {x: 2, y: 10}, {x: 3, y: 10}, {x: 4, y: 10}, {x: 5, y: 10} ]", () => {
        const fields  = [ {x: 0, y: 10}, {x: 1, y: 10}, {x: 2, y: 10}, {x: 3, y: 10}, {x: 4, y: 10}, {x: 5, y: 10} ]
        const borderPoints = getBorderCoordinates(fields)
        expect(borderPoints).toEqual(expect.arrayContaining([
            {x: -1, y: 9}, {x: 0, y: 9}, {x: 1, y: 9}, {x: 2, y: 9}, {x: 3, y: 9}, {x: 4, y: 9}, {x: 5, y: 9}, {x: 6, y: 9},
            {x: -1, y: 10}, {x: 6, y: 10},
            {x: -1, y: 11}, {x: 0, y: 11}, {x: 1, y: 11}, {x: 2, y: 11}, {x: 3, y: 11}, {x: 4, y: 11}, {x: 5, y: 11}, {x: 6, y: 11}
        ]))
    })
})