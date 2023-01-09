import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss']
})
export class UsersComponent {
    nom :string = "François"
    prenom :string = "claude"
    image : string = "https://lemagdesanimaux.ouest-france.fr/images/dossiers/2022-10/chinchilla-liberte-maison-062429.jpg"
    job:string = ""
  }
