import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module'; 
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxCaptchaModule } from 'ngx-captcha';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { DisplayUserprofileComponent } from './display-userprofile/display-userprofile.component';
import { FullCalendarModule } from '@fullcalendar/angular'; // must go before plugins
import dayGridPlugin from '@fullcalendar/daygrid'; // a plugin!
import interactionPlugin from '@fullcalendar/interaction'; // a plugin! 
import listPlugin from '@fullcalendar/list';
import { ManageCalendarComponent } from './manage-calendar/manage-calendar.component';
import { DialogCalendarMultipleComponent } from './dialog-calendar-multiple/dialog-calendar-multiple.component'; 
import { QuillModule} from 'ngx-quill';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { DatePipe } from '@angular/common';
import { DialogCalendarUsernameComponent } from './dialog-calendar-username/dialog-calendar-username.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import {HttpClientModule} from '@angular/common/http';

FullCalendarModule.registerPlugins([ 
  dayGridPlugin,
  interactionPlugin,
  listPlugin,
]);

@NgModule({
  declarations: [
    AppComponent,
    HomepageComponent,
    UserRegisterComponent,
    DisplayUserprofileComponent,
    ManageCalendarComponent,
    DialogCalendarMultipleComponent,
    DialogCalendarUsernameComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxCaptchaModule,
    NgbModule,
    FullCalendarModule,// register FullCalendar with you app
    QuillModule.forRoot(), 
    BrowserAnimationsModule,
    MaterialModule,   
    FlexLayoutModule,
    HttpClientModule
  ],
  providers: [{ provide: MAT_DATE_LOCALE, useValue: 'en-GB' }, DatePipe,],
  bootstrap: [AppComponent],
  entryComponents: [DialogCalendarMultipleComponent],

})
export class AppModule { }
