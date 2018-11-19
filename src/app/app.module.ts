import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './ui/header/header.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { ApplicationsComponent } from './pages/applications/applications.component';
import { LogOutComponent } from './pages/log-out/log-out.component';
import { LogInComponent } from './pages/log-in/log-in.component';
import {AuthService} from './services/auth.service';
import { JobAdvertTableComponent } from './ui/job-advert-table/job-advert-table.component';
import {JobService} from './services/job.service';
import { ProfileSummaryComponent } from './ui/profile-summary/profile-summary.component';
import { ApplicationFormComponent } from './components/application-form/application-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardComponent,
    ApplicationsComponent,
    LogOutComponent,
    LogInComponent,
    JobAdvertTableComponent,
    ProfileSummaryComponent,
    ApplicationFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    AuthService,
    JobService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
