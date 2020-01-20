import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges, OnDestroy } from '@angular/core';

import { startOfMonth, startOfWeek, addDays } from 'date-fns';

import { DateConfig, Constants } from '../../_utils';
import { VisualDay } from '../../_models/visual-day';

@Component({
    selector: '[aaCalendar]',
    templateUrl: './calendar.component.html',
    styleUrls: [
        './calendar.component.scss'
    ]
})
export class CalendarComponent implements OnInit, OnChanges, OnDestroy
{
    @Input() config: DateConfig;
    @Output() fromCalendarDateChanged: EventEmitter<Date> = new EventEmitter<Date>();
    public rows: number[];
    public cols: number[];
    public days: VisualDay[][] = [];

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

    ngOnDestroy (): void
    {
    }

    onSelectDate (vd: VisualDay)
    {
        const cfg = DateConfig.copyConfig(this.config);

        this.config = cfg;
        this.config.inputDate = vd.date;
        this.buildCalendar();
        this.fromCalendarDateChanged.emit(vd.date);
    }

    private buildCalendar ()
    {
        const s = startOfMonth(this.config.inputDate);

        let currentDay: Date = startOfWeek(s, {
            weekStartsOn: Constants.weekStartsOn
        });

        for (let row = 0; row < 7; row++)
        {
            this.days[row] = [];
            for (let col = 0; col < 7; col++)
            {
                this.days[row][col] = new VisualDay(
                    currentDay,
                    this.config.inputDate,
                    this.config.minDate,
                    this.config.maxDate,
                    this.config.sinceDate,
                    this.config.untilDate
                );
                currentDay = addDays(currentDay, 1);
            }
        }
    }
}
