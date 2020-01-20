import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { DateConfig } from '../../_utils/date-config';

@Component({
    selector: '[aaTools]',
    templateUrl: './tools.component.html',
    styleUrls: [
        './tools.component.scss'
    ]
})
export class ToolsComponent implements OnInit
{
    @Input() config: DateConfig;
    @Output() fromToolsToday: EventEmitter<null> = new EventEmitter<null>();
    @Output() fromToolsOptions: EventEmitter<Date> = new EventEmitter<Date>();
    @Output() fromToolsSubmit: EventEmitter<Date> = new EventEmitter<Date>();

    constructor() { }

    ngOnInit ()
    {
    }

    onToday ()
    {
        this.fromToolsToday.emit();
    }

    onOptions ()
    {
        // console.log('onOptions');
    }

    onSubmit ()
    {
        this.fromToolsSubmit.emit();
    }
}
