(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('vue-demi')) :
    typeof define === 'function' && define.amd ? define(['vue-demi'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global["v-idle"] = factory(global.VueDemi));
})(this, (function (vueDemi) { 'use strict';

    var Vidle = vueDemi.defineComponent({
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
            syncKey: {
                type: String,
                default: '',
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
            var display = vueDemi.ref('');
            var timer = vueDemi.ref(undefined);
            var start = vueDemi.ref(0);
            var counter = vueDemi.ref(undefined);
            var diff = vueDemi.ref(0);
            var minutes = vueDemi.ref('');
            var seconds = vueDemi.ref('');
            var broadcastChannel = vueDemi.ref(undefined);
            var isSyncEnabled = props.syncKey.length > 0 &&
                typeof window !== 'undefined' &&
                'BroadcastChannel' in window;
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
            var clearEvent = function (event) {
                var clearEvent = {
                    type: event.type,
                    key: event instanceof KeyboardEvent ? event.key : undefined,
                };
                clearTimer(clearEvent);
                // clearEvent is called only in original tab when sync is on
                if (isSyncEnabled) {
                    sendBroadcastEvent(clearEvent);
                }
            };
            var clearTimer = function (clearEvent) {
                emit('refresh', clearEvent);
                clearInterval(timer.value);
                clearInterval(counter.value);
                setDisplay();
                start.value = Date.now();
                diff.value = 0;
                setTimer();
            };
            var sendBroadcastEvent = function (event) {
                if (broadcastChannel.value !== undefined) {
                    broadcastChannel.value.postMessage(event);
                }
            };
            var setBroadcastChannel = function () {
                broadcastChannel.value = new BroadcastChannel(props.syncKey);
                broadcastChannel.value.addEventListener('message', function (event) {
                    clearTimer(event.data);
                });
            };
            vueDemi.onMounted(function () {
                if (isSyncEnabled) {
                    setBroadcastChannel();
                }
                setTimeout(function () {
                    start.value = Date.now();
                    setDisplay();
                    vueDemi.nextTick(function () {
                        setTimer();
                        for (var i = props.events.length - 1; i >= 0; i -= 1) {
                            window.addEventListener(props.events[i], clearEvent);
                        }
                    });
                }, props.wait * 1000);
            });
            vueDemi.onBeforeUnmount(function () {
                clearInterval(timer.value);
                clearInterval(counter.value);
                for (var i = props.events.length - 1; i >= 0; i -= 1) {
                    window.removeEventListener(props.events[i], clearEvent);
                }
            });
            return {
                display: display,
            };
        },
        render: function () {
            return vueDemi.h('div', {
                class: 'v-idle',
            }, this.display);
        },
    });

    return Vidle;

}));
//# sourceMappingURL=vidle.umd.js.map
