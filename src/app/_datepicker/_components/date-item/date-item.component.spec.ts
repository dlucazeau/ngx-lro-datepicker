// tslint:disable
import { TestBed } from '@angular/core/testing';

import { format } from 'date-fns';

import { DateItemComponent } from './date-item.component';
import { Utils } from '../../_utils';

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
        };
    });

    afterEach(() =>
    {
        component.ngOnDestroy = function () { };
        fixture.destroy();
    });

    it('ctor() / component should be created', async () =>
    {
        expect(component).toBeTruthy();
    });

    it('ngOnInit() / setdate should be called', async () =>
    {
        // Arrange
        component.setDate = jest.fn();

        // Act
        component.ngOnInit();

        // Assert
        expect(component.open).toBe(false);
        expect(component.setDate).toHaveBeenCalled();
    });

    it('ngOnChanges() / click arrow down / open should be become true', async () =>
    {
        // Arrange
        component.setDate = jest.fn();

        // Act
        component.ngOnChanges({
            isArrowDown: {
                currentValue: true
            }
        });

        // Assert
        expect(component.setDate).toHaveBeenCalled();
        expect(component.open).toBe(true);
    });


    it('ngOnChanges() / click arrow up / open should be become false', async () =>
    {
        // Arrange
        component.open = true;
        component.setDate = jest.fn();

        // Act
        component.ngOnChanges({
            isArrowDown: {
                currentValue: false
            }
        });

        // Assert
        expect(component.setDate).toHaveBeenCalled();
        expect(component.open).toBe(false);
    });

    it('onClickArrow() / open should become false', async () =>
    {
        // Arrange
        component.fromDateItemShowCalendar = component.fromDateItemShowCalendar || {};
        component.fromDateItemShowCalendar.emit = jest.fn();

        // Act
        component.onClickArrow();

        // Assert
        expect(component.open).toBe(true);
        expect(component.fromDateItemShowCalendar.emit).toHaveBeenCalled();
    });

    it('setDate() with set inputDate / displayedDate should be correct', async () =>
    {
        // Arrange
        component.config = {
            inputDate: new Date(2019, 11, 11),
            format: 'MM/dd/yyyy'
        };

        // Act
        component.setDate();

        // Assert
        expect(component.displayedDate).toEqual('12/11/2019');
    });

    it('setDate() with null inputDate / displayedDate should be correct', async () =>
    {
        // Arrange
        const today: string = format(Utils.getToday(), 'MM/dd/yyyy');
        component.config = {
            inputDate: null,
            format: 'MM/dd/yyyy'
        };

        // Act
        component.setDate();

        // Assert
        expect(component.displayedDate).toEqual(today);
    });
});
