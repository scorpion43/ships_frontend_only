import DnField from "@/components/DnField"
import { mount } from "@vue/test-utils"
import sinon from 'sinon' 

describe('DnField', () => {
  it('should emit click with cordinate A1', async () => {
    const wrapper = mount(DnField, {
      propsData: {
        coordinates: {x: 0, y: 1}
      }
    })

    await wrapper.trigger('click')
    await wrapper.vm.$nextTick()

    expect(wrapper.emitted().clicked).toBeTruthy()
    expect(wrapper.emitted().clicked.length).toBe(1)
    expect(wrapper.emitted().clicked[0][0]).toEqual({x: 0, y: 1})
  })

  it('should has backgrond white before click, after click yellow and after 800ms white back', async () => {
    const wrapper = mount(DnField, {
      propsData: {
        coordinates: {x: 0, y: 1}
      }
    })

    const clock = sinon.useFakeTimers() 

    expect(wrapper.element).toMatchSnapshot()

    await wrapper.trigger('click')
    await wrapper.vm.$nextTick()

    expect(wrapper.element).toMatchSnapshot()

    clock.tick(800)
    await wrapper.vm.$nextTick()

    expect(wrapper.element).toMatchSnapshot()
  })
})