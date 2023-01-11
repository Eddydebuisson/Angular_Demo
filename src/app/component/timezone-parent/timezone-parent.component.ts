import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-timezone-parent',
  templateUrl: './timezone-parent.component.html',
  styleUrls: ['./timezone-parent.component.scss']
})
export class TimezoneParentComponent {

  todayDate = Date.now();
  format:string = "fullTime";
 

  @Input()
  ville!:string ;

  @Input()
  timezone!:string ;

  constructor(){
    setInterval( () => this.todayDate= Date.now(),1000)
  }



}
