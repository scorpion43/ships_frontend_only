import Ship from "@/models/Ship"

describe("Ship", () => {
    it('should return proper value for isShotHitMe by field', () => {
        const ship = new Ship([{x: 0, y: 1}, {x: 0, y: 2}, {x: 0, y: 3}, {x: 0, y: 4}])
        let point = { x: 1, y: 1 }
        expect(ship.isShotHitMe(point)).toEqual(false)
        
        point = { x: 0, y: 1 }
        expect(ship.isShotHitMe(point)).toEqual(true)

        // same second time
        point = { x: 0, y: 1 }
        expect(ship.isShotHitMe(point)).toEqual(false)

        point = { x: 0, y: 2 }
        expect(ship.isShotHitMe(point)).toEqual(true)

        point = { x: 0, y: 3 }
        expect(ship.isShotHitMe(point)).toEqual(true)

        point = { x: 0, y: 4 }
        expect(ship.isShotHitMe(point)).toEqual(true)

        point = { x: 0, y: 4 }
        expect(ship.isShotHitMe(point)).toEqual(false)
    })
})