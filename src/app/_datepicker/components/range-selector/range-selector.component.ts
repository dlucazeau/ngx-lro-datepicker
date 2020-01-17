import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { startOfMonth, startOfWeek, isWeekend, addDays, addYears, getDate, getMonth, isAfter, isBefore, addMonths } from 'date-fns';

import { CalendarConfig } from '../../utils/date-config';
import { Constants, VisualDay } from '../../utils/constants';
import { RangeConfig } from '../../utils/range-config';

// http://svgicons.sparkk.fr/

@Component({
    selector: '[aaRangeSelector]',
    templateUrl: './range-selector.component.html',
    styleUrls: [
        './range-selector.component.scss'
    ]
})
export class RangeSelectorComponent implements OnInit
{
    @Input() config: RangeConfig;
    @Output() dateChanged: EventEmitter<Date> = new EventEmitter<Date>();
    @Output() showMonths: EventEmitter<null> = new EventEmitter<null>();
    @Output() showYears: EventEmitter<null> = new EventEmitter<null>();
    @Output() submit: EventEmitter<null> = new EventEmitter<null>();
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

    onSelectDate (vd: VisualDay)
    {
        const cfg = new RangeConfig();

        Object.assign(cfg, this.config);
        this.config = cfg;
        // this.config.inputSince = vd.date;
        this.buildCalendar();

        this.dateChanged.emit(vd.date);
    }

    onShowMonths ()
    {
        this.showMonths.emit();
    }
    onShowYears ()
    {
        this.showYears.emit();
    }

    onPrevYear ()
    {
        this.prevDate(addYears(this.config.sinceConfig.inputDate, -1));
    }

    onPrevMonth ()
    {
        this.prevDate(addMonths(this.config.sinceConfig.inputDate, -1));
    }

    onNextMonth ()
    {
        this.nextDate(addMonths(this.config.sinceConfig.inputDate, 1));
    }

    onNextYear ()
    {
        this.nextDate(addYears(this.config.sinceConfig.inputDate, 1));
    }

    onToday ()
    {
        this.changeDate(new Date());
    }

    onOptions ()
    {
        // console.log('onOptions');
    }

    onSubmit ()
    {
        this.submit.emit();
    }

    private prevDate (newDate: Date)
    {
        let isAfterMin: boolean = true;

        if (this.config.minDate !== null)
        {
            isAfterMin = isAfter(newDate, this.config.minDate);
        }

        if (isAfterMin)
        {
            this.changeDate(newDate);
        }
    }

    private nextDate (newDate: Date)
    {
        let isBeforeMax: boolean = true;

        if (this.config.maxDate !== null)
        {
            isBeforeMax = isBefore(newDate, this.config.maxDate);
        }

        if (isBeforeMax)
        {
            this.changeDate(newDate);
        }
    }

    private changeDate (newDate: Date)
    {
        const cfg = new RangeConfig();

        Object.assign(cfg, this.config);
        this.config = cfg;
        // this.config.inputSince = newDate;
        this.buildCalendar();

        this.dateChanged.emit(newDate);
    }

    private buildCalendar ()
    {
        const s = startOfMonth(this.config.sinceConfig.inputDate);
        const m = getMonth(s);
        const d = getDate(this.config.sinceConfig.inputDate);

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
