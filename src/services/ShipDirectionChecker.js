import { Directions } from "@/constants"
import FieldGenerator from "./FieldGenerator"

class ShipDirectionChecker {
    constructor(boardSize, coveredFields = []) {
        this.boardSize = boardSize
        this.coveredFields = coveredFields
    }

    getAllowedDirections(cordinates, shipSize) {
		const up = { x: cordinates.x, y: cordinates.y - shipSize + 1 }
		const right = { x: cordinates.x + shipSize - 1, y: cordinates.y}
		const down = {x: cordinates.x, y: cordinates.y + shipSize - 1}
		const left = {x: cordinates.x - shipSize + 1, y: cordinates.y}

		const allowedDirections = []

		if (up.y > 0) {
			allowedDirections.push(Directions.UP)
		} 
		if (right.x < this.boardSize) {
			allowedDirections.push(Directions.RIGHT)
		}
		if (down.y <= this.boardSize) {
			allowedDirections.push(Directions.DOWN)
		}
		if (left.x >= 0) {
			allowedDirections.push(Directions.LEFT)
		}

		return allowedDirections
	}

    checkDirectionsForOtherShips(directions, shipSize, cordinates) {
		const allowedDirections = []
		// // increase size to avoid random ship's position to close to another
		shipSize++
		directions.forEach((direction) => {
			const fieldsToCheck = FieldGenerator[`getFieldsFor${direction}`](cordinates, shipSize)
			const allowed = fieldsToCheck.every(field => this.coveredFields.every(covered => field.x !== covered.x || field.y !== covered.y))
			if (allowed) {
				allowedDirections.push(Directions[direction])
			}
		})
		return allowedDirections
	}

    setCoveredField(coveredFields) {
        this.coveredFields = coveredFields
    }
}

export default ShipDirectionChecker