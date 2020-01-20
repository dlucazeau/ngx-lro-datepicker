// tslint:disable
import { TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

import { CalendarComponent } from './calendar.component';
import { CalendarConfig } from '../../_utils';
import { VisualDay } from '../../_models/visual-day';

describe('CalendarComponent', () =>
{
    let fixture;
    let component;

    beforeEach(() =>
    {
        TestBed
            .configureTestingModule({
                declarations: [
                    CalendarComponent
                ],
                schemas: [
                    CUSTOM_ELEMENTS_SCHEMA,
                    NO_ERRORS_SCHEMA
                ]
            })
            .overrideComponent(CalendarComponent, {})
            .compileComponents();
        fixture = TestBed.createComponent(CalendarComponent);
        component = fixture.debugElement.componentInstance;
    });

    afterEach(() =>
    {
        component.ngOnDestroy = function () { };
        fixture.destroy();
    });

    it('ctor() / initialization should be done', async () =>
    {
        // Assert
        expect(component).toBeTruthy();
        expect(component.rows.length).toEqual(6);
        expect(component.cols.length).toEqual(7);
    });

    it('ngOnInit() / buildCalendar should be called', async () =>
    {
        // Arrange
        component.config = new CalendarConfig();
        component.buildCalendar = jest.fn();

        // Act
        component.ngOnInit();

        // Assert
        expect(component.buildCalendar).toHaveBeenCalled();
    });

    it('ngOnInit() / days should be initialized', async () =>
    {
        // Arrange
        component.config = new CalendarConfig();

        // Act
        component.ngOnInit();

        // Assert
        expect(component.days.length).toEqual(7);
    });

    it('ngOnChanges() / called / build calendar should be called', async () =>
    {
        // Arrange
        component.buildCalendar = jest.fn();

        // Act
        component.ngOnChanges({});

        // Assert
        expect(component.buildCalendar).toHaveBeenCalled();
    });

    it('onSelectDate() / buildCalendar and emit should be called', async () =>
    {
        // Arrange
        component.config = {
            inputDate: new Date(2020, 0, 11),
            minDate: new Date(2020, 0, 1),
            maxDate: new Date(2020, 0, 31),
            format: 'MM/dd/yyyy'
        } as CalendarConfig;
        const vd = new VisualDay(new Date(2020, 0, 19), component.config.inputDate, component.config.minDate, component.config.maxDate);
        component.buildCalendar = jest.fn();
        component.fromCalendarDateChanged.emit = jest.fn();

        // Act
        component.onSelectDate(vd);

        // Assert
        expect(component.buildCalendar).toHaveBeenCalled();
        expect(component.fromCalendarDateChanged.emit).toHaveBeenCalled();
    });

    // it('ngOnInit() / buildCalendar() / some vd should be well', async () =>
    // {
    //     // Arrange
    //     // ---     min           input           max    ---
    //     // -------- ▼ ------------ ↓ ------------ ▼ -------
    //     // --- 01/01/2019 --- .......... --- 31/12/2019 ---
    //     const minDate = new Date()

    // });
});
