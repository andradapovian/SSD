import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  constructor(
    private afAuth: AngularFireAuth
  ) { }

  

  loginGoogle(){

    console.log('Redirecting to Google');
    this.afAuth.auth.signInWithRedirect(new auth.GoogleAuthProvider);
    
  }

  loginFacebook(){
    console.log('Redirecting to Faceboo');
    this.afAuth.auth.signInWithRedirect(new auth.FacebookAuthProvider);
  }

  getLoggedInUser(){
    return this.afAuth.authState;
  }

  logout(){
    this.afAuth.auth.signOut();
  }
}
