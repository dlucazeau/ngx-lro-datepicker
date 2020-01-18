import { Component, OnInit, Input, ViewChild, ElementRef, HostListener, AfterViewInit } from '@angular/core';

import { gsap } from 'gsap';

import { CalendarConfig } from '../utils/date-config';
import { RangeConfig } from '../utils/range-config';
import { isRegExp } from 'util';

@Component({
    selector: 'aa-rangepicker',
    templateUrl: './rangepicker.component.html',
    styleUrls: [
        '../datepicker.component.scss'
    ]
})
export class RangepickerComponent implements OnInit, AfterViewInit
{
    @Input() config: RangeConfig;
    public viewBox: string = '0 0 340 24';
    public width: number = 340;
    public cfg: RangeConfig;
    public height: number = 24;
    public showPanel: boolean[] = [];
    private myCalendar: HTMLElement;
    private duration: number = 0.33;

    constructor(private elementRef: ElementRef)
    {
        this.reinitShowPanel();
    }

    ngOnInit ()
    {
        this.myCalendar = this.elementRef.nativeElement.querySelector('.calendar');

        this.cfg = RangeConfig.copyConfig(this.config);
        this.cfg.sinceConfig.isRangeSelector = true;
        this.cfg.untilConfig.isRangeSelector = true;

        this.cfg.sinceConfig.sinceDate = this.cfg.sinceConfig.inputDate;
        this.cfg.sinceConfig.untilDate = this.cfg.untilConfig.inputDate;
        this.cfg.untilConfig.sinceDate = this.cfg.sinceConfig.inputDate;
        this.cfg.untilConfig.untilDate = this.cfg.untilConfig.inputDate;

        if (this.cfg.sinceConfig.inputDate === null)
        {
            this.cfg.sinceConfig.inputDate = new Date();
        }

        if (this.cfg.untilConfig.inputDate === null)
        {
            this.cfg.untilConfig.inputDate = new Date();
        }

        this.adjustDimensions();
    }

    ngAfterViewInit ()
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
        // const cfg = this.cfgSince.copyConfig();

        // cfg.inputDate = sd;
        // this.cfgSince = cfg;
    }

    onShowMonths ()
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
            tl
                .to(this.myCalendar, { duration: this.duration, attr: { height: 24 * 9 }, ease: 'linear' }, 0);
        } else
        {
            this.height = 24;
            tl
                .to(this.myCalendar, { duration: this.duration, attr: { height: 0 }, ease: 'linear' }, 0);
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
