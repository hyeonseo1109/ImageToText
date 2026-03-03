import { useOcr } from '@/features/change-text/model';
import { ref } from 'vue';
const { ocrResult, isLoading, processImage } = useOcr();
const previewUrl = ref('');
const handleFile = (file) => {
    previewUrl.value = URL.createObjectURL(file);
    processImage(file);
};
const __VLS_ctx = {};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "ocr-board" },
});
/** @type {__VLS_StyleScopedClasses['ocr-board']} */ ;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "layout" },
});
/** @type {__VLS_StyleScopedClasses['layout']} */ ;
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
