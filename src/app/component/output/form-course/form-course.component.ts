import { Component, EventEmitter, Output } from '@angular/core';
import { FormGroup,Validators, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-form-course',
  templateUrl: './form-course.component.html',
  styleUrls: ['./form-course.component.scss']
})
export class FormCourseComponent {

  @Output()
  onAddArticle: EventEmitter<any> = new EventEmitter()

  article: FormGroup = this.formBuilder.group({
    designation: ['',Validators.required],
    prix: ['',Validators.required]
  })

  submitted:boolean = false;
  
  constructor(private formBuilder:FormBuilder){}

  public onSubmit():void{
    this.submitted =true;
    if(this.article.valid){
      this.onAddArticle.emit(this.article.value);
      this.article.reset();
    }else{
      console.log('formulaire invalide')
    }
  }

  get form(){
    return this.article.controls;
  }


}
