import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactiv-list-course',
  templateUrl: './reactiv-list-course.component.html',
  styleUrls: ['./reactiv-list-course.component.scss']
})
export class ReactivListCourseComponent {

  article!: FormGroup;

  articles: any[] = []

  constructor(){
    this.article = new FormGroup({
      designation : new FormControl('', Validators.required),
      prix : new FormControl('',Validators.required),
    })
  }

  addArticle(){
    this.articles.push(this.article.value);
    this.article.reset();
  }

  get totalPrice():number {
    return this.articles.reduce((total,article)=>total + article.prix,0 )
  }

}
