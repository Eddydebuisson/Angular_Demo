import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeFiltrerComponent } from './liste-filtrer.component';

describe('ListeFiltrerComponent', () => {
  let component: ListeFiltrerComponent;
  let fixture: ComponentFixture<ListeFiltrerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeFiltrerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListeFiltrerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
