import { Component } from '@angular/core';

@Component({
  selector: 'app-data-course',
  templateUrl: './data-course.component.html',
  styleUrls: ['./data-course.component.scss']
})
export class DataCourseComponent {

  courses: any[] = []

  addCourses(course : any){
    this.courses.push(course);
  }

  get total() {
    return this.courses.reduce((total,course)=> total + course.prix,0)
  }

}
