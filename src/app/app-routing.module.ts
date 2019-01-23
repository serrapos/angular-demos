import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MaterialDashboardComponent } from './material-dashboard/material-dashboard.component';
import { ReactiveFormsComponent } from './components/reactive-forms/reactive-forms.component';
import { HomeComponent } from './components/home/home.component';
import { MeetupReactiveFormsComponent } from './components/meetup-reactive-forms/meetup-reactive-forms.component';

const routes: Routes = [
  {
    path: '', component: MaterialDashboardComponent, children: [
      { path: '', component: HomeComponent },
      { path: 'reactive-forms', component: ReactiveFormsComponent },
      { path: 'meetup-reactive-forms', component: MeetupReactiveFormsComponent }
    ]
  },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
