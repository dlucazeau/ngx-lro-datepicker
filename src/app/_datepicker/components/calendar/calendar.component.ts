import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

import { startOfMonth, startOfWeek, isWeekend, addDays, getDate, getMonth } from 'date-fns';

import { CalendarConfig, VisualDay, Constants, Utils } from '../../utils';

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
        const cfg = CalendarConfig.copyConfig(this.config);

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
        let checkable: boolean;

        for (let row = 0; row < 7; row++)
        {
            this.nums[row] = [];
            for (let col = 0; col < 7; col++)
            {
                checkable = this.isBetweenMinAndMax(startDay);
                this.nums[row][col] = {
                    date: startDay,
                    day: getDate(startDay),
                    isCurrentMonth: checkable && getMonth(startDay) === m,
                    isToday: checkable && getDate(startDay) === d && getMonth(startDay) === m,
                    isCheckable: !checkable,
                    isWeekend: isWeekend(startDay),
                    isInRange: checkable && this.config.isRangeSelector && this.isInRange(startDay)
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
            isAfterMin = Utils.isAfter(d, this.config.minDate);
        }

        let isBeforeMax: boolean = true;
        if (this.config.maxDate !== null)
        {
            isBeforeMax = Utils.isBefore(d, this.config.maxDate);
        }

        return isAfterMin && isBeforeMax;
    }

    private isInRange (d: Date): boolean
    {
        const isAfterSince: boolean = Utils.isAfter(d, this.config.sinceDate);
        const isBeforeUntil: boolean = Utils.isBefore(d, this.config.untilDate);

        return isAfterSince && isBeforeUntil;
    }
}
