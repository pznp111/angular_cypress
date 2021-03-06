import { __decorate } from "tslib";
import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, ViewEncapsulation, AfterViewChecked, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { NgbDate } from './ngb-date';
import { toInteger } from '../util/util';
import { NgbDatepickerI18n } from './datepicker-i18n';
let NgbDatepickerNavigationSelect = class NgbDatepickerNavigationSelect {
    constructor(i18n, _renderer) {
        this.i18n = i18n;
        this._renderer = _renderer;
        this.select = new EventEmitter();
        this._month = -1;
        this._year = -1;
    }
    changeMonth(month) { this.select.emit(new NgbDate(this.date.year, toInteger(month), 1)); }
    changeYear(year) { this.select.emit(new NgbDate(toInteger(year), this.date.month, 1)); }
    ngAfterViewChecked() {
        if (this.date) {
            if (this.date.month !== this._month) {
                this._month = this.date.month;
                this._renderer.setProperty(this.monthSelect.nativeElement, 'value', this._month);
            }
            if (this.date.year !== this._year) {
                this._year = this.date.year;
                this._renderer.setProperty(this.yearSelect.nativeElement, 'value', this._year);
            }
        }
    }
};
NgbDatepickerNavigationSelect.ctorParameters = () => [
    { type: NgbDatepickerI18n },
    { type: Renderer2 }
];
__decorate([
    Input()
], NgbDatepickerNavigationSelect.prototype, "date", void 0);
__decorate([
    Input()
], NgbDatepickerNavigationSelect.prototype, "disabled", void 0);
__decorate([
    Input()
], NgbDatepickerNavigationSelect.prototype, "months", void 0);
__decorate([
    Input()
], NgbDatepickerNavigationSelect.prototype, "years", void 0);
__decorate([
    Output()
], NgbDatepickerNavigationSelect.prototype, "select", void 0);
__decorate([
    ViewChild('month', { static: true, read: ElementRef })
], NgbDatepickerNavigationSelect.prototype, "monthSelect", void 0);
__decorate([
    ViewChild('year', { static: true, read: ElementRef })
], NgbDatepickerNavigationSelect.prototype, "yearSelect", void 0);
NgbDatepickerNavigationSelect = __decorate([
    Component({
        selector: 'ngb-datepicker-navigation-select',
        changeDetection: ChangeDetectionStrategy.OnPush,
        encapsulation: ViewEncapsulation.None,
        template: `
    <select #month
      [disabled]="disabled"
      class="custom-select"
      i18n-aria-label="@@ngb.datepicker.select-month" aria-label="Select month"
      i18n-title="@@ngb.datepicker.select-month" title="Select month"
      (change)="changeMonth($any($event).target.value)">
        <option *ngFor="let m of months" [attr.aria-label]="i18n.getMonthFullName(m, date?.year)"
                [value]="m">{{ i18n.getMonthShortName(m, date?.year) }}</option>
    </select><select #year
      [disabled]="disabled"
      class="custom-select"
      i18n-aria-label="@@ngb.datepicker.select-year" aria-label="Select year"
      i18n-title="@@ngb.datepicker.select-year" title="Select year"
      (change)="changeYear($any($event).target.value)">
        <option *ngFor="let y of years" [value]="y">{{ i18n.getYearNumerals(y) }}</option>
    </select>
  `,
        styles: ["ngb-datepicker-navigation-select>.custom-select{-ms-flex:1 1 auto;flex:1 1 auto;padding:0 .5rem;font-size:.875rem;height:1.85rem}ngb-datepicker-navigation-select>.custom-select:focus{z-index:1}ngb-datepicker-navigation-select>.custom-select::-ms-value{background-color:transparent!important}"]
    })
], NgbDatepickerNavigationSelect);
export { NgbDatepickerNavigationSelect };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci1uYXZpZ2F0aW9uLXNlbGVjdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwLyIsInNvdXJjZXMiOlsiZGF0ZXBpY2tlci9kYXRlcGlja2VyLW5hdmlnYXRpb24tc2VsZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCxNQUFNLEVBQ04sWUFBWSxFQUNaLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsZ0JBQWdCLEVBQ2hCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsU0FBUyxFQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBQyxPQUFPLEVBQUMsTUFBTSxZQUFZLENBQUM7QUFDbkMsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGNBQWMsQ0FBQztBQUN2QyxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQztBQTBCcEQsSUFBYSw2QkFBNkIsR0FBMUMsTUFBYSw2QkFBNkI7SUFjeEMsWUFBbUIsSUFBdUIsRUFBVSxTQUFvQjtRQUFyRCxTQUFJLEdBQUosSUFBSSxDQUFtQjtRQUFVLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFSOUQsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7UUFLdkMsV0FBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ1osVUFBSyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBRXdELENBQUM7SUFFNUUsV0FBVyxDQUFDLEtBQWEsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFbEcsVUFBVSxDQUFDLElBQVksSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFaEcsa0JBQWtCO1FBQ2hCLElBQUksSUFBSSxDQUFDLElBQUksRUFBRTtZQUNiLElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEtBQUssSUFBSSxDQUFDLE1BQU0sRUFBRTtnQkFDbkMsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQztnQkFDOUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxhQUFhLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQzthQUNsRjtZQUNELElBQUksSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssSUFBSSxDQUFDLEtBQUssRUFBRTtnQkFDakMsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQztnQkFDNUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxhQUFhLEVBQUUsT0FBTyxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUNoRjtTQUNGO0lBQ0gsQ0FBQztDQUNGLENBQUE7O1lBbEIwQixpQkFBaUI7WUFBcUIsU0FBUzs7QUFiL0Q7SUFBUixLQUFLLEVBQUU7MkRBQWU7QUFDZDtJQUFSLEtBQUssRUFBRTsrREFBbUI7QUFDbEI7SUFBUixLQUFLLEVBQUU7NkRBQWtCO0FBQ2pCO0lBQVIsS0FBSyxFQUFFOzREQUFpQjtBQUVmO0lBQVQsTUFBTSxFQUFFOzZEQUFzQztBQUVPO0lBQXJELFNBQVMsQ0FBQyxPQUFPLEVBQUUsRUFBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUMsQ0FBQztrRUFBeUI7QUFDekI7SUFBcEQsU0FBUyxDQUFDLE1BQU0sRUFBRSxFQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBQyxDQUFDO2lFQUF3QjtBQVRqRSw2QkFBNkI7SUF4QnpDLFNBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxrQ0FBa0M7UUFDNUMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07UUFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7UUFFckMsUUFBUSxFQUFFOzs7Ozs7Ozs7Ozs7Ozs7OztHQWlCVDs7S0FDRixDQUFDO0dBQ1csNkJBQTZCLENBZ0N6QztTQWhDWSw2QkFBNkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBDb21wb25lbnQsXG4gIElucHV0LFxuICBPdXRwdXQsXG4gIEV2ZW50RW1pdHRlcixcbiAgQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3ksXG4gIFZpZXdFbmNhcHN1bGF0aW9uLFxuICBBZnRlclZpZXdDaGVja2VkLFxuICBWaWV3Q2hpbGQsXG4gIEVsZW1lbnRSZWYsXG4gIFJlbmRlcmVyMlxufSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7TmdiRGF0ZX0gZnJvbSAnLi9uZ2ItZGF0ZSc7XG5pbXBvcnQge3RvSW50ZWdlcn0gZnJvbSAnLi4vdXRpbC91dGlsJztcbmltcG9ydCB7TmdiRGF0ZXBpY2tlckkxOG59IGZyb20gJy4vZGF0ZXBpY2tlci1pMThuJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnbmdiLWRhdGVwaWNrZXItbmF2aWdhdGlvbi1zZWxlY3QnLFxuICBjaGFuZ2VEZXRlY3Rpb246IENoYW5nZURldGVjdGlvblN0cmF0ZWd5Lk9uUHVzaCxcbiAgZW5jYXBzdWxhdGlvbjogVmlld0VuY2Fwc3VsYXRpb24uTm9uZSxcbiAgc3R5bGVVcmxzOiBbJy4vZGF0ZXBpY2tlci1uYXZpZ2F0aW9uLXNlbGVjdC5zY3NzJ10sXG4gIHRlbXBsYXRlOiBgXG4gICAgPHNlbGVjdCAjbW9udGhcbiAgICAgIFtkaXNhYmxlZF09XCJkaXNhYmxlZFwiXG4gICAgICBjbGFzcz1cImN1c3RvbS1zZWxlY3RcIlxuICAgICAgaTE4bi1hcmlhLWxhYmVsPVwiQEBuZ2IuZGF0ZXBpY2tlci5zZWxlY3QtbW9udGhcIiBhcmlhLWxhYmVsPVwiU2VsZWN0IG1vbnRoXCJcbiAgICAgIGkxOG4tdGl0bGU9XCJAQG5nYi5kYXRlcGlja2VyLnNlbGVjdC1tb250aFwiIHRpdGxlPVwiU2VsZWN0IG1vbnRoXCJcbiAgICAgIChjaGFuZ2UpPVwiY2hhbmdlTW9udGgoJGFueSgkZXZlbnQpLnRhcmdldC52YWx1ZSlcIj5cbiAgICAgICAgPG9wdGlvbiAqbmdGb3I9XCJsZXQgbSBvZiBtb250aHNcIiBbYXR0ci5hcmlhLWxhYmVsXT1cImkxOG4uZ2V0TW9udGhGdWxsTmFtZShtLCBkYXRlPy55ZWFyKVwiXG4gICAgICAgICAgICAgICAgW3ZhbHVlXT1cIm1cIj57eyBpMThuLmdldE1vbnRoU2hvcnROYW1lKG0sIGRhdGU/LnllYXIpIH19PC9vcHRpb24+XG4gICAgPC9zZWxlY3Q+PHNlbGVjdCAjeWVhclxuICAgICAgW2Rpc2FibGVkXT1cImRpc2FibGVkXCJcbiAgICAgIGNsYXNzPVwiY3VzdG9tLXNlbGVjdFwiXG4gICAgICBpMThuLWFyaWEtbGFiZWw9XCJAQG5nYi5kYXRlcGlja2VyLnNlbGVjdC15ZWFyXCIgYXJpYS1sYWJlbD1cIlNlbGVjdCB5ZWFyXCJcbiAgICAgIGkxOG4tdGl0bGU9XCJAQG5nYi5kYXRlcGlja2VyLnNlbGVjdC15ZWFyXCIgdGl0bGU9XCJTZWxlY3QgeWVhclwiXG4gICAgICAoY2hhbmdlKT1cImNoYW5nZVllYXIoJGFueSgkZXZlbnQpLnRhcmdldC52YWx1ZSlcIj5cbiAgICAgICAgPG9wdGlvbiAqbmdGb3I9XCJsZXQgeSBvZiB5ZWFyc1wiIFt2YWx1ZV09XCJ5XCI+e3sgaTE4bi5nZXRZZWFyTnVtZXJhbHMoeSkgfX08L29wdGlvbj5cbiAgICA8L3NlbGVjdD5cbiAgYFxufSlcbmV4cG9ydCBjbGFzcyBOZ2JEYXRlcGlja2VyTmF2aWdhdGlvblNlbGVjdCBpbXBsZW1lbnRzIEFmdGVyVmlld0NoZWNrZWQge1xuICBASW5wdXQoKSBkYXRlOiBOZ2JEYXRlO1xuICBASW5wdXQoKSBkaXNhYmxlZDogYm9vbGVhbjtcbiAgQElucHV0KCkgbW9udGhzOiBudW1iZXJbXTtcbiAgQElucHV0KCkgeWVhcnM6IG51bWJlcltdO1xuXG4gIEBPdXRwdXQoKSBzZWxlY3QgPSBuZXcgRXZlbnRFbWl0dGVyPE5nYkRhdGU+KCk7XG5cbiAgQFZpZXdDaGlsZCgnbW9udGgnLCB7c3RhdGljOiB0cnVlLCByZWFkOiBFbGVtZW50UmVmfSkgbW9udGhTZWxlY3Q6IEVsZW1lbnRSZWY7XG4gIEBWaWV3Q2hpbGQoJ3llYXInLCB7c3RhdGljOiB0cnVlLCByZWFkOiBFbGVtZW50UmVmfSkgeWVhclNlbGVjdDogRWxlbWVudFJlZjtcblxuICBwcml2YXRlIF9tb250aCA9IC0xO1xuICBwcml2YXRlIF95ZWFyID0gLTE7XG5cbiAgY29uc3RydWN0b3IocHVibGljIGkxOG46IE5nYkRhdGVwaWNrZXJJMThuLCBwcml2YXRlIF9yZW5kZXJlcjogUmVuZGVyZXIyKSB7fVxuXG4gIGNoYW5nZU1vbnRoKG1vbnRoOiBzdHJpbmcpIHsgdGhpcy5zZWxlY3QuZW1pdChuZXcgTmdiRGF0ZSh0aGlzLmRhdGUueWVhciwgdG9JbnRlZ2VyKG1vbnRoKSwgMSkpOyB9XG5cbiAgY2hhbmdlWWVhcih5ZWFyOiBzdHJpbmcpIHsgdGhpcy5zZWxlY3QuZW1pdChuZXcgTmdiRGF0ZSh0b0ludGVnZXIoeWVhciksIHRoaXMuZGF0ZS5tb250aCwgMSkpOyB9XG5cbiAgbmdBZnRlclZpZXdDaGVja2VkKCkge1xuICAgIGlmICh0aGlzLmRhdGUpIHtcbiAgICAgIGlmICh0aGlzLmRhdGUubW9udGggIT09IHRoaXMuX21vbnRoKSB7XG4gICAgICAgIHRoaXMuX21vbnRoID0gdGhpcy5kYXRlLm1vbnRoO1xuICAgICAgICB0aGlzLl9yZW5kZXJlci5zZXRQcm9wZXJ0eSh0aGlzLm1vbnRoU2VsZWN0Lm5hdGl2ZUVsZW1lbnQsICd2YWx1ZScsIHRoaXMuX21vbnRoKTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLmRhdGUueWVhciAhPT0gdGhpcy5feWVhcikge1xuICAgICAgICB0aGlzLl95ZWFyID0gdGhpcy5kYXRlLnllYXI7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFByb3BlcnR5KHRoaXMueWVhclNlbGVjdC5uYXRpdmVFbGVtZW50LCAndmFsdWUnLCB0aGlzLl95ZWFyKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbn1cbiJdfQ==