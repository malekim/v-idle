import { mount } from '@vue/test-utils'
import * as sinon from '@sinonjs/fake-timers'
import Vidle from '../src/components/vidle'

let clock: sinon.InstalledClock

const advanceClock = async (ms: number) => clock.tickAsync(ms)

const postMessageMock = jest.fn()
const callBackMock = jest.fn()
interface fn {
  (param: unknown): void
}
// listeners need to be defined here, because in the browser
// listeners are shared between tabs and windows
const listeners: fn[] = []

const BroadcastChannel = jest.fn().mockImplementation((name: string) => {
  return {
    name: name,
    postMessage: (message: unknown) => {
      postMessageMock(message)
      listeners.forEach((listener) => {
        listener({
          data: message,
        })
        callBackMock({
          data: message,
        })
      })
    },
    dispatchEvent: jest.fn(),
    close: jest.fn(),
    addEventListener: (type: string, callback: () => void) => {
      if (type === 'message') {
        listeners.push(callback)
      }
    },
    removeEventListener: jest.fn(),
    onmessage: jest.fn(),
    onmessageerror: jest.fn(),
  }
})

beforeAll(() => {
  clock = sinon.install()
  window.BroadcastChannel = BroadcastChannel
})

beforeEach(() => {
  clock.reset()
})

afterAll(() => {
  clock.uninstall()
  jest.restoreAllMocks()
})

describe('Basic vidle', () => {
  test('Is a Vue instance', () => {
    const wrapper = mount(Vidle)
    expect(wrapper.exists()).toBeTruthy()
  })

  test('Test mount', async () => {
    const wrapper = mount(Vidle, {
      propsData: {
        duration: 660,
      },
    })
    await advanceClock(1000)
    expect(wrapper.element.innerHTML).toBe('10:59')
  })

  test('Test unmount', async () => {
    const wrapper = mount(Vidle, {
      propsData: {
        duration: 660,
      },
    })
    await advanceClock(1000)
    expect(wrapper.element.innerHTML).toBe('10:59')
    wrapper.unmount()
  })

  test('Test time', async () => {
    const wrapper = mount(Vidle, {
      propsData: {
        // set duration for 60 seconds
        duration: 60,
      },
    })
    // wait until display will be shown
    await advanceClock(6000)
    // 60 second minus 6 seconds
    expect(wrapper.element.innerHTML).toBe('00:54')
  })
})

describe('Test countdown', () => {
  test('Basic countdown with idle', async () => {
    const wrapper = mount(Vidle, {
      // important to test mousemove
      propsData: {
        // set duration for 60 seconds
        duration: 60,
      },
    })
    await advanceClock(60000)
    expect(wrapper.element.innerHTML).toBe('00:00')
    await advanceClock(5000)
    expect(wrapper.element.innerHTML).toBe('00:00')
    expect(wrapper.emitted().idle).toBeTruthy()
  })

  test('Countdown with loop', async () => {
    const wrapper = mount(Vidle, {
      propsData: {
        // set duration for 60 seconds
        duration: 60,
        loop: true,
      },
    })
    await advanceClock(60000)
    expect(wrapper.element.innerHTML).toBe('00:00')
    await advanceClock(1000)
    expect(wrapper.element.innerHTML).toBe('01:00')
    await advanceClock(5000)
    expect(wrapper.element.innerHTML).toBe('00:55')
    expect(wrapper.emitted().idle).toBeTruthy()
  })
})

describe('Test reminders', () => {
  test('Basic reminder', async () => {
    const wrapper = mount(Vidle, {
      propsData: {
        // set duration for 60 seconds
        duration: 60,
        // first reminder, when 50 second last
        reminders: [49, 50],
      },
    })
    await advanceClock(9000)
    expect(wrapper.emitted().remind).toBeFalsy()
    await advanceClock(1000)
    expect(wrapper.emitted().remind).toHaveLength(1)
    await advanceClock(1000)
    expect(wrapper.emitted().remind).toHaveLength(2)
  })
})

describe('Test broadcast', () => {
  test('Broadcast message', async () => {
    const callback = (message: unknown) => {
      return message
    }
    const syncKey = 'sample-sync-key'
    const wrapper = mount(Vidle, {
      attachTo: document.body,
      propsData: {
        // set duration for 60 seconds
        duration: 60,
        syncKey: syncKey,
      },
    })
    wrapper.vm.$nextTick
    // simulate tab
    const broadcast = new window.BroadcastChannel(syncKey)
    broadcast.addEventListener('message', (message: unknown) => {
      callback(message)
    })
    const keydownEvent = {
      type: 'keydown',
      key: 'Escape',
    }
    broadcast.postMessage(keydownEvent)
    expect(postMessageMock).toHaveBeenCalledWith(keydownEvent)
    expect(callBackMock).toHaveBeenCalledWith({
      data: keydownEvent,
    })

    await advanceClock(9000)
    expect(wrapper.element.innerHTML).toBe('00:51')
    await wrapper.trigger('mousemove')

    const mousemoveEvent = {
      type: 'mousemove',
      key: undefined,
    }

    expect(postMessageMock).toHaveBeenCalledWith(mousemoveEvent)
    expect(callBackMock).toHaveBeenCalledWith({
      data: mousemoveEvent,
    })
  })

  test('Reset timer', async () => {
    const syncKey = 'sample-sync-key'
    const wrapper = mount(Vidle, {
      attachTo: document.body,
      propsData: {
        // set duration for 60 seconds
        duration: 60,
        syncKey: syncKey,
      },
    })
    wrapper.vm.$nextTick
    // simulate another tab
    const broadcast = new window.BroadcastChannel(syncKey)
    const keydownEvent = {
      type: 'keydown',
      key: 'Escape',
    }
    await advanceClock(9000)
    expect(wrapper.element.innerHTML).toBe('00:51')
    // simulate keydown in another tab
    broadcast.postMessage(keydownEvent)
    await advanceClock(1000)
    expect(wrapper.element.innerHTML).toBe('00:59')
  })
})

describe('Test events', () => {
  test('Mousemove', async () => {
    const wrapper = mount(Vidle, {
      attachTo: document.body,
      propsData: {
        // set duration for 60 seconds
        duration: 60,
      },
    })
    await advanceClock(9000)
    expect(wrapper.element.innerHTML).toBe('00:51')
    await wrapper.trigger('mousemove')
    // after mousemove display should be resetted
    expect(wrapper.emitted().refresh).toBeTruthy()
    await advanceClock(1000)
    expect(wrapper.element.innerHTML).toBe('00:59')
  })

  test('Keydown', async () => {
    const wrapper = mount(Vidle, {
      attachTo: document.body,
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
