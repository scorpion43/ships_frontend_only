import FieldGenerator from "@/services/FieldGenerator";

describe("FieldGenerator", () => {
    it("should return [{ x:  0, y: 7 }, {x: 0, y: 6 }, {x: 0, y: 5}] for size 3 and start {x: 0, y: 7} (UP)", () => {
        const fields = FieldGenerator.getFieldsForUp({ x: 0, y: 7 }, 3)
        
        expect(fields).toEqual(expect.arrayContaining(
            [
                { x: 0, y: 7 },
                { x: 0, y: 6 },
                { x: 0, y: 5 }
            ]
        ))
    })

    it("should return [{ x:  0, y: 7 }] for size 1 and start {x: 0, y: 7} (UP)", () => {
        const fields = FieldGenerator.getFieldsForUp({ x: 0, y: 7 }, 1)
        
        expect(fields).toEqual(expect.arrayContaining(
            [
                { x: 0, y: 7 },
            ]
        ))
    })

    it("should return [{ x: 0, y: 1 }, {x: 1, y: 1 }, {x: 2, y: 1}] for size 3 and start {x: 0, y: 1} (RIGHT)", () => {
        const fields = FieldGenerator.getFieldsForRight({ x: 0, y: 1 }, 3)
        
        expect(fields).toEqual(expect.arrayContaining(
            [
                { x: 0, y: 1 },
                { x: 1, y: 1 },
                { x: 2, y: 1 }
            ]
        ))
    })

    it("should return [{ x: 0, y: 1 }] for size 1 and start {x: 0, y: 1} (RIGHT)", () => {
        const fields = FieldGenerator.getFieldsForRight({ x: 0, y: 1 }, 1)
        
        expect(fields).toEqual(expect.arrayContaining(
            [
                { x: 0, y: 1 }
            ]
        ))
    })

    it("should return [{ x: 0, y: 1 }, {x: 0, y: 2 }, {x: 0, y: 3}] for size 3 and start {x: 0, y: 1} (DOWN)", () => {
        const fields = FieldGenerator.getFieldsForDown({ x: 0, y: 1 }, 3)
        
        expect(fields).toEqual(expect.arrayContaining(
            [
                { x: 0, y: 1 },
                { x: 0, y: 2 },
                { x: 0, y: 3 }
            ]
        ))
    })

    it("should return [{ x: 0, y: 1 }] for size 1 and start {x: 0, y: 1} (DOWN)", () => {
        const fields = FieldGenerator.getFieldsForDown({ x: 0, y: 1 }, 1)
        
        expect(fields).toEqual(expect.arrayContaining(
            [
                { x: 0, y: 1 }
            ]
        ))
    })

    it("should return [{ x: 7, y: 1 }, {x: 6, y: 1 }, {x: 5, y: 1}] for size 3 and start {x: 7, y: 1} (LEFT)", () => {
        const fields = FieldGenerator.getFieldsForLeft({ x: 7, y: 1 }, 3)
        
        expect(fields).toEqual(expect.arrayContaining(
            [
                { x: 7, y: 1 },
                { x: 6, y: 1 },
                { x: 5, y: 1 }
            ]
        ))
    })

    it("should return [{ x: 7, y: 1 }] for size 1 and start {x: 7, y: 1} (LEFT)", () => {
        const fields = FieldGenerator.getFieldsForLeft({ x: 7, y: 1 }, 1)
        
        expect(fields).toEqual(expect.arrayContaining(
            [
                { x: 7, y: 1 }
            ]
        ))
    })
})