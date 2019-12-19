import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './home/home.component';
import { EventsComponent } from './events/events.component';
import { EventComponent } from './events/event/event.component';



const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'events', component: EventsComponent},
  { path: 'events/add', component: EventComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
