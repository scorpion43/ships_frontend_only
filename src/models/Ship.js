class Ship {
    constructor(fields) {
        this.fields = fields
        this.hitFields = []
    }

    isDead () {
        return this.fields.length === this.hitFields.length
    } 
}

export default Ship