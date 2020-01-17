import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { addYears, isAfter, isBefore, addMonths } from 'date-fns';

import { CalendarConfig } from '../../utils/date-config';
import { VisualDay } from '../../utils/constants';

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
    @Input() config: CalendarConfig;
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

    onSelectDate (vd: VisualDay)
    {
        const cfg = CalendarConfig.copyConfig(this.config);
        cfg.inputDate = vd.date;

        this.config = cfg;

        this.fromDateSelectorDateChanged.emit(vd.date);
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
        this.changeDate(new Date());
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
        const cfg = CalendarConfig.copyConfig(this.config);

        this.config = cfg;
        this.config.inputDate = newDate;

        this.fromDateSelectorDateChanged.emit(newDate);
    }
}
