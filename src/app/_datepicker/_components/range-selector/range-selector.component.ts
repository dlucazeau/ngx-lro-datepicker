import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { addYears, isAfter, isBefore, addMonths } from 'date-fns';

import { RangeConfig, SelectedDate } from '../../_utils';
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
    @Output() fromRangeSelectorDateChanged: EventEmitter<SelectedDate> = new EventEmitter<SelectedDate>();
    @Output() fromRangeSelectorShowMonths: EventEmitter<string> = new EventEmitter<string>();
    @Output() fromRangeSelectorShowYears: EventEmitter<string> = new EventEmitter<string>();
    @Output() fromRangeSelectorSubmit: EventEmitter<null> = new EventEmitter<null>();

    constructor()
    {
    }

    ngOnInit ()
    {
    }

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

    onDateChanged (selectedDate: Date, which: string)
    {
        this.fromRangeSelectorDateChanged.emit({
            selectedDate, selectedCalendar: which
        } as SelectedDate);
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
            this.changeDate(newDate, which);
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
            this.changeDate(newDate, which);
        }
    }

    private changeDate (newDate: Date, which: string)
    {
        const cfg = RangeConfig.copyConfig(this.config);

        this.config = cfg;

        this.fromRangeSelectorDateChanged.emit({
            selectedDate: newDate, selectedCalendar: which
        } as SelectedDate);
    }
}
