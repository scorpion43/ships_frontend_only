class FieldGenerator {
    static getFieldsForUP(start, size) {
        const fields = []
        for (let y = start.y; y  > start.y - size; y--) {
            const field = {
                x: start.x,
                y: y
            }
            fields.push(field)
        }
        return fields
    }

    static getFieldsForRIGHT(start, size) {
        const fields = []
        for (let x = start.x; x < start.x + size; x++) {
            const field = {
                x: x,
                y: start.y
            }
            fields.push(field)
        }
        return fields
    }

    static getFieldsForDOWN(start, size) {
        const fields = []
        for (let y = start.y; y < start.y + size; y++) {
            const field = {
                x: start.x,
                y: y
            }
            fields.push(field)
        }
        return fields
    }

    static getFieldsForLEFT(start, size) {
        const fields = []
        for (let x = start.x; x > start.x - size; x--) {
            const field = {
                x: x,
                y: start.y
            }
            fields.push(field)
        }
        return fields
    }
}

export default FieldGenerator
