import { Component } from '@angular/core';

@Component({
  selector: 'app-timezone-enfant',
  templateUrl: './timezone-enfant.component.html',
  styleUrls: ['./timezone-enfant.component.scss']
})
export class TimezoneEnfantComponent {

   horraires:any[] = [
    {
      ville: "Paris",
      timezone : "UTC+1"
    },
    {
      ville: "New York",
      timezone : "UTC-5"
    },
    {
      ville: "Londre",
      timezone : "UTC+9"
    }
   ]

}
