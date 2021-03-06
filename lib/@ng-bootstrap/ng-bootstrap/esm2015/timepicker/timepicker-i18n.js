import { __decorate, __param } from "tslib";
import { Inject, Injectable, LOCALE_ID } from '@angular/core';
import { FormStyle, getLocaleDayPeriods, TranslationWidth } from '@angular/common';
import * as i0 from "@angular/core";
export function NGB_TIMEPICKER_I18N_FACTORY(locale) {
    return new NgbTimepickerI18nDefault(locale);
}
/**
 * Type of the service supplying day periods (for example, 'AM' and 'PM') to NgbTimepicker component.
 * The default implementation of this service honors the Angular locale, and uses the registered locale data,
 * as explained in the Angular i18n guide.
 */
let NgbTimepickerI18n = class NgbTimepickerI18n {
};
NgbTimepickerI18n.ɵprov = i0.ɵɵdefineInjectable({ factory: function NgbTimepickerI18n_Factory() { return NGB_TIMEPICKER_I18N_FACTORY(i0.ɵɵinject(i0.LOCALE_ID)); }, token: NgbTimepickerI18n, providedIn: "root" });
NgbTimepickerI18n = __decorate([
    Injectable({ providedIn: 'root', useFactory: NGB_TIMEPICKER_I18N_FACTORY, deps: [LOCALE_ID] })
], NgbTimepickerI18n);
export { NgbTimepickerI18n };
let NgbTimepickerI18nDefault = class NgbTimepickerI18nDefault extends NgbTimepickerI18n {
    constructor(locale) {
        super();
        this._periods = getLocaleDayPeriods(locale, FormStyle.Standalone, TranslationWidth.Narrow);
    }
    getMorningPeriod() { return this._periods[0]; }
    getAfternoonPeriod() { return this._periods[1]; }
};
NgbTimepickerI18nDefault.ctorParameters = () => [
    { type: String, decorators: [{ type: Inject, args: [LOCALE_ID,] }] }
];
NgbTimepickerI18nDefault = __decorate([
    Injectable(),
    __param(0, Inject(LOCALE_ID))
], NgbTimepickerI18nDefault);
export { NgbTimepickerI18nDefault };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGltZXBpY2tlci1pMThuLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQG5nLWJvb3RzdHJhcC9uZy1ib290c3RyYXAvIiwic291cmNlcyI6WyJ0aW1lcGlja2VyL3RpbWVwaWNrZXItaTE4bi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLE1BQU0sRUFBRSxVQUFVLEVBQUUsU0FBUyxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBQzVELE9BQU8sRUFBQyxTQUFTLEVBQUUsbUJBQW1CLEVBQUUsZ0JBQWdCLEVBQUMsTUFBTSxpQkFBaUIsQ0FBQzs7QUFFakYsTUFBTSxVQUFVLDJCQUEyQixDQUFDLE1BQU07SUFDaEQsT0FBTyxJQUFJLHdCQUF3QixDQUFDLE1BQU0sQ0FBQyxDQUFDO0FBQzlDLENBQUM7QUFFRDs7OztHQUlHO0FBRUgsSUFBc0IsaUJBQWlCLEdBQXZDLE1BQXNCLGlCQUFpQjtDQVV0QyxDQUFBOztBQVZxQixpQkFBaUI7SUFEdEMsVUFBVSxDQUFDLEVBQUMsVUFBVSxFQUFFLE1BQU0sRUFBRSxVQUFVLEVBQUUsMkJBQTJCLEVBQUUsSUFBSSxFQUFFLENBQUMsU0FBUyxDQUFDLEVBQUMsQ0FBQztHQUN2RSxpQkFBaUIsQ0FVdEM7U0FWcUIsaUJBQWlCO0FBYXZDLElBQWEsd0JBQXdCLEdBQXJDLE1BQWEsd0JBQXlCLFNBQVEsaUJBQWlCO0lBRzdELFlBQStCLE1BQWM7UUFDM0MsS0FBSyxFQUFFLENBQUM7UUFFUixJQUFJLENBQUMsUUFBUSxHQUFHLG1CQUFtQixDQUFDLE1BQU0sRUFBRSxTQUFTLENBQUMsVUFBVSxFQUFFLGdCQUFnQixDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQzdGLENBQUM7SUFFRCxnQkFBZ0IsS0FBYSxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRXZELGtCQUFrQixLQUFhLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Q0FDMUQsQ0FBQTs7eUNBVGMsTUFBTSxTQUFDLFNBQVM7O0FBSGxCLHdCQUF3QjtJQURwQyxVQUFVLEVBQUU7SUFJRSxXQUFBLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQTtHQUhuQix3QkFBd0IsQ0FZcEM7U0FaWSx3QkFBd0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdCwgSW5qZWN0YWJsZSwgTE9DQUxFX0lEfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7Rm9ybVN0eWxlLCBnZXRMb2NhbGVEYXlQZXJpb2RzLCBUcmFuc2xhdGlvbldpZHRofSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuXG5leHBvcnQgZnVuY3Rpb24gTkdCX1RJTUVQSUNLRVJfSTE4Tl9GQUNUT1JZKGxvY2FsZSkge1xuICByZXR1cm4gbmV3IE5nYlRpbWVwaWNrZXJJMThuRGVmYXVsdChsb2NhbGUpO1xufVxuXG4vKipcbiAqIFR5cGUgb2YgdGhlIHNlcnZpY2Ugc3VwcGx5aW5nIGRheSBwZXJpb2RzIChmb3IgZXhhbXBsZSwgJ0FNJyBhbmQgJ1BNJykgdG8gTmdiVGltZXBpY2tlciBjb21wb25lbnQuXG4gKiBUaGUgZGVmYXVsdCBpbXBsZW1lbnRhdGlvbiBvZiB0aGlzIHNlcnZpY2UgaG9ub3JzIHRoZSBBbmd1bGFyIGxvY2FsZSwgYW5kIHVzZXMgdGhlIHJlZ2lzdGVyZWQgbG9jYWxlIGRhdGEsXG4gKiBhcyBleHBsYWluZWQgaW4gdGhlIEFuZ3VsYXIgaTE4biBndWlkZS5cbiAqL1xuQEluamVjdGFibGUoe3Byb3ZpZGVkSW46ICdyb290JywgdXNlRmFjdG9yeTogTkdCX1RJTUVQSUNLRVJfSTE4Tl9GQUNUT1JZLCBkZXBzOiBbTE9DQUxFX0lEXX0pXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgTmdiVGltZXBpY2tlckkxOG4ge1xuICAvKipcbiAgICogUmV0dXJucyB0aGUgbmFtZSBmb3IgdGhlIHBlcmlvZCBiZWZvcmUgbWlkZGF5LlxuICAgKi9cbiAgYWJzdHJhY3QgZ2V0TW9ybmluZ1BlcmlvZCgpOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFJldHVybnMgdGhlIG5hbWUgZm9yIHRoZSBwZXJpb2QgYWZ0ZXIgbWlkZGF5LlxuICAgKi9cbiAgYWJzdHJhY3QgZ2V0QWZ0ZXJub29uUGVyaW9kKCk6IHN0cmluZztcbn1cblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIE5nYlRpbWVwaWNrZXJJMThuRGVmYXVsdCBleHRlbmRzIE5nYlRpbWVwaWNrZXJJMThuIHtcbiAgcHJpdmF0ZSBfcGVyaW9kczogW3N0cmluZywgc3RyaW5nXTtcblxuICBjb25zdHJ1Y3RvcihASW5qZWN0KExPQ0FMRV9JRCkgbG9jYWxlOiBzdHJpbmcpIHtcbiAgICBzdXBlcigpO1xuXG4gICAgdGhpcy5fcGVyaW9kcyA9IGdldExvY2FsZURheVBlcmlvZHMobG9jYWxlLCBGb3JtU3R5bGUuU3RhbmRhbG9uZSwgVHJhbnNsYXRpb25XaWR0aC5OYXJyb3cpO1xuICB9XG5cbiAgZ2V0TW9ybmluZ1BlcmlvZCgpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5fcGVyaW9kc1swXTsgfVxuXG4gIGdldEFmdGVybm9vblBlcmlvZCgpOiBzdHJpbmcgeyByZXR1cm4gdGhpcy5fcGVyaW9kc1sxXTsgfVxufVxuIl19