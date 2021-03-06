import { ComponentRef } from '@angular/core';
import { NgbModalBackdrop } from './modal-backdrop';
import { NgbModalWindow } from './modal-window';
import { ContentRef } from '../util/popup';
/**
 * A reference to the currently opened (active) modal.
 *
 * Instances of this class can be injected into your component passed as modal content.
 * So you can `.close()` or `.dismiss()` the modal window from your component.
 */
export declare class NgbActiveModal {
    /**
     * Closes the modal with an optional `result` value.
     *
     * The `NgbMobalRef.result` promise will be resolved with the provided value.
     */
    close(result?: any): void;
    /**
     * Dismisses the modal with an optional `reason` value.
     *
     * The `NgbModalRef.result` promise will be rejected with the provided value.
     */
    dismiss(reason?: any): void;
}
/**
 * A reference to the newly opened modal returned by the `NgbModal.open()` method.
 */
export declare class NgbModalRef {
    private _windowCmptRef;
    private _contentRef;
    private _backdropCmptRef?;
    private _beforeDismiss?;
    private _resolve;
    private _reject;
    /**
     * The instance of a component used for the modal content.
     *
     * When a `TemplateRef` is used as the content or when the modal is closed, will return `undefined`.
     */
    get componentInstance(): any;
    /**
     * The promise that is resolved when the modal is closed and rejected when the modal is dismissed.
     */
    result: Promise<any>;
    constructor(_windowCmptRef: ComponentRef<NgbModalWindow>, _contentRef: ContentRef, _backdropCmptRef?: ComponentRef<NgbModalBackdrop> | undefined, _beforeDismiss?: Function | undefined);
    /**
     * Closes the modal with an optional `result` value.
     *
     * The `NgbMobalRef.result` promise will be resolved with the provided value.
     */
    close(result?: any): void;
    private _dismiss;
    /**
     * Dismisses the modal with an optional `reason` value.
     *
     * The `NgbModalRef.result` promise will be rejected with the provided value.
     */
    dismiss(reason?: any): void;
    private _removeModalElements;
}
