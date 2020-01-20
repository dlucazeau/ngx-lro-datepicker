import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { addYears, isAfter, isBefore, addMonths } from 'date-fns';

import { DateConfig, Utils } from '../../_utils';

// http://svgicons.sparkk.fr/
@Component({
    selector: '[aaDateSelector]',
    templateUrl: './date-selector.component.html',
    styleUrls: [
        './date-selector.component.scss'
    ]
})
export class DateSelectorComponent implements OnInit
{
    @Input() config: DateConfig;
    @Output() fromDateSelectorDateChanged: EventEmitter<Date> = new EventEmitter<Date>();
    @Output() fromDateSelectorShowMonths: EventEmitter<null> = new EventEmitter<null>();
    @Output() fromDateSelectorShowYears: EventEmitter<null> = new EventEmitter<null>();
    @Output() fromDateSelectorSubmit: EventEmitter<null> = new EventEmitter<null>();

    constructor()
    {
    }

    ngOnInit ()
    {
    }

    onShowMonths ()
    {
        this.fromDateSelectorShowMonths.emit();
    }
    onShowYears ()
    {
        this.fromDateSelectorShowYears.emit();
    }

    onPrevYear ()
    {
        this.prevDate(addYears(this.config.inputDate, -1));
    }

    onPrevMonth ()
    {
        this.prevDate(addMonths(this.config.inputDate, -1));
    }

    onNextMonth ()
    {
        this.nextDate(addMonths(this.config.inputDate, 1));
    }

    onNextYear ()
    {
        this.nextDate(addYears(this.config.inputDate, 1));
    }

    onToday ()
    {
        this.changeDate(Utils.getToday());
    }

    onOptions ()
    {
        // console.log('onOptions');
    }

    onSubmit ()
    {
        this.fromDateSelectorSubmit.emit();
    }

    onDateChanged (sd: Date)
    {
        this.fromDateSelectorDateChanged.emit(sd);
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
        const cfg = DateConfig.copyConfig(this.config);

        cfg.inputDate = newDate;
        this.config = cfg;

        this.fromDateSelectorDateChanged.emit(newDate);
    }
}
