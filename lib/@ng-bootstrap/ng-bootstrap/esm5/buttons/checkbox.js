import { __decorate } from "tslib";
import { ChangeDetectorRef, Directive, forwardRef, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { NgbButtonLabel } from './label';
var NGB_CHECKBOX_VALUE_ACCESSOR = {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(function () { return NgbCheckBox; }),
    multi: true
};
/**
 * Allows to easily create Bootstrap-style checkbox buttons.
 *
 * Integrates with forms, so the value of a checked button is bound to the underlying form control
 * either in a reactive or template-driven way.
 */
var NgbCheckBox = /** @class */ (function () {
    function NgbCheckBox(_label, _cd) {
        this._label = _label;
        this._cd = _cd;
        /**
         * If `true`, the checkbox button will be disabled
         */
        this.disabled = false;
        /**
         * The form control value when the checkbox is checked.
         */
        this.valueChecked = true;
        /**
         * The form control value when the checkbox is unchecked.
         */
        this.valueUnChecked = false;
        this.onChange = function (_) { };
        this.onTouched = function () { };
    }
    Object.defineProperty(NgbCheckBox.prototype, "focused", {
        set: function (isFocused) {
            this._label.focused = isFocused;
            if (!isFocused) {
                this.onTouched();
            }
        },
        enumerable: true,
        configurable: true
    });
    NgbCheckBox.prototype.onInputChange = function ($event) {
        var modelToPropagate = $event.target.checked ? this.valueChecked : this.valueUnChecked;
        this.onChange(modelToPropagate);
        this.onTouched();
        this.writeValue(modelToPropagate);
    };
    NgbCheckBox.prototype.registerOnChange = function (fn) { this.onChange = fn; };
    NgbCheckBox.prototype.registerOnTouched = function (fn) { this.onTouched = fn; };
    NgbCheckBox.prototype.setDisabledState = function (isDisabled) {
        this.disabled = isDisabled;
        this._label.disabled = isDisabled;
    };
    NgbCheckBox.prototype.writeValue = function (value) {
        this.checked = value === this.valueChecked;
        this._label.active = this.checked;
        // label won't be updated, if it is inside the OnPush component when [ngModel] changes
        this._cd.markForCheck();
    };
    NgbCheckBox.ctorParameters = function () { return [
        { type: NgbButtonLabel },
        { type: ChangeDetectorRef }
    ]; };
    __decorate([
        Input()
    ], NgbCheckBox.prototype, "disabled", void 0);
    __decorate([
        Input()
    ], NgbCheckBox.prototype, "valueChecked", void 0);
    __decorate([
        Input()
    ], NgbCheckBox.prototype, "valueUnChecked", void 0);
    NgbCheckBox = __decorate([
        Directive({
            selector: '[ngbButton][type=checkbox]',
            host: {
                '[checked]': 'checked',
                '[disabled]': 'disabled',
                '(change)': 'onInputChange($event)',
                '(focus)': 'focused = true',
                '(blur)': 'focused = false'
            },
            providers: [NGB_CHECKBOX_VALUE_ACCESSOR]
        })
    ], NgbCheckBox);
    return NgbCheckBox;
}());
export { NgbCheckBox };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2hlY2tib3guanMiLCJzb3VyY2VSb290Ijoibmc6Ly9AbmctYm9vdHN0cmFwL25nLWJvb3RzdHJhcC8iLCJzb3VyY2VzIjpbImJ1dHRvbnMvY2hlY2tib3gudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBQyxpQkFBaUIsRUFBRSxTQUFTLEVBQUUsVUFBVSxFQUFFLEtBQUssRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUM5RSxPQUFPLEVBQXVCLGlCQUFpQixFQUFDLE1BQU0sZ0JBQWdCLENBQUM7QUFFdkUsT0FBTyxFQUFDLGNBQWMsRUFBQyxNQUFNLFNBQVMsQ0FBQztBQUV2QyxJQUFNLDJCQUEyQixHQUFHO0lBQ2xDLE9BQU8sRUFBRSxpQkFBaUI7SUFDMUIsV0FBVyxFQUFFLFVBQVUsQ0FBQyxjQUFNLE9BQUEsV0FBVyxFQUFYLENBQVcsQ0FBQztJQUMxQyxLQUFLLEVBQUUsSUFBSTtDQUNaLENBQUM7QUFHRjs7Ozs7R0FLRztBQVlIO0lBOEJFLHFCQUFvQixNQUFzQixFQUFVLEdBQXNCO1FBQXRELFdBQU0sR0FBTixNQUFNLENBQWdCO1FBQVUsUUFBRyxHQUFILEdBQUcsQ0FBbUI7UUF6QjFFOztXQUVHO1FBQ00sYUFBUSxHQUFHLEtBQUssQ0FBQztRQUUxQjs7V0FFRztRQUNNLGlCQUFZLEdBQUcsSUFBSSxDQUFDO1FBRTdCOztXQUVHO1FBQ00sbUJBQWMsR0FBRyxLQUFLLENBQUM7UUFFaEMsYUFBUSxHQUFHLFVBQUMsQ0FBTSxJQUFNLENBQUMsQ0FBQztRQUMxQixjQUFTLEdBQUcsY0FBTyxDQUFDLENBQUM7SUFTd0QsQ0FBQztJQVA5RSxzQkFBSSxnQ0FBTzthQUFYLFVBQVksU0FBa0I7WUFDNUIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLEdBQUcsU0FBUyxDQUFDO1lBQ2hDLElBQUksQ0FBQyxTQUFTLEVBQUU7Z0JBQ2QsSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO2FBQ2xCO1FBQ0gsQ0FBQzs7O09BQUE7SUFJRCxtQ0FBYSxHQUFiLFVBQWMsTUFBTTtRQUNsQixJQUFNLGdCQUFnQixHQUFHLE1BQU0sQ0FBQyxNQUFNLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDO1FBQ3pGLElBQUksQ0FBQyxRQUFRLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUNoQyxJQUFJLENBQUMsU0FBUyxFQUFFLENBQUM7UUFDakIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFFRCxzQ0FBZ0IsR0FBaEIsVUFBaUIsRUFBdUIsSUFBVSxJQUFJLENBQUMsUUFBUSxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFFdkUsdUNBQWlCLEdBQWpCLFVBQWtCLEVBQWEsSUFBVSxJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQyxDQUFDLENBQUM7SUFFL0Qsc0NBQWdCLEdBQWhCLFVBQWlCLFVBQW1CO1FBQ2xDLElBQUksQ0FBQyxRQUFRLEdBQUcsVUFBVSxDQUFDO1FBQzNCLElBQUksQ0FBQyxNQUFNLENBQUMsUUFBUSxHQUFHLFVBQVUsQ0FBQztJQUNwQyxDQUFDO0lBRUQsZ0NBQVUsR0FBVixVQUFXLEtBQUs7UUFDZCxJQUFJLENBQUMsT0FBTyxHQUFHLEtBQUssS0FBSyxJQUFJLENBQUMsWUFBWSxDQUFDO1FBQzNDLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxPQUFPLENBQUM7UUFFbEMsc0ZBQXNGO1FBQ3RGLElBQUksQ0FBQyxHQUFHLENBQUMsWUFBWSxFQUFFLENBQUM7SUFDMUIsQ0FBQzs7Z0JBeEIyQixjQUFjO2dCQUFlLGlCQUFpQjs7SUF0QmpFO1FBQVIsS0FBSyxFQUFFO2lEQUFrQjtJQUtqQjtRQUFSLEtBQUssRUFBRTtxREFBcUI7SUFLcEI7UUFBUixLQUFLLEVBQUU7dURBQXdCO0lBbEJyQixXQUFXO1FBWHZCLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSw0QkFBNEI7WUFDdEMsSUFBSSxFQUFFO2dCQUNKLFdBQVcsRUFBRSxTQUFTO2dCQUN0QixZQUFZLEVBQUUsVUFBVTtnQkFDeEIsVUFBVSxFQUFFLHVCQUF1QjtnQkFDbkMsU0FBUyxFQUFFLGdCQUFnQjtnQkFDM0IsUUFBUSxFQUFFLGlCQUFpQjthQUM1QjtZQUNELFNBQVMsRUFBRSxDQUFDLDJCQUEyQixDQUFDO1NBQ3pDLENBQUM7T0FDVyxXQUFXLENBdUR2QjtJQUFELGtCQUFDO0NBQUEsQUF2REQsSUF1REM7U0F2RFksV0FBVyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Q2hhbmdlRGV0ZWN0b3JSZWYsIERpcmVjdGl2ZSwgZm9yd2FyZFJlZiwgSW5wdXR9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1J9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcblxuaW1wb3J0IHtOZ2JCdXR0b25MYWJlbH0gZnJvbSAnLi9sYWJlbCc7XG5cbmNvbnN0IE5HQl9DSEVDS0JPWF9WQUxVRV9BQ0NFU1NPUiA9IHtcbiAgcHJvdmlkZTogTkdfVkFMVUVfQUNDRVNTT1IsXG4gIHVzZUV4aXN0aW5nOiBmb3J3YXJkUmVmKCgpID0+IE5nYkNoZWNrQm94KSxcbiAgbXVsdGk6IHRydWVcbn07XG5cblxuLyoqXG4gKiBBbGxvd3MgdG8gZWFzaWx5IGNyZWF0ZSBCb290c3RyYXAtc3R5bGUgY2hlY2tib3ggYnV0dG9ucy5cbiAqXG4gKiBJbnRlZ3JhdGVzIHdpdGggZm9ybXMsIHNvIHRoZSB2YWx1ZSBvZiBhIGNoZWNrZWQgYnV0dG9uIGlzIGJvdW5kIHRvIHRoZSB1bmRlcmx5aW5nIGZvcm0gY29udHJvbFxuICogZWl0aGVyIGluIGEgcmVhY3RpdmUgb3IgdGVtcGxhdGUtZHJpdmVuIHdheS5cbiAqL1xuQERpcmVjdGl2ZSh7XG4gIHNlbGVjdG9yOiAnW25nYkJ1dHRvbl1bdHlwZT1jaGVja2JveF0nLFxuICBob3N0OiB7XG4gICAgJ1tjaGVja2VkXSc6ICdjaGVja2VkJyxcbiAgICAnW2Rpc2FibGVkXSc6ICdkaXNhYmxlZCcsXG4gICAgJyhjaGFuZ2UpJzogJ29uSW5wdXRDaGFuZ2UoJGV2ZW50KScsXG4gICAgJyhmb2N1cyknOiAnZm9jdXNlZCA9IHRydWUnLFxuICAgICcoYmx1ciknOiAnZm9jdXNlZCA9IGZhbHNlJ1xuICB9LFxuICBwcm92aWRlcnM6IFtOR0JfQ0hFQ0tCT1hfVkFMVUVfQUNDRVNTT1JdXG59KVxuZXhwb3J0IGNsYXNzIE5nYkNoZWNrQm94IGltcGxlbWVudHMgQ29udHJvbFZhbHVlQWNjZXNzb3Ige1xuICBzdGF0aWMgbmdBY2NlcHRJbnB1dFR5cGVfZGlzYWJsZWQ6IGJvb2xlYW4gfCAnJztcblxuICBjaGVja2VkO1xuXG4gIC8qKlxuICAgKiBJZiBgdHJ1ZWAsIHRoZSBjaGVja2JveCBidXR0b24gd2lsbCBiZSBkaXNhYmxlZFxuICAgKi9cbiAgQElucHV0KCkgZGlzYWJsZWQgPSBmYWxzZTtcblxuICAvKipcbiAgICogVGhlIGZvcm0gY29udHJvbCB2YWx1ZSB3aGVuIHRoZSBjaGVja2JveCBpcyBjaGVja2VkLlxuICAgKi9cbiAgQElucHV0KCkgdmFsdWVDaGVja2VkID0gdHJ1ZTtcblxuICAvKipcbiAgICogVGhlIGZvcm0gY29udHJvbCB2YWx1ZSB3aGVuIHRoZSBjaGVja2JveCBpcyB1bmNoZWNrZWQuXG4gICAqL1xuICBASW5wdXQoKSB2YWx1ZVVuQ2hlY2tlZCA9IGZhbHNlO1xuXG4gIG9uQ2hhbmdlID0gKF86IGFueSkgPT4ge307XG4gIG9uVG91Y2hlZCA9ICgpID0+IHt9O1xuXG4gIHNldCBmb2N1c2VkKGlzRm9jdXNlZDogYm9vbGVhbikge1xuICAgIHRoaXMuX2xhYmVsLmZvY3VzZWQgPSBpc0ZvY3VzZWQ7XG4gICAgaWYgKCFpc0ZvY3VzZWQpIHtcbiAgICAgIHRoaXMub25Ub3VjaGVkKCk7XG4gICAgfVxuICB9XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfbGFiZWw6IE5nYkJ1dHRvbkxhYmVsLCBwcml2YXRlIF9jZDogQ2hhbmdlRGV0ZWN0b3JSZWYpIHt9XG5cbiAgb25JbnB1dENoYW5nZSgkZXZlbnQpIHtcbiAgICBjb25zdCBtb2RlbFRvUHJvcGFnYXRlID0gJGV2ZW50LnRhcmdldC5jaGVja2VkID8gdGhpcy52YWx1ZUNoZWNrZWQgOiB0aGlzLnZhbHVlVW5DaGVja2VkO1xuICAgIHRoaXMub25DaGFuZ2UobW9kZWxUb1Byb3BhZ2F0ZSk7XG4gICAgdGhpcy5vblRvdWNoZWQoKTtcbiAgICB0aGlzLndyaXRlVmFsdWUobW9kZWxUb1Byb3BhZ2F0ZSk7XG4gIH1cblxuICByZWdpc3Rlck9uQ2hhbmdlKGZuOiAodmFsdWU6IGFueSkgPT4gYW55KTogdm9pZCB7IHRoaXMub25DaGFuZ2UgPSBmbjsgfVxuXG4gIHJlZ2lzdGVyT25Ub3VjaGVkKGZuOiAoKSA9PiBhbnkpOiB2b2lkIHsgdGhpcy5vblRvdWNoZWQgPSBmbjsgfVxuXG4gIHNldERpc2FibGVkU3RhdGUoaXNEaXNhYmxlZDogYm9vbGVhbik6IHZvaWQge1xuICAgIHRoaXMuZGlzYWJsZWQgPSBpc0Rpc2FibGVkO1xuICAgIHRoaXMuX2xhYmVsLmRpc2FibGVkID0gaXNEaXNhYmxlZDtcbiAgfVxuXG4gIHdyaXRlVmFsdWUodmFsdWUpIHtcbiAgICB0aGlzLmNoZWNrZWQgPSB2YWx1ZSA9PT0gdGhpcy52YWx1ZUNoZWNrZWQ7XG4gICAgdGhpcy5fbGFiZWwuYWN0aXZlID0gdGhpcy5jaGVja2VkO1xuXG4gICAgLy8gbGFiZWwgd29uJ3QgYmUgdXBkYXRlZCwgaWYgaXQgaXMgaW5zaWRlIHRoZSBPblB1c2ggY29tcG9uZW50IHdoZW4gW25nTW9kZWxdIGNoYW5nZXNcbiAgICB0aGlzLl9jZC5tYXJrRm9yQ2hlY2soKTtcbiAgfVxufVxuIl19