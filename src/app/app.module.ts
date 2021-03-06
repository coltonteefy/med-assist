import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {AppRoutingModule} from "./app-routing.module";
import { SideNavBarComponent } from './side-nav-bar/side-nav-bar.component';
import { AccountSettingsComponent } from './account-settings/account-settings.component';
import { CalendarComponent } from './calendar/calendar.component';
import { FormsComponent } from './forms/forms.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NewPatientFormComponent } from './new-patient-form/new-patient-form.component';
import { PrescriptionRefillComponent } from './prescription-refill/prescription-refill.component';
import { UserProfileComponent } from './user-profile/user-profile.component';
import { ReferencesComponent } from './references/references.component';
import { ReportsComponent } from './reports/reports.component';
import { VideosComponent } from './videos/videos.component';


@NgModule({
  declarations: [
    AppComponent,
    SideNavBarComponent,
    AccountSettingsComponent,
    CalendarComponent,
    FormsComponent,
    HomeComponent,
    LoginComponent,
    NewPatientFormComponent,
    PrescriptionRefillComponent,
    UserProfileComponent,
    ReferencesComponent,
    ReportsComponent,
    VideosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
