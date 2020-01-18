import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { startOfMonth, startOfWeek, isWeekend, addDays, addYears, getDate, getMonth, isAfter, isBefore, addMonths } from 'date-fns';

import { RangeConfig, VisualDay, Constants, EmitDate } from '../../utils';

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
    @Output() fromRangeSelectorDateChanged: EventEmitter<EmitDate> = new EventEmitter<EmitDate>();
    @Output() fromRangeSelectorShowMonths: EventEmitter<string> = new EventEmitter<string>();
    @Output() fromRangeSelectorShowYears: EventEmitter<string> = new EventEmitter<string>();
    @Output() fromRangeSelectorSubmit: EventEmitter<null> = new EventEmitter<null>();
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
    }

    // onSelectDate (vd: VisualDay)
    // {
    //     const cfg = RangeConfig.copyConfig(this.config);

    //     this.config = cfg;
    //     // this.config.inputSince = vd.date;

    //     this.fromRangeSelectorDateChanged.emit({ sd: vd.date, which: 'since' });
    // }

    onShowMonths (which: string)
    {
        this.fromRangeSelectorShowMonths.emit(which);
    }
    onShowYears (which: string)
    {
        this.fromRangeSelectorShowYears.emit(which);
    }

    onPrevYear (which: string)
    {

        this.prevDate(addYears(this.config[`${which}Config`].inputDate, -1), which);
    }

    onPrevMonth (which: string)
    {
        this.prevDate(addMonths(this.config[`${which}Config`].inputDate, -1), which);
    }

    onNextMonth (which: string)
    {
        this.nextDate(addMonths(this.config[`${which}Config`].inputDate, 1), which);
    }

    onNextYear (which: string)
    {
        this.nextDate(addYears(this.config[`${which}Config`].inputDate, 1), which);
    }

    onToday (which: string)
    {
        this.changeDate(new Date(), which);
    }

    onOptions (which: string)
    {
        // console.log('onOptions');
    }

    onSubmit ()
    {
        this.fromRangeSelectorSubmit.emit();
    }

    onDateChanged (sd: Date, which: string)
    {
        this.fromRangeSelectorDateChanged.emit({ sd, which });
    }

    private prevDate (newDate: Date, which: string)
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

    private nextDate (newDate: Date, which: string)
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
        const cfg = RangeConfig.copyConfig(this.config);

        this.config = cfg;
        // this.config.inputSince = newDate;

        this.fromRangeSelectorDateChanged.emit(newDate);
    }
}
