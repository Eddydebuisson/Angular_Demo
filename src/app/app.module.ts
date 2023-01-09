import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './component/button/button.component';
import { UsersComponent } from './component/users/users.component';
import { AlertButtonComponent } from './component/alert-button/alert-button.component';
import { ListeComponent } from './component/liste/liste.component';
import { MagicComponent } from './component/magic/magic.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    UsersComponent,
    AlertButtonComponent,
    ListeComponent,
    MagicComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
