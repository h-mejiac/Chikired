import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltereventtwoComponent } from './filtereventtwo.component';

describe('FiltereventtwoComponent', () => {
  let component: FiltereventtwoComponent;
  let fixture: ComponentFixture<FiltereventtwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FiltereventtwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltereventtwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
