import { defineComponent, ref, onMounted, nextTick, onBeforeUnmount, h } from 'vue-demi';

var Vidle = defineComponent({
    emits: ['idle', 'remind', 'refresh'],
    props: {
        duration: {
            type: Number,
            // default 5 minutes
            default: 60 * 5,
        },
        events: {
            type: Array,
            default: function () { return ['mousemove', 'keypress']; },
        },
        loop: {
            type: Boolean,
            default: false,
        },
        reminders: {
            type: Array,
            // array of seconds
            // emit "remind" event on each second
            default: function () { return []; },
        },
        wait: {
            type: Number,
            default: 0,
        },
    },
    setup: function (props, _a) {
        var emit = _a.emit;
        var display = ref('ed');
        var timer = ref(undefined);
        var start = ref(0);
        var counter = ref(undefined);
        var diff = ref(0);
        var minutes = ref('');
        var seconds = ref('');
        var shouldRemind = function () {
            if (props.reminders.length > 0) {
                if (props.reminders.includes(diff.value)) {
                    remind();
                }
            }
        };
        var setDisplay = function () {
            // seconds since start
            diff.value = props.duration - (((Date.now() - start.value) / 1000) | 0);
            if (diff.value < 0 && !props.loop) {
                clearInterval(timer.value);
                clearInterval(counter.value);
                return;
            }
            shouldRemind();
            // bitwise OR to handle parseInt
            var minute = (diff.value / 60) | 0;
            var second = diff.value % 60 | 0;
            minutes.value = "".concat(minute < 10 ? '0' + minute : minute);
            seconds.value = "".concat(second < 10 ? '0' + second : second);
            display.value = "".concat(minutes.value, ":").concat(seconds.value);
        };
        var countdown = function () {
            setDisplay();
            if (diff.value <= 0 && props.loop) {
                // add second to start at the full duration
                // for instance 05:00, not 04:59
                start.value = Date.now() + 1000;
            }
        };
        var idle = function () {
            emit('idle');
        };
        var remind = function () {
            emit('remind');
        };
        var setTimer = function () {
            timer.value = window.setInterval(idle, props.duration * 1000);
            counter.value = window.setInterval(countdown, 1000);
        };
        var clearTimer = function (event) {
            var clearEvent = {
                type: event.type,
                key: event instanceof KeyboardEvent ? event.key : undefined,
            };
            emit('refresh', clearEvent);
            clearInterval(timer.value);
            clearInterval(counter.value);
            setDisplay();
            start.value = Date.now();
            diff.value = 0;
            setTimer();
        };
        onMounted(function () {
            setTimeout(function () {
                start.value = Date.now();
                setDisplay();
                nextTick(function () {
                    setTimer();
                    for (var i = props.events.length - 1; i >= 0; i -= 1) {
                        window.addEventListener(props.events[i], clearTimer);
                    }
                });
            }, props.wait * 1000);
        });
        onBeforeUnmount(function () {
            clearInterval(timer.value);
            clearInterval(counter.value);
            for (var i = props.events.length - 1; i >= 0; i -= 1) {
                window.removeEventListener(props.events[i], clearTimer);
            }
        });
        return {
            display: display,
        };
    },
    render: function () {
        return h('div', {
            class: 'v-idle',
        }, this.display);
    },
});

export { Vidle as default };
//# sourceMappingURL=vidle.esm.js.map
