import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  user: firebase.User;

  constructor(
    private loginService: LoginService
  ){}

  ngOnInit() {
    this.loginService.getLoggedInUser()
    .subscribe(user => {
      this.user = user;
    })
  }

  logout() {
    this.loginService.logout();
  }
}
