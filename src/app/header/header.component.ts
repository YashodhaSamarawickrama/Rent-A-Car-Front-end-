import { Component, OnInit } from '@angular/core';
import { Router,NavigationEnd } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { AdminloginComponent } from '../adminlogin/adminlogin.component';
import { LoginComponent } from '../login/login.component';
import { AboutComponent } from '../about/about.component';
import { ContactComponent } from '../contact/contact.component';
import { ActivatedRoute } from '@angular/router';
import {AuthGuardComponent}from '../guards/auth-guard/auth-guard.component'
import {AuthenticationService} from '../../services/authentication.service'
import { first } from 'rxjs/operators';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.sass']
})

export class HeaderComponent implements OnInit {
  showComponent:any
  islogged:any;
  username:any;
  name:any;
  true:any;
  changename:any;
  mySubscription: any;

  constructor(public router:Router ) {
    this.router.routeReuseStrategy.shouldReuseRoute = function () {
      return false;
    };
    
    // this.mySubscription = this.router.events.subscribe((event) => {
    //   if (event instanceof NavigationEnd) {
    //     // Trick the Router into believing it's last link wasn't previously loaded
    //     this.router.navigated = false;
    //   }
    // });
    
  }

  ngOnInit() 
{
  
    if(localStorage.getItem('currentUser') != null){

      this.islogged = true
      this.username = JSON.parse(localStorage.getItem('currentUser'))
      console.log(this.username.name)
      this.name = this.username.name
    }
   


  }
  // ngOnDestroy() {
  //   if (this.mySubscription) {
  //     this.mySubscription.unsubscribe();
  //   }
  // }
 

}
