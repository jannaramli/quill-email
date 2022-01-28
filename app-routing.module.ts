import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomepageComponent } from './homepage/homepage.component'; //first page display carousel
import { UserRegisterComponent } from './user-register/user-register.component';
import { DisplayUserprofileComponent } from './display-userprofile/display-userprofile.component';
import { ManageCalendarComponent } from './manage-calendar/manage-calendar.component';

const routes: Routes = [
  {path:'', component: HomepageComponent},
  {path:'register', component: UserRegisterComponent},
  {path:'displayRegister', component: DisplayUserprofileComponent},
  {path:'tarikh', component: ManageCalendarComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
