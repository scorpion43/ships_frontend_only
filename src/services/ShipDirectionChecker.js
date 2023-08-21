import { Directions } from "@/constants"

class ShipDirectionChecker {
    constructor(boardSize) {
        this.boardSize = boardSize
        this.coveredFields = []
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
		shipSize++
		directions.forEach((direction) => {
			if (direction === Directions.UP) {
				let allowed = true
				for (let y = cordinates.y; y  > cordinates.y - shipSize; y--) {
					if (this.coveredFields.some(c => c.y === y && c.x === cordinates.x)) {
						allowed = false
						break
					}
				}
				if (allowed) {
					allowedDirections.push(Directions.UP)
				}
			}
			else if (direction === Directions.RIGHT) {
				let allowed = true
				for (let x = cordinates.x; x < cordinates.x + shipSize; x++) {
					if (this.coveredFields.some(c => c.y === cordinates.y && c.x === x)) {
						allowed = false
						break
					}
				}
				if (allowed) {
					allowedDirections.push(Directions.RIGHT)
				}
			}
			else if (direction === Directions.DOWN) {
				let allowed = true
				for (let y = cordinates.y; y < cordinates.y + shipSize; y++) {
					if (this.coveredFields.some(c => c.y === y && c.x === cordinates.x)) {
						allowed = false
						break
					}
				}
				if (allowed) {
					allowedDirections.push(Directions.DOWN)
				}
			}
			else if (direction === Directions.LEFT) {
				let allowed = true
				for (let x = cordinates.x; x > cordinates.x - shipSize; x--) {
					if (this.coveredFields.some(c => c.x === x && c.y === cordinates.y)) {
						allowed = false
						break
					}
				}
				if (allowed) {
					allowedDirections.push(Directions.LEFT)	
				}
			}
		})
		return allowedDirections
	}

    setCoveredField(coveredFields) {
        this.coveredFields = coveredFields
    }
}

export default ShipDirectionChecker