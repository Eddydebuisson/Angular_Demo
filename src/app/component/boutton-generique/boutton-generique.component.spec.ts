import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BouttonGeneriqueComponent } from './boutton-generique.component';

describe('BouttonGeneriqueComponent', () => {
  let component: BouttonGeneriqueComponent;
  let fixture: ComponentFixture<BouttonGeneriqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BouttonGeneriqueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BouttonGeneriqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
