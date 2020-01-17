import { Component, OnInit, Input, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';

import { format } from 'date-fns';

import { CalendarConfig } from '../../utils/date-config';

@Component({
    selector: '[aaNavigation]',
    templateUrl: './navigation.component.html',
    styleUrls: [
        './navigation.component.scss'
    ]
})
export class NavigationComponent implements OnInit, OnChanges
{
    @Input() config: CalendarConfig;
    @Output() fromNavigationShowMonths: EventEmitter<null> = new EventEmitter<null>();
    @Output() fromNavigationShowYears: EventEmitter<null> = new EventEmitter<null>();
    @Output() fromNavigationPrevYear: EventEmitter<null> = new EventEmitter<null>();
    @Output() fromNavigationPrevMonth: EventEmitter<null> = new EventEmitter<null>();
    @Output() fromNavigationNextMonth: EventEmitter<null> = new EventEmitter<null>();
    @Output() fromNavigationNextYear: EventEmitter<null> = new EventEmitter<null>();
    public displayedYear: string = '';
    public displayedMonth: string = '';

    constructor() { }

    ngOnInit ()
    {
        this.formatDate();
    }

    ngOnChanges (changes: SimpleChanges): void
    {
        this.formatDate();
    }

    onShowMonths ()
    {
        this.fromNavigationShowMonths.emit();
    }

    onShowYears ()
    {
        this.fromNavigationShowYears.emit();
    }

    onPrevYear ()
    {
        this.fromNavigationPrevYear.emit();
    }

    onPrevMonth ()
    {
        this.fromNavigationPrevMonth.emit();
    }

    onNextMonth ()
    {
        this.fromNavigationNextMonth.emit();
    }

    onNextYear ()
    {
        this.fromNavigationNextYear.emit();
    }

    private formatDate ()
    {
        this.displayedYear = format(this.config.inputDate, 'yyyy');
        this.displayedMonth = format(this.config.inputDate, 'MMM');
    }
}
