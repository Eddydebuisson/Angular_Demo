import { Component } from '@angular/core';

@Component({
  selector: 'app-liste-filtrer',
  templateUrl: './liste-filtrer.component.html',
  styleUrls: ['./liste-filtrer.component.scss'],
})
export class ListeFiltrerComponent {
  listes: string[] = [
    'eddy',
    'clara',
    'kevin',
    'pierre',
    'lamia',
    'audrey',
    'peebee',
    'miah',
  ];
}
