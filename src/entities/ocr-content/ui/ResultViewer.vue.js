import * as styles from './style.css';
const __VLS_props = defineProps();
const __VLS_ctx = {
    ...{},
    ...{},
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: (__VLS_ctx.styles.previewCard) },
});
if (!__VLS_ctx.loading) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.textarea)({
        value: (__VLS_ctx.content),
        readonly: true,
        ...{ class: (__VLS_ctx.styles.resultTextarea) },
    });
}
else {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({});
}
// @ts-ignore
[styles, styles, loading, content,];
const __VLS_export = (await import('vue')).defineComponent({
    __typeProps: {},
});
export default {};
