# v-idle

[![codecov](https://codecov.io/gh/malekim/v-idle/branch/master/graph/badge.svg)](https://codecov.io/gh/malekim/v-idle)

V-idle is a universal Vue plugin compatible with Vue 2 and Vue 3 to detect idle/non-active users.

## Installation

The plugin can be installed by npm, yarn or pnpm. Alternatively it can be used through jsdelivr CDN.

### NPM

```bash
npm install v-idle --save
```

### Yarn

```bash
yarn add v-idle
```

### PNPM

```bash
pnpm add v-idle
```

### Jsdelivr CDN

Latest version of the plugin is available here:
[https://cdn.jsdelivr.net/npm/v-idle@latest/build/vidle.umd.min.js](https://cdn.jsdelivr.net/npm/v-idle@latest/build/vidle.umd.min.js)

## Basic usage

From 1.0.0 version the plugin supports vue 2 and vue 3 with the help of vue-demi package. 

Starting with this version, the plugin no longer requires installation via `Vue.use()`. Simply import the 'Vidle' component where needed.

### Vue 2.6+

For Vue 2.6+, ensure you have the [`@vue/composition-api`](https://github.com/vuejs/composition-api) installed.

```javascript
import Vue from 'vue'
import VueCompositionAPI from '@vue/composition-api'

Vue.use(VueCompositionAPI)
```

```javascript
import { defineComponent } from '@vue/composition-api'
import Vidle from 'v-idle'

export default defineComponent({
  components: {
    Vidle,
  },
})
```

### Vue 2.7.2

```javascript
import { defineComponent } from 'vue'
import Vidle from 'v-idle'

export default defineComponent({
  components: {
    Vidle,
  },
})
```

### Vue 3

```javascript
import { defineComponent } from 'vue'
import Vidle from 'v-idle'

export default defineComponent({
  components: {
    Vidle,
  },
})
```

## Component

Inside template use v-idle component:

```html
<Vidle />
```

It will show timer counting down from 05:00 by default.

## Options

### @idle

Type: Function

Default: none

Executes when the timer reaches 00:00

```html
<v-idle @idle="onidle" />
```

### @remind

Type: Function

Default: none

Executes when the timer reaches time in seconds before 00:00

```html
<v-idle
  @remind="onremind"
  :reminders="[5, 10, 20, 60]" />
```

### @refresh

Type: Function

Argument: object with type of event (for example 'mousemove') and key (if timer was refreshed with keyboard)

Default: none

Executes when activity is detected

```html
<v-idle @refresh="onrefresh" />
```

```javascript
  methods: {
    onrefresh(event: {
      type: string
      key: string | undefined
    }) {
      console.info(event.type)
      console.info(event.key)
      if (event.type === 'keydown') {
        if (event.key !== undefined && event.key === 'Escape') {
          console.error('Escape clicked')
        }
      }
    },
  }
```

### reminders

Type: Array

Default: empty array

Array with seconds. Each value will execute @remind

### loop

Type: Boolean

Default: false

If set to true, timer will start execution again after 00:00

```html
<v-idle :loop="true" />
```

### events

Type: Array

Default: ['mousemove', 'keypress']

Each event will break countdown.

```html
<v-idle :events="['mousemove']" />
```

### wait

Type: Number

Default: 0

How many second to wait before starting countdown.

```html
<v-idle :wait="100" />
```

### duration

Type: Number

Default: 60 * 5

Should be in seconds, default value is 60 * 5 seconds, so 5 minutes.

```html
<v-idle :duration="300" />
```

## Example

Create a timer for 300 seconds (5 minutes) with loop, remind 10 and 15 second before 00:00 with function onremind(), wait 5 seconds before showing user the timer, execute function onidle() when the timer reaches 00:00.

```html
<v-idle
  @idle="onidle"
  @remind="onremind"
  :loop="true"
  :reminders="[10, 15]"
  :wait="5"
  :duration="300" />
```

```javascript
  methods: {
    onidle() {
      alert('You have been logged out');
    },
    onremind(time) {
      // alert seconds remaining to 00:00
      alert(time);
    }
  }
```

## Tests

To run tests type:
```bash
npm run test
```

To run particular test type:
```bash
npm run test -- -t "test_name"
```

## Roadmap

- Add support for multi tabs

## License

`v-idle` uses the MIT License (MIT). Please see the [license file](https://github.com/malekim/v-idle/blob/master/LICENSE) for more information.
