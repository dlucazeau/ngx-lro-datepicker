import { Component } from '@angular/core';

@Component({
    selector: 'aa-root',
    templateUrl: './app.component.html',
    styleUrls: [
        './app.component.scss'
    ]
})
export class AppComponent
{
    public configDatepicker = {
        inputDate: new Date(2019, 11, 11),
        minDate: new Date(2019, 8, 1),
        maxDate: new Date(2020, 1, 29),
        format: 'MM/dd/yyyy'
    };

    public configRangepicker = {
        minDate: new Date(2019, 8, 1),
        maxDate: new Date(2020, 1, 29),
        format: 'MM/dd/yyyy'
        // sinceConfig: {
        //     inputDate: new Date(2019, 11, 11)
        // },
        // untilConfig: {
        //     inputDate: new Date(2020, 0, 15)
        // }
    };

    constructor()
    {
    }
}
