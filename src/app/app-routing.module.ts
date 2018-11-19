import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {ApplicationsComponent} from './pages/applications/applications.component';
import {LogOutComponent} from './pages/log-out/log-out.component';
import {AuthGuard} from './guards/auth.guard';
import {LogInComponent} from './pages/log-in/log-in.component';
import {ApplicationFormComponent} from './components/application-form/application-form.component';

const routes: Routes = [
  { path: 'log-in', component: LogInComponent },
  { path: 'dashboard', canActivate: [AuthGuard], component: DashboardComponent },
  { path: 'applications', canActivate: [AuthGuard], children: [
      { path: '', component: ApplicationsComponent },
      { path: ':jobId', component: ApplicationFormComponent },
  ]},
  { path: 'log-out', canActivate: [AuthGuard], component: LogOutComponent },
  { path: '**', redirectTo: 'dashboard' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
