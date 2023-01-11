import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactivListCourseComponent } from './reactiv-list-course.component';

describe('ReactivListCourseComponent', () => {
  let component: ReactivListCourseComponent;
  let fixture: ComponentFixture<ReactivListCourseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactivListCourseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReactivListCourseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
