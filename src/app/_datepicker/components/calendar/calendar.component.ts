import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

import { startOfMonth, startOfWeek, isWeekend, addDays, getDate, getMonth, isAfter, isBefore } from 'date-fns';

import { CalendarConfig } from '../../utils/date-config';
import { Constants, VisualDay } from '../../utils/constants';

@Component({
    selector: '[aaCalendar]',
    templateUrl: './calendar.component.html',
    styleUrls: [
        './calendar.component.scss'
    ]
})
export class CalendarComponent implements OnInit, OnChanges
{
    @Input() config: CalendarConfig;
    @Output() fromCalendarDateChanged: EventEmitter<Date> = new EventEmitter<Date>();
    public rows: number[];
    public cols: number[];
    public nums: VisualDay[][] = [];

    constructor()
    {
        this.rows = Array(6).fill(0).map((x, i) => i);
        this.cols = Array(7).fill(0).map((x, i) => i);
    }

    ngOnInit ()
    {
        this.buildCalendar();
    }
    ngOnChanges (changes: SimpleChanges)
    {
        this.buildCalendar();
    }

    onSelectDate (vd: VisualDay)
    {
        const cfg = new CalendarConfig();

        Object.assign(cfg, this.config);
        this.config = cfg;
        this.config.inputDate = vd.date;
        this.buildCalendar();

        this.fromCalendarDateChanged.emit(vd.date);
    }

    private buildCalendar ()
    {
        const s = startOfMonth(this.config.inputDate);
        const m = getMonth(s);
        const d = getDate(this.config.inputDate);

        let startDay: Date = startOfWeek(s, {
            weekStartsOn: Constants.weekStartsOn
        });
        let uncheckable: boolean;

        for (let row = 0; row < 7; row++)
        {
            this.nums[row] = [];
            for (let col = 0; col < 7; col++)
            {
                uncheckable = !this.isBetweenMinAndMax(startDay);
                this.nums[row][col] = {
                    date: startDay,
                    day: getDate(startDay),
                    currMonth: !uncheckable && getMonth(startDay) === m,
                    today: !uncheckable && getDate(startDay) === d && getMonth(startDay) === m,
                    uncheckable: uncheckable,
                    isWeekend: isWeekend(startDay)
                } as VisualDay;
                startDay = addDays(startDay, 1);
            }
        }
    }
    private isBetweenMinAndMax (d: Date): boolean
    {
        let isAfterMin: boolean = true;
        if (this.config.minDate !== null)
        {
            isAfterMin = isAfter(d, this.config.minDate);
        }

        let isBeforeMax: boolean = true;
        if (this.config.maxDate !== null)
        {
            isBeforeMax = isBefore(d, this.config.maxDate);
        }

        return isAfterMin && isBeforeMax;
    }
}
