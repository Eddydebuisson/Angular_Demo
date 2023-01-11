import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BouttonMenuComponent } from './boutton-menu.component';

describe('BouttonMenuComponent', () => {
  let component: BouttonMenuComponent;
  let fixture: ComponentFixture<BouttonMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BouttonMenuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BouttonMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
