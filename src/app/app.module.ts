import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonComponent } from './component/button/button.component';
import { UsersComponent } from './component/users/users.component';
import { AlertButtonComponent } from './component/alert-button/alert-button.component';
import { ListeComponent } from './component/liste/liste.component';
import { MagicComponent } from './component/magic/magic.component';
import { ListeFiltrerComponent } from './component/liste-filtrer/liste-filtrer.component';
import { UsersCardComponent } from './component/users-card/users-card.component';
import { BouttonGeneriqueComponent } from './component/boutton-generique/boutton-generique.component';
import { BouttonMenuComponent } from './component/boutton-menu/boutton-menu.component';
import { TimezoneParentComponent } from './component/timezone-parent/timezone-parent.component';
import { TimezoneEnfantComponent } from './component/timezone-enfant/timezone-enfant.component';
import { ListeCourseComponent } from './component/liste-course/liste-course.component';
import { ReactivListCourseComponent } from './component/reactiv-list-course/reactiv-list-course.component';
import { FormBuilderListComponent } from './component/form-builder-list/form-builder-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ButtonComponent,
    UsersComponent,
    AlertButtonComponent,
    ListeComponent,
    MagicComponent,
    ListeFiltrerComponent,
    UsersCardComponent,
    BouttonGeneriqueComponent,
    BouttonMenuComponent,
    TimezoneParentComponent,
    TimezoneEnfantComponent,
    ListeCourseComponent,
    ReactivListCourseComponent,
    FormBuilderListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
