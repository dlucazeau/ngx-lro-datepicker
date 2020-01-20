import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DatepickerComponent } from './_datepicker/datepicker.component';
import { DateItemComponent } from './_components/date-item/date-item.component';
import { NavigationComponent } from './_components/navigation/navigation.component';
import { WeekComponent } from './_components/week/week.component';
import { RangepickerComponent } from './_rangepicker/rangepicker.component';
import { RangeSelectorComponent } from './_components/range-selector/range-selector.component';
import { RangeItemComponent } from './_components/range-item/range-item.component';
import { CalendarComponent } from './_components/calendar/calendar.component';
import { ToolsComponent } from './_components/tools/tools.component';
import { DateSelectorComponent } from './_components/date-selector/date-selector.component';

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
