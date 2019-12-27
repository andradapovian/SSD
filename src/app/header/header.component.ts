import { Component, OnInit } from '@angular/core';
import { LoginService } from '../auth/login.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  
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
