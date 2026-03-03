import * as styles from './style.css';
const emit = defineEmits();
const onFileChange = (e) => {
    const target = e.target;
    const file = target.files?.[0];
    if (file) {
        emit('upload', file);
    }
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
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: (__VLS_ctx.styles.container) },
});
__VLS_asFunctionalElement1(__VLS_intrinsics.label, __VLS_intrinsics.label)({
    ...{ class: (__VLS_ctx.styles.labelText) },
});
__VLS_asFunctionalElement1(__VLS_intrinsics.input)({
    ...{ onChange: (__VLS_ctx.onFileChange) },
    type: "file",
    accept: "image/*",
    ...{ class: (__VLS_ctx.styles.inputField) },
});
// @ts-ignore
[styles, styles, styles, onFileChange,];
const __VLS_export = (await import('vue')).defineComponent({
    __typeEmits: {},
});
export default {};
