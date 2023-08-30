import Ship from "@/models/Ship"
import FieldGenerator from "./FieldGenerator"
import ShipDirectionChecker from "./ShipDirectionChecker"

class ShipGenerator {
	constructor (boardSize, coveredFields = []) {
		this.boardSize = boardSize
		this.shipsPreRequirements = {
			countToSize: {
				1: 4,
				2: 3,
				3: 2,
				4: 1,
			}
		}
		this.coveredFields = coveredFields
	}

	generateShips() {
		const ships = []
		for (const count in this.shipsPreRequirements.countToSize) {
			const size = this.shipsPreRequirements.countToSize[count]
			for (let i = 0; i < count; i++) {
				const { direction, coordinates } = this.getDirectionWithCoordinates(size)
				const fields = FieldGenerator[`getFieldsFor${direction}`](coordinates, size)
				const ship = new Ship(fields)
				ships.push(ship)
				this.coveredFields = [...this.coveredFields, ...fields]
			}
		}
		return ships
	}

	getDirectionWithCoordinates(shipSize) {
		let allowedDirections = []
		const shipDirectionChecker = new ShipDirectionChecker(this.boardSize, this.coveredFields)
		let coordinates = {}
		while (allowedDirections.length === 0) {
			coordinates = this.randomCoordinates()
			allowedDirections = shipDirectionChecker.getAllowedDirections(coordinates, shipSize)
			allowedDirections = shipDirectionChecker.checkDirectionsForOtherShips(allowedDirections, shipSize, coordinates)
		}

		let index = 0
		if (allowedDirections.length > 1) {
			index = Math.floor(Math.random() * allowedDirections.length)
		}

		return {
			direction: allowedDirections[index],
			coordinates: coordinates
		}
	}

	randomCoordinates() {
		const x =  Math.floor(Math.random() * this.boardSize)
		const y =  Math.floor(Math.random() * (this.boardSize) + 1)

		return {
			x,
			y
		}
	}
}

export default ShipGenerator