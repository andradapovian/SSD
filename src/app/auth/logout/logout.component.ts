import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  user: firebase.User;

  constructor(
    private loginService: LoginService,
    private router: Router
  ){}

  ngOnInit() {
    this.loginService.getLoggedInUser()
    .subscribe(user => {
      this.user = user;
    })
  }

  logout() {
    this.loginService.logout();
    this.router.navigate(['/home']);
  }
}
