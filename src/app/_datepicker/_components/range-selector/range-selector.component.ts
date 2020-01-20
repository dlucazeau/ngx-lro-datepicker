import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { addYears, isAfter, isBefore, addMonths } from 'date-fns';

import { RangeConfig, SubmitDate } from '../../_utils';
import { VisualDay } from '../../_models/visual-day';

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
    @Output() fromRangeSelectorDateChanged: EventEmitter<SubmitDate> = new EventEmitter<SubmitDate>();
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

        this.prevDate(addYears(this.config[`${which}Config`].inputDate, -1));
    }

    onPrevMonth (which: string)
    {
        this.prevDate(addMonths(this.config[`${which}Config`].inputDate, -1));
    }

    onNextMonth (which: string)
    {
        this.nextDate(addMonths(this.config[`${which}Config`].inputDate, 1));
    }

    onNextYear (which: string)
    {
        this.nextDate(addYears(this.config[`${which}Config`].inputDate, 1));
    }

    onToday (which: string)
    {
        // this.changeDate(Utils.getToday(), which);
    }

    onOptions ()
    {
        // console.log('onOptions');
    }

    onSubmit ()
    {
        this.fromRangeSelectorSubmit.emit();
    }

    onDateChanged (sd: Date, which: string)
    {
        // this.fromRangeSelectorDateChanged.emit({ sd, which });
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
        const cfg = RangeConfig.copyConfig(this.config);

        this.config = cfg;
        // this.config.inputSince = newDate;

        this.fromRangeSelectorDateChanged.emit({
            sinceDate: this.config.sinceConfig.sinceDate, untilDate: this.config.untilConfig.untilDate
        });
    }
}
