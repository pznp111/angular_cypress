import { __decorate } from "tslib";
import { Component, Input, ViewEncapsulation } from '@angular/core';
import { NgbDatepicker } from './datepicker';
import { NgbDatepickerI18n } from './datepicker-i18n';
import { NgbDatepickerKeyboardService } from './datepicker-keyboard-service';
import { NgbDatepickerService } from './datepicker-service';
/**
 * A component that renders one month including all the days, weekdays and week numbers. Can be used inside
 * the `<ng-template ngbDatepickerMonths></ng-template>` when you want to customize months layout.
 *
 * For a usage example, see [custom month layout demo](#/components/datepicker/examples#custommonth)
 *
 * @since 5.3.0
 */
var NgbDatepickerMonth = /** @class */ (function () {
    function NgbDatepickerMonth(i18n, datepicker, _keyboardService, _service) {
        this.i18n = i18n;
        this.datepicker = datepicker;
        this._keyboardService = _keyboardService;
        this._service = _service;
    }
    Object.defineProperty(NgbDatepickerMonth.prototype, "month", {
        /**
         * The first date of month to be rendered.
         *
         * This month must one of the months present in the
         * [datepicker state](#/components/datepicker/api#NgbDatepickerState).
         */
        set: function (month) {
            this.viewModel = this._service.getMonth(month);
        },
        enumerable: true,
        configurable: true
    });
    NgbDatepickerMonth.prototype.onKeyDown = function (event) { this._keyboardService.processKey(event, this.datepicker); };
    NgbDatepickerMonth.prototype.doSelect = function (day) {
        if (!day.context.disabled && !day.hidden) {
            this.datepicker.onDateSelect(day.date);
        }
    };
    NgbDatepickerMonth.ctorParameters = function () { return [
        { type: NgbDatepickerI18n },
        { type: NgbDatepicker },
        { type: NgbDatepickerKeyboardService },
        { type: NgbDatepickerService }
    ]; };
    __decorate([
        Input()
    ], NgbDatepickerMonth.prototype, "month", null);
    NgbDatepickerMonth = __decorate([
        Component({
            selector: 'ngb-datepicker-month',
            host: { 'role': 'grid', '(keydown)': 'onKeyDown($event)' },
            encapsulation: ViewEncapsulation.None,
            template: "\n    <div *ngIf=\"datepicker.showWeekdays\" class=\"ngb-dp-week ngb-dp-weekdays\" role=\"row\">\n      <div *ngIf=\"datepicker.showWeekNumbers\" class=\"ngb-dp-weekday ngb-dp-showweek\"></div>\n      <div *ngFor=\"let w of viewModel.weekdays\" class=\"ngb-dp-weekday small\" role=\"columnheader\">\n        {{ i18n.getWeekdayShortName(w) }}\n      </div>\n    </div>\n    <ng-template ngFor let-week [ngForOf]=\"viewModel.weeks\">\n      <div *ngIf=\"!week.collapsed\" class=\"ngb-dp-week\" role=\"row\">\n        <div *ngIf=\"datepicker.showWeekNumbers\" class=\"ngb-dp-week-number small text-muted\">{{ i18n.getWeekNumerals(week.number) }}</div>\n        <div *ngFor=\"let day of week.days\" (click)=\"doSelect(day); $event.preventDefault()\" class=\"ngb-dp-day\" role=\"gridcell\"\n          [class.disabled]=\"day.context.disabled\"\n          [tabindex]=\"day.tabindex\"\n          [class.hidden]=\"day.hidden\"\n          [class.ngb-dp-today]=\"day.context.today\"\n          [attr.aria-label]=\"day.ariaLabel\">\n          <ng-template [ngIf]=\"!day.hidden\">\n            <ng-template [ngTemplateOutlet]=\"datepicker.dayTemplate\" [ngTemplateOutletContext]=\"day.context\"></ng-template>\n          </ng-template>\n        </div>\n      </div>\n    </ng-template>\n  ",
            styles: ["ngb-datepicker-month{display:block}.ngb-dp-week-number,.ngb-dp-weekday{line-height:2rem;text-align:center;font-style:italic}.ngb-dp-weekday{color:#5bc0de;color:var(--info)}.ngb-dp-week{border-radius:.25rem;display:-ms-flexbox;display:flex}.ngb-dp-weekdays{border-bottom:1px solid rgba(0,0,0,.125);border-radius:0;background-color:#f8f9fa;background-color:var(--light)}.ngb-dp-day,.ngb-dp-week-number,.ngb-dp-weekday{width:2rem;height:2rem}.ngb-dp-day{cursor:pointer}.ngb-dp-day.disabled,.ngb-dp-day.hidden{cursor:default;pointer-events:none}.ngb-dp-day[tabindex=\"0\"]{z-index:1}"]
        })
    ], NgbDatepickerMonth);
    return NgbDatepickerMonth;
}());
export { NgbDatepickerMonth };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci1tb250aC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwLyIsInNvdXJjZXMiOlsiZGF0ZXBpY2tlci9kYXRlcGlja2VyLW1vbnRoLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUMsU0FBUyxFQUFFLEtBQUssRUFBRSxpQkFBaUIsRUFBQyxNQUFNLGVBQWUsQ0FBQztBQUNsRSxPQUFPLEVBQUMsYUFBYSxFQUFDLE1BQU0sY0FBYyxDQUFDO0FBQzNDLE9BQU8sRUFBQyxpQkFBaUIsRUFBQyxNQUFNLG1CQUFtQixDQUFDO0FBQ3BELE9BQU8sRUFBQyw0QkFBNEIsRUFBQyxNQUFNLCtCQUErQixDQUFDO0FBQzNFLE9BQU8sRUFBQyxvQkFBb0IsRUFBQyxNQUFNLHNCQUFzQixDQUFDO0FBSTFEOzs7Ozs7O0dBT0c7QUE4Qkg7SUFjRSw0QkFDVyxJQUF1QixFQUFTLFVBQXlCLEVBQ3hELGdCQUE4QyxFQUFVLFFBQThCO1FBRHZGLFNBQUksR0FBSixJQUFJLENBQW1CO1FBQVMsZUFBVSxHQUFWLFVBQVUsQ0FBZTtRQUN4RCxxQkFBZ0IsR0FBaEIsZ0JBQWdCLENBQThCO1FBQVUsYUFBUSxHQUFSLFFBQVEsQ0FBc0I7SUFBRyxDQUFDO0lBUnRHLHNCQUFJLHFDQUFLO1FBUFQ7Ozs7O1dBS0c7YUFFSCxVQUFVLEtBQW9CO1lBQzVCLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDakQsQ0FBQzs7O09BQUE7SUFRRCxzQ0FBUyxHQUFULFVBQVUsS0FBb0IsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsVUFBVSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBRTdGLHFDQUFRLEdBQVIsVUFBUyxHQUFpQjtRQUN4QixJQUFJLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxRQUFRLElBQUksQ0FBQyxHQUFHLENBQUMsTUFBTSxFQUFFO1lBQ3hDLElBQUksQ0FBQyxVQUFVLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsQ0FBQztTQUN4QztJQUNILENBQUM7O2dCQVRnQixpQkFBaUI7Z0JBQXFCLGFBQWE7Z0JBQ3RDLDRCQUE0QjtnQkFBb0Isb0JBQW9COztJQVJsRztRQURDLEtBQUssRUFBRTttREFHUDtJQVZVLGtCQUFrQjtRQTdCOUIsU0FBUyxDQUFDO1lBQ1QsUUFBUSxFQUFFLHNCQUFzQjtZQUNoQyxJQUFJLEVBQUUsRUFBQyxNQUFNLEVBQUUsTUFBTSxFQUFFLFdBQVcsRUFBRSxtQkFBbUIsRUFBQztZQUN4RCxhQUFhLEVBQUUsaUJBQWlCLENBQUMsSUFBSTtZQUVyQyxRQUFRLEVBQUUsOHZDQXNCVDs7U0FDRixDQUFDO09BQ1csa0JBQWtCLENBeUI5QjtJQUFELHlCQUFDO0NBQUEsQUF6QkQsSUF5QkM7U0F6Qlksa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb21wb25lbnQsIElucHV0LCBWaWV3RW5jYXBzdWxhdGlvbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQge05nYkRhdGVwaWNrZXJ9IGZyb20gJy4vZGF0ZXBpY2tlcic7XG5pbXBvcnQge05nYkRhdGVwaWNrZXJJMThufSBmcm9tICcuL2RhdGVwaWNrZXItaTE4bic7XG5pbXBvcnQge05nYkRhdGVwaWNrZXJLZXlib2FyZFNlcnZpY2V9IGZyb20gJy4vZGF0ZXBpY2tlci1rZXlib2FyZC1zZXJ2aWNlJztcbmltcG9ydCB7TmdiRGF0ZXBpY2tlclNlcnZpY2V9IGZyb20gJy4vZGF0ZXBpY2tlci1zZXJ2aWNlJztcbmltcG9ydCB7TW9udGhWaWV3TW9kZWwsIERheVZpZXdNb2RlbH0gZnJvbSAnLi9kYXRlcGlja2VyLXZpZXctbW9kZWwnO1xuaW1wb3J0IHtOZ2JEYXRlU3RydWN0fSBmcm9tICcuL25nYi1kYXRlLXN0cnVjdCc7XG5cbi8qKlxuICogQSBjb21wb25lbnQgdGhhdCByZW5kZXJzIG9uZSBtb250aCBpbmNsdWRpbmcgYWxsIHRoZSBkYXlzLCB3ZWVrZGF5cyBhbmQgd2VlayBudW1iZXJzLiBDYW4gYmUgdXNlZCBpbnNpZGVcbiAqIHRoZSBgPG5nLXRlbXBsYXRlIG5nYkRhdGVwaWNrZXJNb250aHM+PC9uZy10ZW1wbGF0ZT5gIHdoZW4geW91IHdhbnQgdG8gY3VzdG9taXplIG1vbnRocyBsYXlvdXQuXG4gKlxuICogRm9yIGEgdXNhZ2UgZXhhbXBsZSwgc2VlIFtjdXN0b20gbW9udGggbGF5b3V0IGRlbW9dKCMvY29tcG9uZW50cy9kYXRlcGlja2VyL2V4YW1wbGVzI2N1c3RvbW1vbnRoKVxuICpcbiAqIEBzaW5jZSA1LjMuMFxuICovXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZ2ItZGF0ZXBpY2tlci1tb250aCcsXG4gIGhvc3Q6IHsncm9sZSc6ICdncmlkJywgJyhrZXlkb3duKSc6ICdvbktleURvd24oJGV2ZW50KSd9LFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBzdHlsZVVybHM6IFsnLi9kYXRlcGlja2VyLW1vbnRoLnNjc3MnXSxcbiAgdGVtcGxhdGU6IGBcbiAgICA8ZGl2ICpuZ0lmPVwiZGF0ZXBpY2tlci5zaG93V2Vla2RheXNcIiBjbGFzcz1cIm5nYi1kcC13ZWVrIG5nYi1kcC13ZWVrZGF5c1wiIHJvbGU9XCJyb3dcIj5cbiAgICAgIDxkaXYgKm5nSWY9XCJkYXRlcGlja2VyLnNob3dXZWVrTnVtYmVyc1wiIGNsYXNzPVwibmdiLWRwLXdlZWtkYXkgbmdiLWRwLXNob3d3ZWVrXCI+PC9kaXY+XG4gICAgICA8ZGl2ICpuZ0Zvcj1cImxldCB3IG9mIHZpZXdNb2RlbC53ZWVrZGF5c1wiIGNsYXNzPVwibmdiLWRwLXdlZWtkYXkgc21hbGxcIiByb2xlPVwiY29sdW1uaGVhZGVyXCI+XG4gICAgICAgIHt7IGkxOG4uZ2V0V2Vla2RheVNob3J0TmFtZSh3KSB9fVxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gICAgPG5nLXRlbXBsYXRlIG5nRm9yIGxldC13ZWVrIFtuZ0Zvck9mXT1cInZpZXdNb2RlbC53ZWVrc1wiPlxuICAgICAgPGRpdiAqbmdJZj1cIiF3ZWVrLmNvbGxhcHNlZFwiIGNsYXNzPVwibmdiLWRwLXdlZWtcIiByb2xlPVwicm93XCI+XG4gICAgICAgIDxkaXYgKm5nSWY9XCJkYXRlcGlja2VyLnNob3dXZWVrTnVtYmVyc1wiIGNsYXNzPVwibmdiLWRwLXdlZWstbnVtYmVyIHNtYWxsIHRleHQtbXV0ZWRcIj57eyBpMThuLmdldFdlZWtOdW1lcmFscyh3ZWVrLm51bWJlcikgfX08L2Rpdj5cbiAgICAgICAgPGRpdiAqbmdGb3I9XCJsZXQgZGF5IG9mIHdlZWsuZGF5c1wiIChjbGljayk9XCJkb1NlbGVjdChkYXkpOyAkZXZlbnQucHJldmVudERlZmF1bHQoKVwiIGNsYXNzPVwibmdiLWRwLWRheVwiIHJvbGU9XCJncmlkY2VsbFwiXG4gICAgICAgICAgW2NsYXNzLmRpc2FibGVkXT1cImRheS5jb250ZXh0LmRpc2FibGVkXCJcbiAgICAgICAgICBbdGFiaW5kZXhdPVwiZGF5LnRhYmluZGV4XCJcbiAgICAgICAgICBbY2xhc3MuaGlkZGVuXT1cImRheS5oaWRkZW5cIlxuICAgICAgICAgIFtjbGFzcy5uZ2ItZHAtdG9kYXldPVwiZGF5LmNvbnRleHQudG9kYXlcIlxuICAgICAgICAgIFthdHRyLmFyaWEtbGFiZWxdPVwiZGF5LmFyaWFMYWJlbFwiPlxuICAgICAgICAgIDxuZy10ZW1wbGF0ZSBbbmdJZl09XCIhZGF5LmhpZGRlblwiPlxuICAgICAgICAgICAgPG5nLXRlbXBsYXRlIFtuZ1RlbXBsYXRlT3V0bGV0XT1cImRhdGVwaWNrZXIuZGF5VGVtcGxhdGVcIiBbbmdUZW1wbGF0ZU91dGxldENvbnRleHRdPVwiZGF5LmNvbnRleHRcIj48L25nLXRlbXBsYXRlPlxuICAgICAgICAgIDwvbmctdGVtcGxhdGU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9uZy10ZW1wbGF0ZT5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBOZ2JEYXRlcGlja2VyTW9udGgge1xuICAvKipcbiAgICogVGhlIGZpcnN0IGRhdGUgb2YgbW9udGggdG8gYmUgcmVuZGVyZWQuXG4gICAqXG4gICAqIFRoaXMgbW9udGggbXVzdCBvbmUgb2YgdGhlIG1vbnRocyBwcmVzZW50IGluIHRoZVxuICAgKiBbZGF0ZXBpY2tlciBzdGF0ZV0oIy9jb21wb25lbnRzL2RhdGVwaWNrZXIvYXBpI05nYkRhdGVwaWNrZXJTdGF0ZSkuXG4gICAqL1xuICBASW5wdXQoKVxuICBzZXQgbW9udGgobW9udGg6IE5nYkRhdGVTdHJ1Y3QpIHtcbiAgICB0aGlzLnZpZXdNb2RlbCA9IHRoaXMuX3NlcnZpY2UuZ2V0TW9udGgobW9udGgpO1xuICB9XG5cbiAgdmlld01vZGVsOiBNb250aFZpZXdNb2RlbDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICAgIHB1YmxpYyBpMThuOiBOZ2JEYXRlcGlja2VySTE4biwgcHVibGljIGRhdGVwaWNrZXI6IE5nYkRhdGVwaWNrZXIsXG4gICAgICBwcml2YXRlIF9rZXlib2FyZFNlcnZpY2U6IE5nYkRhdGVwaWNrZXJLZXlib2FyZFNlcnZpY2UsIHByaXZhdGUgX3NlcnZpY2U6IE5nYkRhdGVwaWNrZXJTZXJ2aWNlKSB7fVxuXG4gIG9uS2V5RG93bihldmVudDogS2V5Ym9hcmRFdmVudCkgeyB0aGlzLl9rZXlib2FyZFNlcnZpY2UucHJvY2Vzc0tleShldmVudCwgdGhpcy5kYXRlcGlja2VyKTsgfVxuXG4gIGRvU2VsZWN0KGRheTogRGF5Vmlld01vZGVsKSB7XG4gICAgaWYgKCFkYXkuY29udGV4dC5kaXNhYmxlZCAmJiAhZGF5LmhpZGRlbikge1xuICAgICAgdGhpcy5kYXRlcGlja2VyLm9uRGF0ZVNlbGVjdChkYXkuZGF0ZSk7XG4gICAgfVxuICB9XG59XG4iXX0=