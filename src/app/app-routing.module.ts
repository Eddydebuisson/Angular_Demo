import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MagicComponent } from './component/magic/magic.component';
import { UsersCardComponent } from './component/users-card/users-card.component';

const routes: Routes = [
  { path: 'magic', component: MagicComponent },
  { path: 'TP1', component: UsersCardComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
