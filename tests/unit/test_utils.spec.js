import FieldGenerator from "@/services/FieldGenerator"
import { checkIsInRangeOfBoundaries } from "./utils"

describe("utils.js", () => {
    it.only("should return true when points are in range for  boundaries of board", () => {
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

    it.only("should return false when points are not in range for boundaries of board", () => {
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
})