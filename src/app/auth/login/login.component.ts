import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user: firebase.User;

  constructor(
    private service: LoginService,
    private router: Router
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
    this.router.navigate(['/events']);
  }
 
  loginGoogle(){
    console.log('login..');
    this.service.loginGoogle();
    this.router.navigate(['/events']);
  }

  logout(){
    this.service.logout();
  }
}
