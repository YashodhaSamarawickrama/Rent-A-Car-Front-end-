import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
import { AlertService, UserService } from '../../services';

@Component({
  selector: 'app-admin-edit-user',
  templateUrl: './admin-edit-user.component.html',
  styleUrls: ['./admin-edit-user.component.scss']
})
export class AdminEditUserComponent implements OnInit {
  private subject = new Subject<any>();
  private keepAfterNavigationChange = false;
  message: any;
  registerForm: FormGroup;
  loading = false;
  submitted = false;
  useridtoedit:any
  detailsofuser:any
  firstnameofuser:any;
  lastnameofuser:any;
  emailofuser:any;
  phoneofuser:any;
  addressofuser:any;
  cityofuser:any;
  countryofuser:any;
  passwordofuser:any;

  constructor(private formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute, 
    private userService: UserService,
    private alertService: AlertService) 
    {{ router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
          if (this.keepAfterNavigationChange) {
              // only keep for a single location change
              this.keepAfterNavigationChange = false;
          } else {
              // clear alert
              this.subject.next();
          }
      }
  });} }

  ngOnInit() {
    this.useridtoedit = this.route.snapshot.params['user._id']
    this.registerForm = this.formBuilder.group({
      firstname: ['', Validators.required],
      lastname: ['', Validators.required],
      email: ['', Validators.required],
      address: ['', Validators.required],
      city: ['', Validators.required],
      country: ['', Validators.required],
      phone: ['', Validators.required],
      // password: ['', [Validators.required, Validators.minLength(6)]]
  });
  this.userService.getById(this.useridtoedit).subscribe((res) => {
    this.detailsofuser=res
    console.log(this.detailsofuser)
    this.firstnameofuser=this.detailsofuser.firstname
    this.lastnameofuser=this.detailsofuser.lastname
    this.emailofuser=this.detailsofuser.email
    this.phoneofuser=this.detailsofuser.phone
    this.addressofuser=this.detailsofuser.address
    this.cityofuser=this.detailsofuser.city
    this.countryofuser=this.detailsofuser.country
  }
  )
}
  
  get f() { return this.registerForm.controls; }

  onSubmit() {
      this.submitted = true;

      // stop here if form is invalid
      if (this.registerForm.invalid) {
          return;
      }

      this.loading = true;
      this.userService.update(this.registerForm.value,this.useridtoedit)
          .pipe(first())
          .subscribe(
              data => {
                  this.message = "User details updated successfully"
                  this.router.navigate(['/users']);
              },
              error => {
                  console.log(error)
                  this.message = error
                  this.loading = false;
              });
  }
  success(message: string, keepAfterNavigationChange = false) {
    this.keepAfterNavigationChange = keepAfterNavigationChange;
    this.subject.next({ type: 'success', text: message });
}

  error(message: string, keepAfterNavigationChange = false) {
    this.keepAfterNavigationChange = keepAfterNavigationChange;
    this.subject.next({ type: 'error', text: message });
}

  getMessage(): Observable<any> {
    return this.subject.asObservable();
}

}
