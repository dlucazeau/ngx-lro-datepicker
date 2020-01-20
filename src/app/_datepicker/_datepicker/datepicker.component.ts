import { Component, OnInit, Input, ElementRef, HostListener, AfterViewInit, OnDestroy } from '@angular/core';

import { gsap } from 'gsap';

import { CalendarConfig } from '../_utils/calendar-config';
import { addDays } from 'date-fns';
import { Utils } from '../_utils';

@Component({
    selector: 'aa-datepicker',
    templateUrl: './datepicker.component.html',
    styleUrls: [
        '../datepicker.component.scss'
    ]
})
export class DatepickerComponent implements OnInit, AfterViewInit, OnDestroy
{
    @Input() config: CalendarConfig;
    // @ViewChild('container', { static: true }) container: ElementRef;
    public viewBox: string = '0 0 168 24';
    public width: number = 168;
    public showPanel: boolean[] = [];
    public cfg: CalendarConfig;
    public height: number = 24;
    private myCalendar: HTMLElement;
    private duration: number = 0.33;

    constructor(private elementRef: ElementRef)
    {
        this.reinitShowPanel();
    }

    ngOnInit ()
    {
        this.myCalendar = this.elementRef.nativeElement.querySelector('.calendar');
        this.cfg = CalendarConfig.copyConfig(this.config);

        if (this.cfg.inputDate === null)
        {
            this.cfg.inputDate = Utils.getToday();
        }

        this.adjustDimensions();
    }

    ngAfterViewInit ()
    {
    }

    ngOnDestroy (): void
    {
    }

    @HostListener('window:resize')
    windowResize ()
    {
        this.adjustDimensions();
    }

    onShowCalendar (status: boolean)
    {
        this.showPanel[0] = status;
        this.calendarShowHide(status);
    }

    onDateChanged (sd: Date)
    {
        const cfg = CalendarConfig.copyConfig(this.cfg);

        cfg.inputDate = sd;
        this.cfg = cfg;
    }

    onShowMonths = () =>
    {
        this.reinitShowPanel();
        this.showPanel[1] = true;
    }
    onShowYears ()
    {
        this.reinitShowPanel();
        this.showPanel[2] = true;
    }
    onSubmit ()
    {
        this.reinitShowPanel();
        this.calendarShowHide(false);
    }

    private calendarShowHide (status: boolean)
    {
        const tl = gsap.timeline();

        if (status)
        {
            this.height = 10 * 24 + 4;
            tl.to(this.myCalendar, { duration: this.duration, attr: { height: 24 * 9 }, ease: 'linear' }, 0);
        } else
        {
            this.height = 24;
            tl.to(this.myCalendar, { duration: this.duration, attr: { height: 0 }, ease: 'linear' }, 0);
        }
    }

    private adjustDimensions ()
    {
        this.cfg.width = this.width;
        this.viewBox = `0 0 ${this.width} 24`;
    }

    private reinitShowPanel ()
    {
        this.showPanel = [false, false, false];
    }
}
