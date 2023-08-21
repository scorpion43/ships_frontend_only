class FieldGenerator {
    static getFieldsForUp(start, size) {
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

    static getFieldsForRight(start, size) {
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

    static getFieldsForDown(start, size) {
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

    static getFieldsForLeft(start, size) {
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
