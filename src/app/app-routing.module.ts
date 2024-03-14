import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { AppointmentsComponent } from './pages/appointments/appointments.component';
import { QueueingComponent } from './pages/queueing/queueing.component';
import { HistoryComponent } from './pages/history/history.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { ScheduleComponent } from './pages/schedule/schedule.component';
const routes: Routes = [
  {path:'',component:DashboardComponent},
  {path:'appointments',component:AppointmentsComponent},
  {path:'queueing',component:QueueingComponent},
  {path:'history',component:HistoryComponent},
  {path:'profile',component:ProfileComponent},
  {path:'schedule',component:ScheduleComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }