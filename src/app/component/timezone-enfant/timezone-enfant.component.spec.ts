import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimezoneEnfantComponent } from './timezone-enfant.component';

describe('TimezoneEnfantComponent', () => {
  let component: TimezoneEnfantComponent;
  let fixture: ComponentFixture<TimezoneEnfantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimezoneEnfantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TimezoneEnfantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
