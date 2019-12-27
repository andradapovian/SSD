import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user: firebase.User;

  constructor(
    private service: LoginService,
    
  ) { }

  ngOnInit() {
    this.service.getLoggedInUser()
    .subscribe( user => {
      console.log(user);
      this.user = user;
    })
  }

  loginFacebook() {
    console.log('login..');
    this.service.loginFacebook();
  }
 
  loginGoogle(){
    console.log('login..');
    this.service.loginGoogle();
  }

  logout(){
    this.service.logout();
  }
}
