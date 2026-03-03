import { useOcr } from '@/features/change-text/model';
import * as styles from './style.css';
const { ocrResult, isLoading, isCopied, processImage, copyToClipboard } = useOcr();
const handleFileChange = (event) => {
    const target = event.target;
    if (target.files && target.files[0]) {
        processImage(target.files[0]);
    }
};
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_components;
let __VLS_intrinsics;
let __VLS_directives;
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: (__VLS_ctx.styles.container) },
});
__VLS_asFunctionalElement1(__VLS_intrinsics.h1, __VLS_intrinsics.h1)({
    ...{ class: (__VLS_ctx.styles.title) },
});
__VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
    ...{ class: (__VLS_ctx.styles.uploadSection) },
});
__VLS_asFunctionalElement1(__VLS_intrinsics.label, __VLS_intrinsics.label)({
    ...{ class: (__VLS_ctx.styles.fileLabel) },
});
__VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({});
(__VLS_ctx.isLoading ? '분석 중...' : '이미지 선택하기');
__VLS_asFunctionalElement1(__VLS_intrinsics.input)({
    ...{ onChange: (__VLS_ctx.handleFileChange) },
    type: "file",
    accept: "image/*",
    disabled: (__VLS_ctx.isLoading),
    ...{ class: (__VLS_ctx.styles.hiddenInput) },
});
if (__VLS_ctx.isLoading) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: (__VLS_ctx.styles.loadingText) },
    });
}
if (__VLS_ctx.ocrResult) {
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: (__VLS_ctx.styles.resultSection) },
    });
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: (__VLS_ctx.styles.resultHeader) },
    });
    __VLS_asFunctionalElement1(__VLS_intrinsics.span, __VLS_intrinsics.span)({
        ...{ class: (__VLS_ctx.styles.resultLabel) },
    });
    __VLS_asFunctionalElement1(__VLS_intrinsics.button, __VLS_intrinsics.button)({
        ...{ onClick: (__VLS_ctx.copyToClipboard) },
        ...{ class: ([__VLS_ctx.styles.copyButton, __VLS_ctx.isCopied && __VLS_ctx.styles.copySuccess]) },
    });
    (__VLS_ctx.isCopied ? ' 복사 완료' : ' 클립보드 복사');
    __VLS_asFunctionalElement1(__VLS_intrinsics.div, __VLS_intrinsics.div)({
        ...{ class: (__VLS_ctx.styles.resultContent) },
    });
    (__VLS_ctx.ocrResult);
}
// @ts-ignore
[styles, styles, styles, styles, styles, styles, styles, styles, styles, styles, styles, styles, isLoading, isLoading, isLoading, handleFileChange, ocrResult, ocrResult, copyToClipboard, isCopied, isCopied,];
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
