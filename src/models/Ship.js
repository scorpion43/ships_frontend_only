import { FIELD_STATE } from "@/constants"

class Ship {
    constructor(fields) {
        this.fields = []
        fields.forEach((point) => {
            this.fields.push({
                x: point.x,
                y: point.y,
                state: FIELD_STATE.CLEAR
            })
        })
        this.hitFields = []
    }

    isDead () {
        return this.fields.length === this.hitFields.length
    }

    isShotHitMe (point) {
        if (this.isDead()) {
            return false
        }
        const hitSameFieldAgain = this.hitFields.some(sunkPoint => sunkPoint.x === point.x && sunkPoint.y === point.y)
        if (hitSameFieldAgain) {
            return false
        }
        const isHitMe =  this.fields.some(field => field.x === point.x && field.y === point.y)
        if (isHitMe) {
            this.hitFields.push(point)
        }
        return isHitMe
    }
    
    fieldsWithoutState() {
        return this.fields.map(field => {
            return {x: field.x, y: field.y}
        })
    }
}

export default Ship