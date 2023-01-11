import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimezoneParentComponent } from './timezone-parent.component';

describe('TimezoneParentComponent', () => {
  let component: TimezoneParentComponent;
  let fixture: ComponentFixture<TimezoneParentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimezoneParentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimezoneParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
