import { useOcr } from '@/features/change-text/model';
import { ref } from 'vue';
import { ResultViewer } from '@/entities/ocr-content/ui';
import { ImagePreview } from '@/entities/ocr-content/ui';
import { UploadButton } from '@/features/change-text/ui';
const { ocrResult, isLoading, processImage } = useOcr();
const previewUrl = ref('');
const handleFile = (file) => {
    previewUrl.value = URL.createObjectURL(file);
    processImage(file);
};
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "ocr-board" },
});
/** @type {__VLS_StyleScopedClasses['ocr-board']} */ ;
let __VLS_0;
/** @ts-ignore @type {typeof __VLS_components.UploadButton} */
UploadButton;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent1(__VLS_0, new __VLS_0({
    ...{ 'onUpload': {} },
}));
const __VLS_2 = __VLS_1({
    ...{ 'onUpload': {} },
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
let __VLS_5;
const __VLS_6 = ({ upload: {} },
    { onUpload: (__VLS_ctx.handleFile) });
var __VLS_3;
var __VLS_4;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: "layout" },
});
/** @type {__VLS_StyleScopedClasses['layout']} */ ;
let __VLS_7;
/** @ts-ignore @type {typeof __VLS_components.ImagePreview} */
ImagePreview;
// @ts-ignore
const __VLS_8 = __VLS_asFunctionalComponent1(__VLS_7, new __VLS_7({
    src: (__VLS_ctx.previewUrl),
}));
const __VLS_9 = __VLS_8({
    src: (__VLS_ctx.previewUrl),
}, ...__VLS_functionalComponentArgsRest(__VLS_8));
let __VLS_12;
/** @ts-ignore @type {typeof __VLS_components.ResultViewer} */
ResultViewer;
// @ts-ignore
const __VLS_13 = __VLS_asFunctionalComponent1(__VLS_12, new __VLS_12({
    content: (__VLS_ctx.ocrResult),
    loading: (__VLS_ctx.isLoading),
}));
const __VLS_14 = __VLS_13({
    content: (__VLS_ctx.ocrResult),
    loading: (__VLS_ctx.isLoading),
}, ...__VLS_functionalComponentArgsRest(__VLS_13));
// @ts-ignore
[handleFile, previewUrl, ocrResult, isLoading,];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
