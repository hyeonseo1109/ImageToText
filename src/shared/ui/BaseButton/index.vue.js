import * as styles from './style.css';
const __VLS_props = withDefaults(defineProps(), {
    type: 'button',
    disabled: false
});
const emit = defineEmits();
const handleClick = (event) => {
    emit('click', event);
};
const __VLS_defaults = {
    type: 'button',
    disabled: false
};
const __VLS_ctx = {
    ...{},
    ...{},
    ...{},
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
    ...{ onClick: (__VLS_ctx.handleClick) },
    type: (__VLS_ctx.type),
    ...{ class: (__VLS_ctx.styles.button) },
    disabled: (__VLS_ctx.disabled),
});
var __VLS_0 = {};
// @ts-ignore
var __VLS_1 = __VLS_0;
// @ts-ignore
[handleClick, type, styles, disabled,];
const __VLS_base = (await import('vue')).defineComponent({
    __typeEmits: {},
    __typeProps: {},
    props: {},
});
const __VLS_export = {};
export default {};
