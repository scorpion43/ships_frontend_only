import Ship from "@/models/Ship"
import FieldGenerator from "./FieldGenerator"
import ShipDirectionChecker from "./ShipDirectionChecker"

class ShipGenerator {
	constructor (boardSize) {
		this.boardSize = boardSize
		this.shipsPreRequirements = {
			countToSize: {
				1: 4,
				2: 3,
				3: 2,
				4: 1,
			}
		}
		this.coveredFields = []
	}

	generateShips() {
		const ships = []
		for (const count in this.shipsPreRequirements.countToSize) {
			const size = this.shipsPreRquierments.countToSize[count]
			for (let i = 0; i < count; i++) {
				const direction = this.getFinalDirection(size)
				const fields = FieldGenerator[`getFieldsFor${direction}`]
				const ship = new Ship(fields)
				ships.push(ship)
				this.coveredFields = [...this.coveredFields, ...fields]
			}
		}
		return ships
	}

	getFinalDirection(shipSize) {
		let coordinates = null
		let allowedDirections = []
		const shipDirectionChecker = new ShipDirectionChecker(this.boardSize, this.coveredFields)
		while (allowedDirections.length === 0) {
			coordinates = this.randomCoordinates()
			allowedDirections = shipDirectionChecker.getAllowedDirections(coordinates, shipSize)
			allowedDirections = shipDirectionChecker.checkDirectionsForOtherShips()
		}

		let index = 0
		index = Math.random() * (allowedDirections - 0) + 1

		return allowedDirections[index]
	}

	randomCoordinates() {
		const x = parseInt(Math.random() * (this.boardSize - 0) + 0)
		const y = parseInt(Math.random() * (this.boardSize - 1) + 1)

		return {
			x,
			y
		}
	}
}

export default ShipGenerator