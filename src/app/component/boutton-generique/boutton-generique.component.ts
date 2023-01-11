import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-boutton-generique',
  templateUrl: './boutton-generique.component.html',
  styleUrls: ['./boutton-generique.component.scss']
})
export class BouttonGeneriqueComponent {
@Input()
boutonText!:string;

@Input()
alertMessage!: string;

onClick(){
  alert(this.alertMessage);
}
}
