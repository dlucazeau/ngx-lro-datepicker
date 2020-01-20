import { Component, OnInit, Input } from '@angular/core';

import { startOfMonth, startOfWeek, isWeekend, addDays, addYears, getDate, getMonth, isAfter, isBefore, addMonths, format } from 'date-fns';

import { CalendarConfig } from '../../_utils/calendar-config';
import { Constants } from '../../_utils/constants';

@Component({
    selector: '[aaWeek]',
    templateUrl: './week.component.html',
    styleUrls: [
        './week.component.scss'
    ]
})
export class WeekComponent implements OnInit
{
    @Input() config: CalendarConfig;
    public weekDays: string[] = [];

    constructor()
    {
    }

    ngOnInit ()
    {
        const s = startOfMonth(this.config.inputDate);

        let startDay: Date = startOfWeek(s, {
            weekStartsOn: Constants.weekStartsOn
        });
        for (let col = 0; col < 7; col++)
        {
            this.weekDays[col] = format(startDay, 'iiiiii');

            startDay = addDays(startDay, 1);
        }
    }
}
