import { Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges } from '@angular/core';

import { format } from 'date-fns';

import { RangeConfig } from '../../_utils/range-config';
import { Utils } from '../../_utils';

@Component({
    selector: '[aaRangeItem]',
    templateUrl: './range-item.component.html',
    styleUrls: [
        './range-item.component.scss'
    ]
})
export class RangeItemComponent implements OnInit, OnChanges
{
    @Input() config: RangeConfig;
    @Input() isArrowDown: boolean;
    @Output() fromRangeItemShowCalendar: EventEmitter<boolean> = new EventEmitter<boolean>();
    public displayedRange: string;
    public open: boolean = false;

    constructor() { }

    ngOnChanges (changes: SimpleChanges): void
    {
        if (changes && changes.isArrowDown)
        {
            this.open = changes.isArrowDown.currentValue;
        }

        if (changes.config && changes.config.currentValue !== undefined)
        {
            this.setRange();
        }
    }

    ngOnInit ()
    {
        if (this.config !== undefined)
        {
            this.setRange();
        }

        this.open = this.isArrowDown;
    }

    onClickArrow ()
    {
        this.open = !this.open;
        this.fromRangeItemShowCalendar.emit(this.open);
    }

    private setRange ()
    {
        let displayedSince: string;
        let displayedUntil: string;

        if (this.config.sinceConfig.inputDate !== null)
        {
            displayedSince = format(this.config.sinceConfig.inputDate, this.config.format);
        } else
        {
            displayedSince = format(Utils.getToday(), this.config.format);
        }

        if (this.config.untilConfig.inputDate !== null)
        {
            displayedUntil = format(this.config.untilConfig.inputDate, this.config.format);
        } else
        {
            displayedUntil = format(Utils.getToday(), this.config.format);
        }

        this.displayedRange = `from ${displayedSince} to ${displayedUntil}`;
    }
}
