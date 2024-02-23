import * as vue_demi from 'vue-demi';
import { PropType, Ref } from 'vue-demi';

declare const _default: vue_demi.DefineComponent<{
    duration: {
        type: NumberConstructor;
        default: number;
    };
    events: {
        type: PropType<string[]>;
        default: () => string[];
    };
    loop: {
        type: BooleanConstructor;
        default: boolean;
    };
    reminders: {
        type: PropType<number[]>;
        default: () => number[];
    };
    wait: {
        type: NumberConstructor;
        default: number;
    };
}, {
    display: Ref<string>;
}, unknown, {}, {}, vue_demi.ComponentOptionsMixin, vue_demi.ComponentOptionsMixin, ("idle" | "remind" | "refresh")[], "idle" | "remind" | "refresh", vue_demi.PublicProps, Readonly<vue_demi.ExtractPropTypes<{
    duration: {
        type: NumberConstructor;
        default: number;
    };
    events: {
        type: PropType<string[]>;
        default: () => string[];
    };
    loop: {
        type: BooleanConstructor;
        default: boolean;
    };
    reminders: {
        type: PropType<number[]>;
        default: () => number[];
    };
    wait: {
        type: NumberConstructor;
        default: number;
    };
}>> & {
    onIdle?: ((...args: any[]) => any) | undefined;
    onRemind?: ((...args: any[]) => any) | undefined;
    onRefresh?: ((...args: any[]) => any) | undefined;
}, {
    duration: number;
    events: string[];
    loop: boolean;
    reminders: number[];
    wait: number;
}, {}>;

export { _default as default };
