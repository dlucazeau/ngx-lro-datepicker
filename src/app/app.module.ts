import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DatepickerModule } from './_datepicker/datepicker.module';
import { RangepickerComponent } from './rangepicker/rangepicker.component';

@NgModule({
    declarations: [
        AppComponent,
        RangepickerComponent
    ],
    imports: [
        BrowserModule,
        DatepickerModule
    ],
    providers: [],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule { }
