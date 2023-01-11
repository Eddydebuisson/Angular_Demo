import { Component } from '@angular/core';

@Component({
  selector: 'app-boutton-menu',
  templateUrl: './boutton-menu.component.html',
  styleUrls: ['./boutton-menu.component.scss']
})
export class BouttonMenuComponent {
  bouttons:any[] = [
    {
      boutonText : "Ping",
      alertMessage: "Pong"
    },{
      boutonText : "Marco",
      alertMessage: "Paulo"
    },{
      boutonText : "Tape Moi !! ",
      alertMessage : "AIE !! "
    }
  ]

}
