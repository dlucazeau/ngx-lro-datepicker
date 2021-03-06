import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Injectable, ElementRef, NO_ERRORS_SCHEMA } from '@angular/core';

import { RangepickerComponent } from './rangepicker.component';
import { RangeConfig, Utils } from '../_utils';

// "emitDecoratorMetadata": true

@Injectable()
class MockElementRef extends ElementRef
{
    constructor()
    {
        super({});
    }
}

describe('RangepickerComponent', () =>
{
    let fixture: ComponentFixture<RangepickerComponent>;
    let component: RangepickerComponent;

    beforeEach(() =>
    {
        TestBed
            .configureTestingModule({
                declarations: [
                    RangepickerComponent
                ],
                schemas: [
                    NO_ERRORS_SCHEMA
                ],
                providers: [
                    {
                        provide: ElementRef,
                        useClass: MockElementRef
                    }
                ]
            });
        fixture = TestBed.createComponent(RangepickerComponent);
        component = fixture.debugElement.componentInstance;
    });

    // beforeEach(inject([ElementRef], (windowRef: MockElementRef) =>
    // {
    //     subject = MockElementRef;
    // }));

    afterEach(() =>
    {
        component.ngOnDestroy = function () { };
        fixture.destroy();
    });

    it('ctor() / showpanel should be set to false (three)', async () =>
    {
        // Arrange & Act

        // Assert
        expect(component).toBeTruthy();
        expect(component.showPanel[0]).toBe(false);
        expect(component.showPanel[1]).toBe(false);
        expect(component.showPanel[2]).toBe(false);
    });

    it('ngOnInit() / isRangeSelector should be set to true', async () =>
    {
        // Arrange
        component.config = {
            minDate: new Date(2019, 8, 1),
            maxDate: new Date(2020, 1, 29),
            format: 'MM/dd/yyyy'
        } as RangeConfig;

        // Act
        component.ngOnInit();

        // Assert
        expect(component.cfg.isRangeSelector).toBe(true);
        expect(component.cfg.sinceConfig.isRangeSelector).toBe(true);
        expect(component.cfg.untilConfig.isRangeSelector).toBe(true);
    });

    // it('ngOnInit() / null inputDates / inputDates should be set to today', async () =>
    // {
    //     // Arrange
    //     component.config = {
    //         minDate: new Date(2019, 8, 1),
    //         maxDate: new Date(2020, 1, 29),
    //         format: 'MM/dd/yyyy'
    //     } as RangeConfig;

    //     // Act
    //     component.ngOnInit();

    //     // Assert
    //     expect(component.cfg.sinceConfig.inputDate).toEqual(Utils.getToday());
    //     expect(component.cfg.untilConfig.inputDate).toEqual(Utils.getToday());
    // });

    it('ngOnInit() / null since and until config / inputDates should be set to today', async () =>
    {
        // Arrange
        // ---     min           since          until           max    ---
        // -------- ▼ ------------ ↓ ------------ ↓ ------------ ▼ -------
        // --- 01/01/2019 --- .......... --- .......... --- 31/12/2019 ---
        const today = Utils.getToday();

        component.config = {
            minDate: new Date(2019, 0, 1),
            maxDate: new Date(2019, 11, 31),
            format: 'MM/dd/yyyy'
        } as RangeConfig;

        // Act
        component.ngOnInit();

        // Assert
        expect(component.cfg.sinceConfig.inputDate).toEqual(today);
        expect(component.cfg.untilConfig.inputDate).toEqual(today);
    });

    it('ngOnInit() / null inputDates / inputDates should be set to today', async () =>
    {
        // Arrange
        // ---     min           since          until           max    ---
        // -------- ▼ ------------ ↓ ------------ ↓ ------------ ▼ -------
        // --- 01/01/2019 --- .......... --- .......... --- 31/12/2019 ---
        const today = Utils.getToday();

        component.config = {
            minDate: new Date(2019, 0, 1),
            maxDate: new Date(2019, 11, 31),
            format: 'MM/dd/yyyy',
            sinceConfig: {
                inputDate: null
            },
            untilConfig: {
                inputDate: null
            }
        } as RangeConfig;

        // Act
        component.ngOnInit();

        // Assert
        expect(component.cfg.sinceConfig.inputDate).toEqual(today);
        expect(component.cfg.untilConfig.inputDate).toEqual(today);
    });

    it('ngOnInit() /  / min and max should be respectively set to since and until from since and until config', async () =>
    {
        // Arrange
        // ---     min           since          until           max    ---
        // -------- ▼ ------------ ↓ ------------ ↓ ------------ ▼ -------
        // --- 01/01/2019 --- .......... --- .......... --- 31/12/2019 ---
        const min = new Date(2019, 0, 1);
        const max = new Date(2019, 11, 31);

        component.config = {
            minDate: min,
            maxDate: max,
            format: 'MM/dd/yyyy',
        } as RangeConfig;

        // Act
        component.ngOnInit();

        // Assert
        expect(component.cfg.sinceConfig.minDate).toEqual(min);
        expect(component.cfg.sinceConfig.maxDate).toEqual(max);
        expect(component.cfg.untilConfig.minDate).toEqual(min);
        expect(component.cfg.untilConfig.maxDate).toEqual(max);
    });

    it('ngOnInit() / since & until provided / inputDates should be respectively set to since and until', async () =>
    {
        // Arrange
        // ---     min           since          until           max    ---
        // -------- ▼ ------------ ↓ ------------ ↓ ------------ ▼ -------
        // --- 01/01/2019 --- 01/03/2019 --- 31/03/2019 --- 31/12/2019 ---
        const since = new Date(2019, 2, 1);
        const until = new Date(2019, 2, 31);

        component.config = {
            isRangeSelector: true,
            minDate: new Date(2019, 0, 1),
            maxDate: new Date(2019, 11, 31),
            sinceDate: since,
            untilDate: until,
            format: 'MM/dd/yyyy',
        } as RangeConfig;

        // Act
        component.ngOnInit();

        // Assert
        expect(component.cfg.sinceConfig.sinceDate).toEqual(since);
        expect(component.cfg.sinceConfig.untilDate).toEqual(until);
        expect(component.cfg.untilConfig.sinceDate).toEqual(since);
        expect(component.cfg.untilConfig.untilDate).toEqual(until);
    });

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

    // it('should run #onShowMonths()', async () =>
    // {
    //     component.reinitShowPanel = jest.fn();
    //     component.showPanel = component.showPanel || {};
    //     component.showPanel.1 = '1';
    //     component.onShowMonths();
    //     // expect(component.reinitShowPanel).toHaveBeenCalled();
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
