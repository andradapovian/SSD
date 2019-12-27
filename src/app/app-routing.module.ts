import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './home/home.component';
import { EventsComponent } from './events/events.component';
import { EventAddComponent } from './events/event-add/event-add.component';
import { LogoutComponent } from './auth/logout/logout.component';
import { FileUploadComponent } from './file-upload/file-upload.component';
import { AuthGuardGuard } from './auth/auth-guard.guard';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: 'events', component: EventsComponent, canActivate: [AuthGuardGuard]},
  { path: 'events/add', component: EventAddComponent, canActivate: [AuthGuardGuard]},
  { path: 'logout', component: LogoutComponent, canActivate: [AuthGuardGuard]},
  { path: 'file-upload', component: FileUploadComponent, canActivate: [AuthGuardGuard] }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
