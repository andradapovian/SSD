import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import{ environment } from '../environments/environment';
import {AngularFireModule} from '@angular/fire';
import {AngularFireAuthModule} from '@angular/fire/auth';
import { LoginComponent } from './auth/login/login.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { EventsComponent } from './events/events.component';
import { EventComponent } from './events/event/event.component';
import { EventListComponent } from './events/event-list/event-list.component';
import { EventService } from './events/shared/event.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFirestore } from 'angularfire2/firestore';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    EventsComponent,
    EventComponent,
    EventListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [EventService, AngularFirestore],
  bootstrap: [AppComponent]
})
export class AppModule { }
