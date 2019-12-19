import { Component, OnInit } from '@angular/core';
import { LoginService } from '../auth/login.service';
import { AngularFireAuth } from '@angular/fire/auth';
import { first, tap } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  user: firebase.User;
  

  ngOnInit() {
  }

  
//   isLoggedIn() {
//     return this.afAuth.authState.pipe(first())
//  }
 
//  doSomething() {
//    this.isLoggedIn().pipe(
//      tap(user => {
//        if (user) {
//          return true
//          // do something
//        } else {
//          return false
//          // do something else
//        }
//      })
//    )
//    .subscribe()
//  }   
  

}
