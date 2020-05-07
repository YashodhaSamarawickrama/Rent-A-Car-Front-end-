import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { FormsModule,FormBuilder, FormGroup, Validators } from "@angular/forms";
import { first } from 'rxjs/operators';
import { AlertService, AuthenticationService } from '../../services';
import {EventEmitter, Input, Output} from '@angular/core'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  @Output() fireIsLoggedIn: EventEmitter<any> = new EventEmitter<any>();
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  message:any

  constructor(  private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private alertService: AlertService) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
  });

  // reset login status
  this.authenticationService.logout();

  // get return url from route parameters or default to '/'
  this.returnUrl = localStorage.getItem('redirectTo')|| '/'
  }
  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.loginForm.invalid) {
          return;
      }

      

      // else{

      this.loading = true;
      this.authenticationService.login(this.f.email.value, this.f.password.value)
          .pipe(first())
          .subscribe(
              data => {
                if(this.f.email.value == "admin@admin.com" && this.f.password.value == "admin123" ){
                
                this.router.navigate(['/adminlogin']);
                
              }
              else{
                  this.router.navigate([this.returnUrl]);}
              },
              error => {
                  this.message = "Invalid credentials ,please try again"
                  this.alertService.error(error);
                  this.loading = false;
              });
     
               
  }
  

}
