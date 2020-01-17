import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DatepickerComponent } from './datepicker/datepicker.component';
import { DateItemComponent } from './components/date-item/date-item.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { WeekComponent } from './components/week/week.component';
import { RangepickerComponent } from './rangepicker/rangepicker.component';
import { RangeSelectorComponent } from './components/range-selector/range-selector.component';
import { RangeItemComponent } from './components/range-item/range-item.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { ToolsComponent } from './components/tools/tools.component';
import { DateSelectorComponent } from './components/date-selector/date-selector.component';

@NgModule({
    declarations: [
        DatepickerComponent,
        RangepickerComponent,
        DateItemComponent,
        DateSelectorComponent,
        NavigationComponent,
        WeekComponent,
        RangeSelectorComponent,
        RangeItemComponent,
        CalendarComponent,
        ToolsComponent
    ],
    imports: [
        CommonModule
    ],
    exports: [
        DatepickerComponent,
        RangepickerComponent
    ]
})
export class DatepickerModule { }
