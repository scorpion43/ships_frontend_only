import { Directions } from "@/constants"

class ShipGenerator {
	constructor (boardSize) {
		this.boardSize = boardSize
		this.ships = []
		this.shipsPreRquirments = {
			countBySize: {
				1: 4,
				2: 3,
				3: 2,
				4: 1,
			}
		}
		this.coveredFields = []
	}

	generateShips() {
		for (const count in this.shipsPreRquirments.countBySize) {
			const size = this.shipsPreRquirments.countBySize[count]
			for (let i = 0; i < count; i++) {
				const direction = this.getFinalDirection(size)
				// const fieldsForShip = this.prepareFieldsForShipByDireciton(direction)
			}
		}
	}

	getFinalDirection(shipSize) {
		let cordinates = null
		let allowedDirections = []
		while (allowedDirections.length > 0) {
			cordinates = this.randomCordinates()
			allowedDirections = this.getAllowedDirections(cordinates, shipSize)
		}

		let index = 0
		if (allowedDirections.length > 0) {
			index = Math.random() * (allowedDirections - 0) + 1
		}

		const direction = allowedDirections[index]
	}

	// prepareFieldsForShipByDireciton(direction, cordinates) {
	// 	const fields = []
	// 	if (direction.UP) {
			
	// 	}
	// }

	randomCordinates() {
		const x = Math.random() * (this.boardSize - 0) + 0
		const y = Math.random() * (this.boardSize - 1) + 1

		return {
			x, 
			y
		}
	}
}

export default ShipGenerator