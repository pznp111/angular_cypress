import { __decorate } from "tslib";
import { Component, Input, Output, EventEmitter, ChangeDetectionStrategy, ViewEncapsulation, AfterViewChecked, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { NgbDate } from './ngb-date';
import { toInteger } from '../util/util';
import { NgbDatepickerI18n } from './datepicker-i18n';
var NgbDatepickerNavigationSelect = /** @class */ (function () {
    function NgbDatepickerNavigationSelect(i18n, _renderer) {
        this.i18n = i18n;
        this._renderer = _renderer;
        this.select = new EventEmitter();
        this._month = -1;
        this._year = -1;
    }
    NgbDatepickerNavigationSelect.prototype.changeMonth = function (month) { this.select.emit(new NgbDate(this.date.year, toInteger(month), 1)); };
    NgbDatepickerNavigationSelect.prototype.changeYear = function (year) { this.select.emit(new NgbDate(toInteger(year), this.date.month, 1)); };
    NgbDatepickerNavigationSelect.prototype.ngAfterViewChecked = function () {
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
    };
    NgbDatepickerNavigationSelect.ctorParameters = function () { return [
        { type: NgbDatepickerI18n },
        { type: Renderer2 }
    ]; };
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
            template: "\n    <select #month\n      [disabled]=\"disabled\"\n      class=\"custom-select\"\n      i18n-aria-label=\"@@ngb.datepicker.select-month\" aria-label=\"Select month\"\n      i18n-title=\"@@ngb.datepicker.select-month\" title=\"Select month\"\n      (change)=\"changeMonth($any($event).target.value)\">\n        <option *ngFor=\"let m of months\" [attr.aria-label]=\"i18n.getMonthFullName(m, date?.year)\"\n                [value]=\"m\">{{ i18n.getMonthShortName(m, date?.year) }}</option>\n    </select><select #year\n      [disabled]=\"disabled\"\n      class=\"custom-select\"\n      i18n-aria-label=\"@@ngb.datepicker.select-year\" aria-label=\"Select year\"\n      i18n-title=\"@@ngb.datepicker.select-year\" title=\"Select year\"\n      (change)=\"changeYear($any($event).target.value)\">\n        <option *ngFor=\"let y of years\" [value]=\"y\">{{ i18n.getYearNumerals(y) }}</option>\n    </select>\n  ",
            styles: ["ngb-datepicker-navigation-select>.custom-select{-ms-flex:1 1 auto;flex:1 1 auto;padding:0 .5rem;font-size:.875rem;height:1.85rem}ngb-datepicker-navigation-select>.custom-select:focus{z-index:1}ngb-datepicker-navigation-select>.custom-select::-ms-value{background-color:transparent!important}"]
        })
    ], NgbDatepickerNavigationSelect);
    return NgbDatepickerNavigationSelect;
}());
export { NgbDatepickerNavigationSelect };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGF0ZXBpY2tlci1uYXZpZ2F0aW9uLXNlbGVjdC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL0BuZy1ib290c3RyYXAvbmctYm9vdHN0cmFwLyIsInNvdXJjZXMiOlsiZGF0ZXBpY2tlci9kYXRlcGlja2VyLW5hdmlnYXRpb24tc2VsZWN0LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQ0wsU0FBUyxFQUNULEtBQUssRUFDTCxNQUFNLEVBQ04sWUFBWSxFQUNaLHVCQUF1QixFQUN2QixpQkFBaUIsRUFDakIsZ0JBQWdCLEVBQ2hCLFNBQVMsRUFDVCxVQUFVLEVBQ1YsU0FBUyxFQUNWLE1BQU0sZUFBZSxDQUFDO0FBQ3ZCLE9BQU8sRUFBQyxPQUFPLEVBQUMsTUFBTSxZQUFZLENBQUM7QUFDbkMsT0FBTyxFQUFDLFNBQVMsRUFBQyxNQUFNLGNBQWMsQ0FBQztBQUN2QyxPQUFPLEVBQUMsaUJBQWlCLEVBQUMsTUFBTSxtQkFBbUIsQ0FBQztBQTBCcEQ7SUFjRSx1Q0FBbUIsSUFBdUIsRUFBVSxTQUFvQjtRQUFyRCxTQUFJLEdBQUosSUFBSSxDQUFtQjtRQUFVLGNBQVMsR0FBVCxTQUFTLENBQVc7UUFSOUQsV0FBTSxHQUFHLElBQUksWUFBWSxFQUFXLENBQUM7UUFLdkMsV0FBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ1osVUFBSyxHQUFHLENBQUMsQ0FBQyxDQUFDO0lBRXdELENBQUM7SUFFNUUsbURBQVcsR0FBWCxVQUFZLEtBQWEsSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksRUFBRSxTQUFTLENBQUMsS0FBSyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFbEcsa0RBQVUsR0FBVixVQUFXLElBQVksSUFBSSxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLE9BQU8sQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFFaEcsMERBQWtCLEdBQWxCO1FBQ0UsSUFBSSxJQUFJLENBQUMsSUFBSSxFQUFFO1lBQ2IsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLEtBQUssS0FBSyxJQUFJLENBQUMsTUFBTSxFQUFFO2dCQUNuQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDO2dCQUM5QixJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLGFBQWEsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQ2xGO1lBQ0QsSUFBSSxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksS0FBSyxJQUFJLENBQUMsS0FBSyxFQUFFO2dCQUNqQyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2dCQUM1QixJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxPQUFPLEVBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQ2hGO1NBQ0Y7SUFDSCxDQUFDOztnQkFqQndCLGlCQUFpQjtnQkFBcUIsU0FBUzs7SUFiL0Q7UUFBUixLQUFLLEVBQUU7K0RBQWU7SUFDZDtRQUFSLEtBQUssRUFBRTttRUFBbUI7SUFDbEI7UUFBUixLQUFLLEVBQUU7aUVBQWtCO0lBQ2pCO1FBQVIsS0FBSyxFQUFFO2dFQUFpQjtJQUVmO1FBQVQsTUFBTSxFQUFFO2lFQUFzQztJQUVPO1FBQXJELFNBQVMsQ0FBQyxPQUFPLEVBQUUsRUFBQyxNQUFNLEVBQUUsSUFBSSxFQUFFLElBQUksRUFBRSxVQUFVLEVBQUMsQ0FBQztzRUFBeUI7SUFDekI7UUFBcEQsU0FBUyxDQUFDLE1BQU0sRUFBRSxFQUFDLE1BQU0sRUFBRSxJQUFJLEVBQUUsSUFBSSxFQUFFLFVBQVUsRUFBQyxDQUFDO3FFQUF3QjtJQVRqRSw2QkFBNkI7UUF4QnpDLFNBQVMsQ0FBQztZQUNULFFBQVEsRUFBRSxrQ0FBa0M7WUFDNUMsZUFBZSxFQUFFLHVCQUF1QixDQUFDLE1BQU07WUFDL0MsYUFBYSxFQUFFLGlCQUFpQixDQUFDLElBQUk7WUFFckMsUUFBUSxFQUFFLCs0QkFpQlQ7O1NBQ0YsQ0FBQztPQUNXLDZCQUE2QixDQWdDekM7SUFBRCxvQ0FBQztDQUFBLEFBaENELElBZ0NDO1NBaENZLDZCQUE2QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XG4gIENvbXBvbmVudCxcbiAgSW5wdXQsXG4gIE91dHB1dCxcbiAgRXZlbnRFbWl0dGVyLFxuICBDaGFuZ2VEZXRlY3Rpb25TdHJhdGVneSxcbiAgVmlld0VuY2Fwc3VsYXRpb24sXG4gIEFmdGVyVmlld0NoZWNrZWQsXG4gIFZpZXdDaGlsZCxcbiAgRWxlbWVudFJlZixcbiAgUmVuZGVyZXIyXG59IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHtOZ2JEYXRlfSBmcm9tICcuL25nYi1kYXRlJztcbmltcG9ydCB7dG9JbnRlZ2VyfSBmcm9tICcuLi91dGlsL3V0aWwnO1xuaW1wb3J0IHtOZ2JEYXRlcGlja2VySTE4bn0gZnJvbSAnLi9kYXRlcGlja2VyLWkxOG4nO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICduZ2ItZGF0ZXBpY2tlci1uYXZpZ2F0aW9uLXNlbGVjdCcsXG4gIGNoYW5nZURldGVjdGlvbjogQ2hhbmdlRGV0ZWN0aW9uU3RyYXRlZ3kuT25QdXNoLFxuICBlbmNhcHN1bGF0aW9uOiBWaWV3RW5jYXBzdWxhdGlvbi5Ob25lLFxuICBzdHlsZVVybHM6IFsnLi9kYXRlcGlja2VyLW5hdmlnYXRpb24tc2VsZWN0LnNjc3MnXSxcbiAgdGVtcGxhdGU6IGBcbiAgICA8c2VsZWN0ICNtb250aFxuICAgICAgW2Rpc2FibGVkXT1cImRpc2FibGVkXCJcbiAgICAgIGNsYXNzPVwiY3VzdG9tLXNlbGVjdFwiXG4gICAgICBpMThuLWFyaWEtbGFiZWw9XCJAQG5nYi5kYXRlcGlja2VyLnNlbGVjdC1tb250aFwiIGFyaWEtbGFiZWw9XCJTZWxlY3QgbW9udGhcIlxuICAgICAgaTE4bi10aXRsZT1cIkBAbmdiLmRhdGVwaWNrZXIuc2VsZWN0LW1vbnRoXCIgdGl0bGU9XCJTZWxlY3QgbW9udGhcIlxuICAgICAgKGNoYW5nZSk9XCJjaGFuZ2VNb250aCgkYW55KCRldmVudCkudGFyZ2V0LnZhbHVlKVwiPlxuICAgICAgICA8b3B0aW9uICpuZ0Zvcj1cImxldCBtIG9mIG1vbnRoc1wiIFthdHRyLmFyaWEtbGFiZWxdPVwiaTE4bi5nZXRNb250aEZ1bGxOYW1lKG0sIGRhdGU/LnllYXIpXCJcbiAgICAgICAgICAgICAgICBbdmFsdWVdPVwibVwiPnt7IGkxOG4uZ2V0TW9udGhTaG9ydE5hbWUobSwgZGF0ZT8ueWVhcikgfX08L29wdGlvbj5cbiAgICA8L3NlbGVjdD48c2VsZWN0ICN5ZWFyXG4gICAgICBbZGlzYWJsZWRdPVwiZGlzYWJsZWRcIlxuICAgICAgY2xhc3M9XCJjdXN0b20tc2VsZWN0XCJcbiAgICAgIGkxOG4tYXJpYS1sYWJlbD1cIkBAbmdiLmRhdGVwaWNrZXIuc2VsZWN0LXllYXJcIiBhcmlhLWxhYmVsPVwiU2VsZWN0IHllYXJcIlxuICAgICAgaTE4bi10aXRsZT1cIkBAbmdiLmRhdGVwaWNrZXIuc2VsZWN0LXllYXJcIiB0aXRsZT1cIlNlbGVjdCB5ZWFyXCJcbiAgICAgIChjaGFuZ2UpPVwiY2hhbmdlWWVhcigkYW55KCRldmVudCkudGFyZ2V0LnZhbHVlKVwiPlxuICAgICAgICA8b3B0aW9uICpuZ0Zvcj1cImxldCB5IG9mIHllYXJzXCIgW3ZhbHVlXT1cInlcIj57eyBpMThuLmdldFllYXJOdW1lcmFscyh5KSB9fTwvb3B0aW9uPlxuICAgIDwvc2VsZWN0PlxuICBgXG59KVxuZXhwb3J0IGNsYXNzIE5nYkRhdGVwaWNrZXJOYXZpZ2F0aW9uU2VsZWN0IGltcGxlbWVudHMgQWZ0ZXJWaWV3Q2hlY2tlZCB7XG4gIEBJbnB1dCgpIGRhdGU6IE5nYkRhdGU7XG4gIEBJbnB1dCgpIGRpc2FibGVkOiBib29sZWFuO1xuICBASW5wdXQoKSBtb250aHM6IG51bWJlcltdO1xuICBASW5wdXQoKSB5ZWFyczogbnVtYmVyW107XG5cbiAgQE91dHB1dCgpIHNlbGVjdCA9IG5ldyBFdmVudEVtaXR0ZXI8TmdiRGF0ZT4oKTtcblxuICBAVmlld0NoaWxkKCdtb250aCcsIHtzdGF0aWM6IHRydWUsIHJlYWQ6IEVsZW1lbnRSZWZ9KSBtb250aFNlbGVjdDogRWxlbWVudFJlZjtcbiAgQFZpZXdDaGlsZCgneWVhcicsIHtzdGF0aWM6IHRydWUsIHJlYWQ6IEVsZW1lbnRSZWZ9KSB5ZWFyU2VsZWN0OiBFbGVtZW50UmVmO1xuXG4gIHByaXZhdGUgX21vbnRoID0gLTE7XG4gIHByaXZhdGUgX3llYXIgPSAtMTtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgaTE4bjogTmdiRGF0ZXBpY2tlckkxOG4sIHByaXZhdGUgX3JlbmRlcmVyOiBSZW5kZXJlcjIpIHt9XG5cbiAgY2hhbmdlTW9udGgobW9udGg6IHN0cmluZykgeyB0aGlzLnNlbGVjdC5lbWl0KG5ldyBOZ2JEYXRlKHRoaXMuZGF0ZS55ZWFyLCB0b0ludGVnZXIobW9udGgpLCAxKSk7IH1cblxuICBjaGFuZ2VZZWFyKHllYXI6IHN0cmluZykgeyB0aGlzLnNlbGVjdC5lbWl0KG5ldyBOZ2JEYXRlKHRvSW50ZWdlcih5ZWFyKSwgdGhpcy5kYXRlLm1vbnRoLCAxKSk7IH1cblxuICBuZ0FmdGVyVmlld0NoZWNrZWQoKSB7XG4gICAgaWYgKHRoaXMuZGF0ZSkge1xuICAgICAgaWYgKHRoaXMuZGF0ZS5tb250aCAhPT0gdGhpcy5fbW9udGgpIHtcbiAgICAgICAgdGhpcy5fbW9udGggPSB0aGlzLmRhdGUubW9udGg7XG4gICAgICAgIHRoaXMuX3JlbmRlcmVyLnNldFByb3BlcnR5KHRoaXMubW9udGhTZWxlY3QubmF0aXZlRWxlbWVudCwgJ3ZhbHVlJywgdGhpcy5fbW9udGgpO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMuZGF0ZS55ZWFyICE9PSB0aGlzLl95ZWFyKSB7XG4gICAgICAgIHRoaXMuX3llYXIgPSB0aGlzLmRhdGUueWVhcjtcbiAgICAgICAgdGhpcy5fcmVuZGVyZXIuc2V0UHJvcGVydHkodGhpcy55ZWFyU2VsZWN0Lm5hdGl2ZUVsZW1lbnQsICd2YWx1ZScsIHRoaXMuX3llYXIpO1xuICAgICAgfVxuICAgIH1cbiAgfVxufVxuIl19