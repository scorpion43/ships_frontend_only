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
    }

    isDead () {
        return this.fields.every(field => field.state !== FIELD_STATE.CLEAR)
    }

    isShotHitMe (point) {
        if (this.isDead()) {
            return false
        }
        const hitSameFieldAgain = this.fields.some(sunkPoint => sunkPoint.x === point.x && sunkPoint.y === point.y && sunkPoint.state === FIELD_STATE.HIT)
        if (hitSameFieldAgain) {
            return false
        }
        let isHitMe = false
        const field = this.fields.find(field => field.x === point.x && field.y === point.y)
        if (field) {
            isHitMe = true
            field.state = FIELD_STATE.HIT
        }

        return isHitMe
    }

    updateFieldsState () {
        if (this.fields.every(field => field.state === FIELD_STATE.HIT)) {
            this.fields.forEach(field => field.state = FIELD_STATE.SUNK)
        }
    }

    
}

export default Ship