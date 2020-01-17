import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RangeItemComponent } from './range-item.component';

describe('RangeItemComponent', () => {
  let component: RangeItemComponent;
  let fixture: ComponentFixture<RangeItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RangeItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RangeItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
