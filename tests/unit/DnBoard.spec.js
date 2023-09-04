import DnBoard from "@/components/DnBoard.vue"
import { mount } from "@vue/test-utils"
import sinon from 'sinon'
import  { FIELD_BLOCK_TIME } from '../../src/constants'

const iterateFields = async (wrapper, boardSize, func) => {
    for (let y = 1; y <= boardSize; y++) {
        for (let x = 1; x <= boardSize; x++) {
            const field = await wrapper.find(`.dn-board__row:nth-child(${y}) .dn-field:nth-child(${x})`)
            await func(field)
        }
    }
}

const testFieldsClasses = async (wrapper, boardSize, targetCounter) => {
    let counter = 0
    await iterateFields(wrapper, boardSize, async (field) => {
        const classes = field.classes()
        if (classes.includes('just-clicked')) {
            counter++
        }
    })
    expect(counter).toEqual(targetCounter)
}

describe("DnBoard", () => {
    it("should contain only one field with class just-clicked after click and 0 after block time", async () => {
        const wrapper = mount(DnBoard)
        const clock = sinon.useFakeTimers()
        const boardSize = 10;

        await iterateFields(wrapper, 10, async (field) => {
            await field.trigger('click')
            expect(field.classes()).toContain('just-clicked')
            await testFieldsClasses(wrapper, boardSize, 1)

            clock.tick(FIELD_BLOCK_TIME)
            await wrapper.vm.$nextTick()

            await testFieldsClasses(wrapper, boardSize, 0)
        })

    })
})