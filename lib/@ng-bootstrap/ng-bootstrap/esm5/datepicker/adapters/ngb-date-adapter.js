import { __decorate, __extends } from "tslib";
import { Injectable } from '@angular/core';
import { isInteger } from '../../util/util';
import * as i0 from "@angular/core";
export function NGB_DATEPICKER_DATE_ADAPTER_FACTORY() {
    return new NgbDateStructAdapter();
}
/**
 * An abstract service that does the conversion between the internal datepicker `NgbDateStruct` model and
 * any provided user date model `D`, ex. a string, a native date, etc.
 *
 * The adapter is used **only** for conversion when binding datepicker to a form control,
 * ex. `[(ngModel)]="userDateModel"`. Here `userDateModel` can be of any type.
 *
 * The default datepicker implementation assumes we use `NgbDateStruct` as a user model.
 *
 * See the [date format overview](#/components/datepicker/overview#date-model) for more details
 * and the [custom adapter demo](#/components/datepicker/examples#adapter) for an example.
 */
var NgbDateAdapter = /** @class */ (function () {
    function NgbDateAdapter() {
    }
    NgbDateAdapter.ɵprov = i0.ɵɵdefineInjectable({ factory: NGB_DATEPICKER_DATE_ADAPTER_FACTORY, token: NgbDateAdapter, providedIn: "root" });
    NgbDateAdapter = __decorate([
        Injectable({ providedIn: 'root', useFactory: NGB_DATEPICKER_DATE_ADAPTER_FACTORY })
    ], NgbDateAdapter);
    return NgbDateAdapter;
}());
export { NgbDateAdapter };
var NgbDateStructAdapter = /** @class */ (function (_super) {
    __extends(NgbDateStructAdapter, _super);
    function NgbDateStructAdapter() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Converts a NgbDateStruct value into NgbDateStruct value
     */
    NgbDateStructAdapter.prototype.fromModel = function (date) {
        return (date && isInteger(date.year) && isInteger(date.month) && isInteger(date.day)) ?
            { year: date.year, month: date.month, day: date.day } :
            null;
    };
    /**
     * Converts a NgbDateStruct value into NgbDateStruct value
     */
    NgbDateStructAdapter.prototype.toModel = function (date) {
        return (date && isInteger(date.year) && isInteger(date.month) && isInteger(date.day)) ?
            { year: date.year, month: date.month, day: date.day } :
            null;
    };
    NgbDateStructAdapter = __decorate([
        Injectable()
    ], NgbDateStructAdapter);
    return NgbDateStructAdapter;
}(NgbDateAdapter));
export { NgbDateStructAdapter };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdiLWRhdGUtYWRhcHRlci5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwLyIsInNvdXJjZXMiOlsiZGF0ZXBpY2tlci9hZGFwdGVycy9uZ2ItZGF0ZS1hZGFwdGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsVUFBVSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBRXpDLE9BQU8sRUFBQyxTQUFTLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQzs7QUFFMUMsTUFBTSxVQUFVLG1DQUFtQztJQUNqRCxPQUFPLElBQUksb0JBQW9CLEVBQUUsQ0FBQztBQUNwQyxDQUFDO0FBRUQ7Ozs7Ozs7Ozs7O0dBV0c7QUFFSDtJQUFBO0tBVUM7O0lBVnFCLGNBQWM7UUFEbkMsVUFBVSxDQUFDLEVBQUMsVUFBVSxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsbUNBQW1DLEVBQUMsQ0FBQztPQUM1RCxjQUFjLENBVW5DO3lCQS9CRDtDQStCQyxBQVZELElBVUM7U0FWcUIsY0FBYztBQWFwQztJQUEwQyx3Q0FBNkI7SUFBdkU7O0lBa0JBLENBQUM7SUFqQkM7O09BRUc7SUFDSCx3Q0FBUyxHQUFULFVBQVUsSUFBMEI7UUFDbEMsT0FBTyxDQUFDLElBQUksSUFBSSxTQUFTLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbkYsRUFBQyxJQUFJLEVBQUUsSUFBSSxDQUFDLElBQUksRUFBRSxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUssRUFBRSxHQUFHLEVBQUUsSUFBSSxDQUFDLEdBQUcsRUFBQyxDQUFDLENBQUM7WUFDckQsSUFBSSxDQUFDO0lBQ1gsQ0FBQztJQUVEOztPQUVHO0lBQ0gsc0NBQU8sR0FBUCxVQUFRLElBQTBCO1FBQ2hDLE9BQU8sQ0FBQyxJQUFJLElBQUksU0FBUyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxTQUFTLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ25GLEVBQUMsSUFBSSxFQUFFLElBQUksQ0FBQyxJQUFJLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHLEVBQUMsQ0FBQyxDQUFDO1lBQ3JELElBQUksQ0FBQztJQUNYLENBQUM7SUFqQlUsb0JBQW9CO1FBRGhDLFVBQVUsRUFBRTtPQUNBLG9CQUFvQixDQWtCaEM7SUFBRCwyQkFBQztDQUFBLEFBbEJELENBQTBDLGNBQWMsR0FrQnZEO1NBbEJZLG9CQUFvQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge05nYkRhdGVTdHJ1Y3R9IGZyb20gJy4uL25nYi1kYXRlLXN0cnVjdCc7XG5pbXBvcnQge2lzSW50ZWdlcn0gZnJvbSAnLi4vLi4vdXRpbC91dGlsJztcblxuZXhwb3J0IGZ1bmN0aW9uIE5HQl9EQVRFUElDS0VSX0RBVEVfQURBUFRFUl9GQUNUT1JZKCkge1xuICByZXR1cm4gbmV3IE5nYkRhdGVTdHJ1Y3RBZGFwdGVyKCk7XG59XG5cbi8qKlxuICogQW4gYWJzdHJhY3Qgc2VydmljZSB0aGF0IGRvZXMgdGhlIGNvbnZlcnNpb24gYmV0d2VlbiB0aGUgaW50ZXJuYWwgZGF0ZXBpY2tlciBgTmdiRGF0ZVN0cnVjdGAgbW9kZWwgYW5kXG4gKiBhbnkgcHJvdmlkZWQgdXNlciBkYXRlIG1vZGVsIGBEYCwgZXguIGEgc3RyaW5nLCBhIG5hdGl2ZSBkYXRlLCBldGMuXG4gKlxuICogVGhlIGFkYXB0ZXIgaXMgdXNlZCAqKm9ubHkqKiBmb3IgY29udmVyc2lvbiB3aGVuIGJpbmRpbmcgZGF0ZXBpY2tlciB0byBhIGZvcm0gY29udHJvbCxcbiAqIGV4LiBgWyhuZ01vZGVsKV09XCJ1c2VyRGF0ZU1vZGVsXCJgLiBIZXJlIGB1c2VyRGF0ZU1vZGVsYCBjYW4gYmUgb2YgYW55IHR5cGUuXG4gKlxuICogVGhlIGRlZmF1bHQgZGF0ZXBpY2tlciBpbXBsZW1lbnRhdGlvbiBhc3N1bWVzIHdlIHVzZSBgTmdiRGF0ZVN0cnVjdGAgYXMgYSB1c2VyIG1vZGVsLlxuICpcbiAqIFNlZSB0aGUgW2RhdGUgZm9ybWF0IG92ZXJ2aWV3XSgjL2NvbXBvbmVudHMvZGF0ZXBpY2tlci9vdmVydmlldyNkYXRlLW1vZGVsKSBmb3IgbW9yZSBkZXRhaWxzXG4gKiBhbmQgdGhlIFtjdXN0b20gYWRhcHRlciBkZW1vXSgjL2NvbXBvbmVudHMvZGF0ZXBpY2tlci9leGFtcGxlcyNhZGFwdGVyKSBmb3IgYW4gZXhhbXBsZS5cbiAqL1xuQEluamVjdGFibGUoe3Byb3ZpZGVkSW46ICdyb290JywgdXNlRmFjdG9yeTogTkdCX0RBVEVQSUNLRVJfREFURV9BREFQVEVSX0ZBQ1RPUll9KVxuZXhwb3J0IGFic3RyYWN0IGNsYXNzIE5nYkRhdGVBZGFwdGVyPEQ+IHtcbiAgLyoqXG4gICAqIENvbnZlcnRzIGEgdXNlci1tb2RlbCBkYXRlIG9mIHR5cGUgYERgIHRvIGFuIGBOZ2JEYXRlU3RydWN0YCBmb3IgaW50ZXJuYWwgdXNlLlxuICAgKi9cbiAgYWJzdHJhY3QgZnJvbU1vZGVsKHZhbHVlOiBEIHwgbnVsbCk6IE5nYkRhdGVTdHJ1Y3QgfCBudWxsO1xuXG4gIC8qKlxuICAgKiBDb252ZXJ0cyBhbiBpbnRlcm5hbCBgTmdiRGF0ZVN0cnVjdGAgZGF0ZSB0byBhIHVzZXItbW9kZWwgZGF0ZSBvZiB0eXBlIGBEYC5cbiAgICovXG4gIGFic3RyYWN0IHRvTW9kZWwoZGF0ZTogTmdiRGF0ZVN0cnVjdCB8IG51bGwpOiBEIHwgbnVsbDtcbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE5nYkRhdGVTdHJ1Y3RBZGFwdGVyIGV4dGVuZHMgTmdiRGF0ZUFkYXB0ZXI8TmdiRGF0ZVN0cnVjdD4ge1xuICAvKipcbiAgICogQ29udmVydHMgYSBOZ2JEYXRlU3RydWN0IHZhbHVlIGludG8gTmdiRGF0ZVN0cnVjdCB2YWx1ZVxuICAgKi9cbiAgZnJvbU1vZGVsKGRhdGU6IE5nYkRhdGVTdHJ1Y3QgfCBudWxsKTogTmdiRGF0ZVN0cnVjdCB8IG51bGwge1xuICAgIHJldHVybiAoZGF0ZSAmJiBpc0ludGVnZXIoZGF0ZS55ZWFyKSAmJiBpc0ludGVnZXIoZGF0ZS5tb250aCkgJiYgaXNJbnRlZ2VyKGRhdGUuZGF5KSkgP1xuICAgICAgICB7eWVhcjogZGF0ZS55ZWFyLCBtb250aDogZGF0ZS5tb250aCwgZGF5OiBkYXRlLmRheX0gOlxuICAgICAgICBudWxsO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlcnRzIGEgTmdiRGF0ZVN0cnVjdCB2YWx1ZSBpbnRvIE5nYkRhdGVTdHJ1Y3QgdmFsdWVcbiAgICovXG4gIHRvTW9kZWwoZGF0ZTogTmdiRGF0ZVN0cnVjdCB8IG51bGwpOiBOZ2JEYXRlU3RydWN0IHwgbnVsbCB7XG4gICAgcmV0dXJuIChkYXRlICYmIGlzSW50ZWdlcihkYXRlLnllYXIpICYmIGlzSW50ZWdlcihkYXRlLm1vbnRoKSAmJiBpc0ludGVnZXIoZGF0ZS5kYXkpKSA/XG4gICAgICAgIHt5ZWFyOiBkYXRlLnllYXIsIG1vbnRoOiBkYXRlLm1vbnRoLCBkYXk6IGRhdGUuZGF5fSA6XG4gICAgICAgIG51bGw7XG4gIH1cbn1cbiJdfQ==