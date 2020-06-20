import { createLocalVue, mount } from '@vue/test-utils'
import { advanceBy, clear } from 'jest-date-mock'
import Vidle from '../src/components/vidle'

const localVue = createLocalVue()

jest.useFakeTimers()

describe('Basic vidle', () => {
  test('Is a Vue instance', () => {
    const wrapper = mount(Vidle, {
      localVue,
    })
    expect(wrapper.exists()).toBeTruthy()
  })

  test('Test mounted', async () => {
    const wrapper = mount(Vidle, {
      localVue,
      propsData: {
        duration: 660,
      },
    })
    const component: any = wrapper.vm
    jest.advanceTimersByTime(1000)
    await wrapper.vm.$nextTick
    expect(component.$data.display).toBe('11:00')
  })

  test('Test unmount', () => {
    const wrapper = mount(Vidle, {
      localVue,
    })
    const component: any = wrapper.vm
    jest.advanceTimersByTime(1000)
    component.$nextTick
    // should call onBeforeUnmount() then
    wrapper.destroy()
  })

  test('Test time', async () => {
    const wrapper = mount(Vidle, {
      localVue,
      propsData: {
        // set duration for 60 seconds
        duration: 60,
      },
    })
    const component: any = wrapper.vm
    // wait until display will be shown
    jest.advanceTimersByTime(1000)
    await component.$nextTick
    advanceBy(6000)
    component.setDisplay()
    // 60 second minus 6 seconds
    expect(component.$data.display).toBe('00:54')

    clear()
  })

  test('Test idle', async () => {
    const wrapper = mount(Vidle, {
      localVue,
      propsData: {
        // set duration for 60 seconds
        duration: 60,
      },
    })
    const component: any = wrapper.vm
    jest.advanceTimersByTime(1000)
    await component.$nextTick
    advanceBy(60000)
    component.setDisplay()
    jest.runTimersToTime(60000)
    await component.$nextTick
    expect(component.$data.display).toBe('00:00')
    advanceBy(5000)
    component.setDisplay()
    expect(component.$data.display).toBe('00:00')
    expect(wrapper.emitted().idle).toBeTruthy()

    clear()
  })
})

describe('Test countdown', () => {
  test('Basic countdown', async () => {
    const wrapper = mount(Vidle, {
      // important to test mousemove
      localVue,
      propsData: {
        // set duration for 60 seconds
        duration: 60,
      },
    })
    const component: any = wrapper.vm
    jest.advanceTimersByTime(1000)
    await component.$nextTick
    advanceBy(60000)
    component.setDisplay()
    jest.runTimersToTime(60000)
    await component.$nextTick
    expect(component.$data.display).toBe('00:00')
    advanceBy(5000)
    component.setDisplay()
    expect(component.$data.display).toBe('00:00')
    expect(wrapper.emitted().idle).toBeTruthy()

    clear()
  })

  test('Countdown with loop', async () => {
    const wrapper = mount(Vidle, {
      // important to test mousemove
      localVue,
      propsData: {
        // set duration for 60 seconds
        duration: 60,
        loop: true,
      },
    })
    const component: any = wrapper.vm
    jest.advanceTimersByTime(1000)
    await component.$nextTick
    advanceBy(60000)
    component.setDisplay()
    jest.runTimersToTime(60000)
    await component.$nextTick
    expect(component.$data.display).toBe('01:01')
    advanceBy(6000)
    component.setDisplay()
    expect(component.$data.display).toBe('00:55')
    expect(wrapper.emitted().idle).toBeTruthy()

    clear()
  })
})

describe('Test reminders', () => {
  test('Basic reminder', async () => {
    const wrapper = mount(Vidle, {
      localVue,
      propsData: {
        // set duration for 60 seconds
        duration: 60,
        // first reminder, when 50 second last
        reminders: [49, 50],
      },
    })
    const component: any = wrapper.vm
    const spyUpdate = jest.spyOn(component, 'remind')
    jest.advanceTimersByTime(1000)
    await component.$nextTick
    advanceBy(9000)
    component.setDisplay()
    expect(spyUpdate).toHaveBeenCalledTimes(0)
    advanceBy(1000)
    component.setDisplay()
    expect(spyUpdate).toHaveBeenCalledTimes(1)
    advanceBy(1000)
    component.setDisplay()
    expect(spyUpdate).toHaveBeenCalledTimes(2)
    expect(wrapper.emitted().remind).toBeTruthy()

    clear()
  })
})

describe('Test events', () => {
  test('Mousemove', async () => {
    const wrapper = mount(Vidle, {
      // important to test mousemove
      attachToDocument: true,
      localVue,
      propsData: {
        // set duration for 60 seconds
        duration: 60,
      },
    })
    const component: any = wrapper.vm
    jest.advanceTimersByTime(1000)
    await component.$nextTick
    advanceBy(9000)
    component.setDisplay()
    expect(component.$data.display).toBe('00:51')
    wrapper.trigger('mousemove')
    component.setDisplay()
    // after mousemove display should be resetted
    expect(component.$data.display).toBe('01:00')

    clear()
  })
})
