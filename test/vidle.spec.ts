import { createLocalVue, mount } from '@vue/test-utils'
import * as sinon from '@sinonjs/fake-timers'
import Vidle from '../src/components/vidle'

const localVue = createLocalVue()

let clock: sinon.InstalledClock

const advanceClock = async (ms: number) => clock.tickAsync(ms)

beforeAll(() => {
  clock = sinon.install()
})

beforeEach(() => {
  clock.reset()
})

afterAll(() => {
  clock.uninstall()
})

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
    const component = wrapper.vm
    await advanceClock(1000)
    expect(component.$data.display).toBe('10:59')
  })

  test('Test unmount', async () => {
    const wrapper = mount(Vidle, {
      localVue,
    })
    const component = wrapper.vm
    await advanceClock(1000)
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
    const component = wrapper.vm
    // wait until display will be shown
    await advanceClock(6000)
    // 60 second minus 6 seconds
    expect(component.$data.display).toBe('00:54')
  })
})

describe('Test countdown', () => {
  test('Basic countdown with idle', async () => {
    const idleMock = jest.fn()
    const wrapper = mount(Vidle, {
      // important to test mousemove
      localVue,
      propsData: {
        // set duration for 60 seconds
        duration: 60,
      },
      listeners: {
        idle: idleMock,
      },
    })
    const component = wrapper.vm
    component.setDisplay()
    await advanceClock(60000)
    expect(component.$data.display).toBe('00:00')
    await advanceClock(5000)
    expect(component.$data.display).toBe('00:00')
    expect(idleMock).toHaveBeenCalled()
    expect(wrapper.emitted().idle).toBeTruthy()
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
    const component = wrapper.vm
    await advanceClock(60000)
    expect(component.$data.display).toBe('00:00')
    await advanceClock(500)
    expect(component.$data.diff).toBe(0)
    await advanceClock(500)
    expect(component.$data.display).toBe('01:00')
    await advanceClock(5000)
    expect(component.$data.display).toBe('00:55')
    expect(wrapper.emitted().idle).toBeTruthy()
  })
})

describe('Test reminders', () => {
  test('Basic reminder', async () => {
    const spyUpdate = jest.fn()
    const wrapper = mount(Vidle, {
      localVue,
      propsData: {
        // set duration for 60 seconds
        duration: 60,
        // first reminder, when 50 second last
        reminders: [49, 50],
      },
      listeners: {
        remind: spyUpdate,
      },
    })
    await advanceClock(9000)
    expect(spyUpdate).toHaveBeenCalledTimes(0)
    await advanceClock(1000)
    expect(spyUpdate).toHaveBeenCalledTimes(1)
    await advanceClock(1000)
    expect(spyUpdate).toHaveBeenCalledTimes(2)
    expect(wrapper.emitted().remind).toBeTruthy()
  })
})

describe('Test events', () => {
  test('Mousemove', async () => {
    const wrapper = mount(Vidle, {
      // important to test mousemove
      attachTo: document.body,
      localVue,
      propsData: {
        // set duration for 60 seconds
        duration: 60,
      },
    })
    const component = wrapper.vm
    await advanceClock(9000)
    expect(component.$data.display).toBe('00:51')
    await wrapper.trigger('mousemove')
    component.$nextTick
    component.setDisplay()
    // after mousemove display should be resetted
    expect(component.$data.display).toBe('01:00')
    expect(wrapper.emitted().refresh).toBeTruthy()
  })

  test('Keydown', async () => {
    const wrapper = mount(Vidle, {
      // important to test mousemove
      attachTo: document.body,
      localVue,
      propsData: {
        // set duration for 60 seconds
        duration: 60,
        events: ['keydown'],
      },
    })
    const component = wrapper.vm
    await advanceClock(1000)
    component.$nextTick
    await wrapper.trigger('keydown', {
      key: 'Escape',
    })
    component.setDisplay()
    const keypressEvent = wrapper.emitted().refresh
    expect(keypressEvent).toBeTruthy()
    if (keypressEvent) {
      expect(keypressEvent[0]).toEqual([
        {
          type: 'keydown',
          key: 'Escape',
        },
      ])
    }
  })
})
