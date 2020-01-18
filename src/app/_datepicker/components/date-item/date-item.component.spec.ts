// tslint:disable
import { TestBed } from '@angular/core/testing';

import { format } from 'date-fns';

import { DateItemComponent } from './date-item.component';
import { CalendarConfig } from '../../utils';


describe('DateItemComponent', () =>
{
    let fixture;
    let component;

    beforeEach(() =>
    {
        TestBed.configureTestingModule({
            imports: [
            ],
            declarations: [
                DateItemComponent
            ],
            providers: [
            ]
        })
            .overrideComponent(DateItemComponent, {})
            .compileComponents();
        fixture = TestBed.createComponent(DateItemComponent);
        component = fixture.debugElement.componentInstance;

        component.config = {
            inputDate: new Date(2019, 11, 11),
            minDate: new Date(2019, 8, 1),
            maxDate: new Date(2020, 1, 29),
            format: 'MM/dd/yyyy'
        } as CalendarConfig;
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

    it('should run #ngOnInit()', async () =>
    {
        // Arrange
        component.setDate = jest.fn();

        // Act
        component.ngOnInit();

        // Assert
        expect(component.open).toBe(undefined);
        expect(component.setDate).toHaveBeenCalled();
    });

    // it('should run #ngOnChanges()', async () =>
    // {
    //     component.setDate = jest.fn();
    //     component.ngOnChanges({
    //         isArrowDown: {
    //             currentValue: {}
    //         }
    //     });
    //     // expect(component.setDate).toHaveBeenCalled();
    // });

    // it('should run #onClickArrow()', async () =>
    // {
    //     component.fromDateItemShowCalendar = component.fromDateItemShowCalendar || {};
    //     component.fromDateItemShowCalendar.emit = jest.fn();
    //     component.onClickArrow();
    //     // expect(component.fromDateItemShowCalendar.emit).toHaveBeenCalled();
    // });

    it('should run #setDate()', async () =>
    {
        // Arrange
        component.config = {
            inputDate: new Date(2019, 11, 11),
            format: 'MM/dd/yyyy'
        } as CalendarConfig;

        // Act
        component.setDate();

        // Assert
        expect(component.displayedDate).toEqual('12/11/2019');
    });

    it('should run #setDate()', async () =>
    {
        // Arrange
        const today: string = format(new Date(), 'MM/dd/yyyy');
        component.config = {
            inputDate: null,
            format: 'MM/dd/yyyy'
        } as CalendarConfig;

        // Act
        component.setDate();

        // Assert
        expect(component.displayedDate).toEqual(today);
    });
});
