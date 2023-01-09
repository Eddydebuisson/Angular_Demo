import { Component } from '@angular/core';

@Component({
  selector: 'app-magic',
  templateUrl: './magic.component.html',
  styleUrls: ['./magic.component.scss']
})
export class MagicComponent {
  magie: boolean = true;

  toggle () {
    this.magie = !this.magie;
  }
}
