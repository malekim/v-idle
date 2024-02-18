import * as Vue from 'vue';
import Vue__default, { VueConstructor } from 'vue';
import * as vue_types_vue from 'vue/types/vue';

declare const Vidle: vue_types_vue.ExtendedVue<Vue__default<Record<string, any>, Record<string, any>, never, never, (event: string, ...args: any[]) => Vue__default<Record<string, any>, Record<string, any>, never, never, any>>, {
    display: string;
    timer: number | undefined;
    start: number;
    counter: number | undefined;
    diff: number;
    minutes: string;
    seconds: string;
}, {
    setDisplay(): void;
    shouldRemind(): void;
    countdown(): void;
    idle(): void;
    remind(): void;
    setTimer(): void;
    clearTimer(event: Event): void;
}, unknown, {
    duration: number;
    events: string[];
    loop: boolean;
    reminders: number[];
    wait: number;
}, {}, Vue.ComponentOptionsMixin, Vue.ComponentOptionsMixin>;

declare const VidlePlugin: {
    install(Vue: VueConstructor): void;
};

export { VidlePlugin as default, Vidle as vidle };
