import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-users-card',
  templateUrl: './users-card.component.html',
  styleUrls: ['./users-card.component.scss']
})
export class UsersCardComponent implements OnInit {

  users:any;
  cacher : boolean= true;

  clickMe() {
    this.cacher = !this.cacher;
  }

  ngOnInit():void {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => this.users = data)
    .then(console.log)

}

  }

  


