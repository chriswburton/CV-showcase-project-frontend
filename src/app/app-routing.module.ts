import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './pages/dashboard/dashboard.component';
import {ApplicationsComponent} from './pages/applications/applications.component';
import {LogOutComponent} from './pages/log-out/log-out.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'applications', component: ApplicationsComponent },
  { path: 'log-in', component: LogOutComponent },
  { path: 'log-out', component: LogOutComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
