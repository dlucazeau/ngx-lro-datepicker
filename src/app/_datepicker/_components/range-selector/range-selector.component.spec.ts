// tslint:disable
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Pipe, PipeTransform, Injectable, CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA, Directive, Input, Output } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';
import { Observable, of as observableOf, throwError } from 'rxjs';

import { Component } from '@angular/core';
import { RangeSelectorComponent } from './range-selector.component';

describe('RangeSelectorComponent', () =>
{
    let fixture;
    let component;

    beforeEach(() =>
    {
        TestBed
            .configureTestingModule({
                declarations: [
                    RangeSelectorComponent
                ],
                schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
            })
            .overrideComponent(RangeSelectorComponent, {

            })
            .compileComponents();
        fixture = TestBed.createComponent(RangeSelectorComponent);
        component = fixture.debugElement.componentInstance;
    });

    afterEach(() =>
    {
        component.ngOnDestroy = function () { };
        fixture.destroy();
    });

    // it('should run #constructor()', async () =>
    // {
    //     expect(component).toBeTruthy();
    // });

    // it('should run #ngOnInit()', async () =>
    // {

    //     component.ngOnInit();

    // });

    // it('should run #onShowMonths()', async () =>
    // {
    //     component.fromRangeSelectorShowMonths = component.fromRangeSelectorShowMonths || {};
    //     component.fromRangeSelectorShowMonths.emit = jest.fn();
    //     component.onShowMonths({});
    //     // expect(component.fromRangeSelectorShowMonths.emit).toHaveBeenCalled();
    // });

    // it('should run #onShowYears()', async () =>
    // {
    //     component.fromRangeSelectorShowYears = component.fromRangeSelectorShowYears || {};
    //     component.fromRangeSelectorShowYears.emit = jest.fn();
    //     component.onShowYears({});
    //     // expect(component.fromRangeSelectorShowYears.emit).toHaveBeenCalled();
    // });

    // it('should run #onPrevYear()', async () =>
    // {
    //     component.prevDate = jest.fn();
    //     component.config = component.config || {};
    //     component.config.inputDate = 'inputDate';
    //     component.onPrevYear({});
    //     // expect(component.prevDate).toHaveBeenCalled();
    // });

    // it('should run #onPrevMonth()', async () =>
    // {
    //     component.prevDate = jest.fn();
    //     component.config = component.config || {};
    //     component.config.inputDate = 'inputDate';
    //     component.onPrevMonth({});
    //     // expect(component.prevDate).toHaveBeenCalled();
    // });

    // it('should run #onNextMonth()', async () =>
    // {
    //     component.nextDate = jest.fn();
    //     component.config = component.config || {};
    //     component.config.inputDate = 'inputDate';
    //     component.onNextMonth({});
    //     // expect(component.nextDate).toHaveBeenCalled();
    // });

    // it('should run #onNextYear()', async () =>
    // {
    //     component.nextDate = jest.fn();
    //     component.config = component.config || {};
    //     component.config.inputDate = 'inputDate';
    //     component.onNextYear({});
    //     // expect(component.nextDate).toHaveBeenCalled();
    // });

    // it('should run #onToday()', async () =>
    // {

    //     component.onToday({});

    // });

    // it('should run #onOptions()', async () =>
    // {

    //     component.onOptions();

    // });

    // it('should run #onSubmit()', async () =>
    // {
    //     component.fromRangeSelectorSubmit = component.fromRangeSelectorSubmit || {};
    //     component.fromRangeSelectorSubmit.emit = jest.fn();
    //     component.onSubmit();
    //     // expect(component.fromRangeSelectorSubmit.emit).toHaveBeenCalled();
    // });

    it('onDateChanged/ since calendar / correctly emit data', async () =>
    {
        // Arrange
        component.fromRangeSelectorDateChanged = component.fromRangeSelectorDateChanged || {};
        component.fromRangeSelectorDateChanged.emit = jest.fn();

        // Act
        component.onDateChanged(new Date(), 'since');

        // Assert
        expect(component.fromRangeSelectorDateChanged.emit).toHaveBeenCalled();

    });

    // it('should run #prevDate()', async () =>
    // {
    //     component.config = component.config || {};
    //     component.config.minDate = 'minDate';
    //     component.changeDate = jest.fn();
    //     component.prevDate({});
    //     // expect(component.changeDate).toHaveBeenCalled();
    // });

    // it('should run #nextDate()', async () =>
    // {
    //     component.config = component.config || {};
    //     component.config.maxDate = 'maxDate';
    //     component.changeDate = jest.fn();
    //     component.nextDate({});
    //     // expect(component.changeDate).toHaveBeenCalled();
    // });

    // it('should run #changeDate()', async () =>
    // {
    //     component.fromRangeSelectorDateChanged = component.fromRangeSelectorDateChanged || {};
    //     component.fromRangeSelectorDateChanged.emit = jest.fn();
    //     component.changeDate({});
    //     // expect(component.fromRangeSelectorDateChanged.emit).toHaveBeenCalled();
    // });

});
