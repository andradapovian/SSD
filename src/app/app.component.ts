import { Component, OnInit } from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {LoginService} from './auth/login.service';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  constructor(
    private afAuth: AngularFireAuth,
    private loginService: LoginService,
    firestore: AngularFirestore,
  ){}

  ngOnInit(){
  
  }

  
}
