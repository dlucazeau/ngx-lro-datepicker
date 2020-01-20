import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

import { format } from 'date-fns';

import { CalendarConfig } from '../../_utils/calendar-config';
import { Utils } from '../../_utils';

@Component({
    selector: '[aaDateItem]',
    templateUrl: './date-item.component.html',
    styleUrls: [
        './date-item.component.scss'
    ]
})
export class DateItemComponent implements OnInit, OnChanges
{
    @Input() config: CalendarConfig;
    @Input() isArrowDown: boolean;
    @Output() fromDateItemShowCalendar: EventEmitter<boolean> = new EventEmitter<boolean>();
    public displayedDate: string;
    public open: boolean = false;

    constructor() { }

    ngOnInit ()
    {
        this.setDate();
        this.open = this.isArrowDown || false;
    }

    ngOnChanges (changes: SimpleChanges): void
    {
        if (changes && changes.isArrowDown)
        {
            this.open = changes.isArrowDown.currentValue;
        }

        this.setDate();
    }

    onClickArrow ()
    {
        this.open = !this.open;
        this.fromDateItemShowCalendar.emit(this.open);
    }

    private setDate ()
    {
        if (this.config.inputDate !== null)
        {
            this.displayedDate = format(this.config.inputDate, this.config.format);
        } else
        {
            this.displayedDate = format(Utils.getToday(), this.config.format);
        }
    }
}
