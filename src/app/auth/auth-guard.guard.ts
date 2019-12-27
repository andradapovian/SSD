import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';
import { OnInit } from '@angular/core';
import {Router} from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class AuthGuardGuard implements CanActivate, OnInit  {

  user: firebase.User;
  constructor(private loginService: LoginService,
    private router: Router
    ){}
  ngOnInit(){ this.loginService.getLoggedInUser()
    .subscribe(user => {
      this.user = user;
    })}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      this.loginService.getLoggedInUser()
    .subscribe(user => {
      this.user = user;
    })
      if(this.user)
        { console.log('access granted');
          return true;}
      
      console.log('access denied!')
      this.router.navigate(['/login']);
      return false
  }
  
}
