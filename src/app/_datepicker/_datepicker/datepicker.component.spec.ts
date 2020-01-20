// tslint:disable
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Pipe, PipeTransform, Injectable, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, Directive, Input, Output } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { Observable, of as observableOf, throwError } from 'rxjs';

import { Component, ElementRef } from '@angular/core';
import { DatepickerComponent } from './datepicker.component';

@Injectable()
class MockElementRef
{
    nativeElement = {};
}

@Directive({ selector: '[oneviewPermitted]' })
class OneviewPermittedDirective
{
    @Input() oneviewPermitted;
}

@Pipe({ name: 'translate' })
class TranslatePipe implements PipeTransform
{
    transform (value) { return value; }
}

@Pipe({ name: 'phoneNumber' })
class PhoneNumberPipe implements PipeTransform
{
    transform (value) { return value; }
}

@Pipe({ name: 'safeHtml' })
class SafeHtmlPipe implements PipeTransform
{
    transform (value) { return value; }
}

describe('DatepickerComponent', () =>
{
    let fixture;
    let component;

    beforeEach(() =>
    {
        TestBed.configureTestingModule({
            imports: [FormsModule, ReactiveFormsModule],
            declarations: [
                DatepickerComponent,
                TranslatePipe, PhoneNumberPipe, SafeHtmlPipe,
                OneviewPermittedDirective
            ],
            schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
            providers: [
                { provide: ElementRef, useClass: MockElementRef }
            ]
        }).overrideComponent(DatepickerComponent, {

        }).compileComponents();
        fixture = TestBed.createComponent(DatepickerComponent);
        component = fixture.debugElement.componentInstance;
    });

    afterEach(() =>
    {
        component.ngOnDestroy = function () { };
        fixture.destroy();
    });

    it('should run #constructor()', async () =>
    {
        expect(component).toBeTruthy();
    });

    // it('should run #ngOnInit()', async () =>
    // {
    //     component.elementRef = component.elementRef || {};
    //     component.elementRef.nativeElement = {
    //         querySelector: function () { }
    //     };
    //     component.adjustDimensions = jest.fn();
    //     component.ngOnInit();
    //     // expect(component.adjustDimensions).toHaveBeenCalled();
    // });

    // it('should run #ngAfterViewInit()', async () =>
    // {

    //     component.ngAfterViewInit();

    // });

    // it('should run #windowResize()', async () =>
    // {
    //     component.adjustDimensions = jest.fn();
    //     component.windowResize();
    //     // expect(component.adjustDimensions).toHaveBeenCalled();
    // });

    // it('should run #onShowCalendar()', async () =>
    // {
    //     component.showPanel = component.showPanel || {};
    //     component.showPanel.0 = '0';
    //     component.calendarShowHide = jest.fn();
    //     component.onShowCalendar({});
    //     // expect(component.calendarShowHide).toHaveBeenCalled();
    // });

    // it('should run #onDateChanged()', async () =>
    // {

    //     component.onDateChanged({});

    // });

    // it('should run #onShowYears()', async () =>
    // {
    //     component.reinitShowPanel = jest.fn();
    //     component.showPanel = component.showPanel || {};
    //     component.showPanel.2 = '2';
    //     component.onShowYears();
    //     // expect(component.reinitShowPanel).toHaveBeenCalled();
    // });

    // it('should run #onSubmit()', async () =>
    // {
    //     component.reinitShowPanel = jest.fn();
    //     component.calendarShowHide = jest.fn();
    //     component.onSubmit();
    //     // expect(component.reinitShowPanel).toHaveBeenCalled();
    //     // expect(component.calendarShowHide).toHaveBeenCalled();
    // });

    // it('should run #calendarShowHide()', async () =>
    // {

    //     component.calendarShowHide({});

    // });

    // it('should run #adjustDimensions()', async () =>
    // {
    //     component.cfg = component.cfg || {};
    //     component.cfg.width = 'width';
    //     component.adjustDimensions();

    // });

    // it('should run #reinitShowPanel()', async () =>
    // {

    //     component.reinitShowPanel();

    // });
});
