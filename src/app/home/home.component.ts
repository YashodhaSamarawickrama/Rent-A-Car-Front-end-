import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
// import { ApiService } from '../core/api.service';
import {RESTService} from '../rest.service'
import { internals } from 'rx';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  locations: any
  allVehicleData:[];
  allUserData:[];
  allPaymentData:[];
  allReservationsData:[];
  startdateAsDate :any
  enddateAsDate  : any
  diff :any;
  noofdays :any;

  searchCarForm = this.fb.group({
    location: new FormControl(null, Validators.required),
    start_date: new FormControl(new Date().toISOString().substring(0, 10), Validators.required),
    end_date: new FormControl(new Date().toISOString().substring(0, 10), Validators.required),
  });

  constructor(private router: Router, private fb: FormBuilder,private rest :RESTService) { 
  
  }
  ngOnInit() {
   
    //this.api.getLocations().subscribe(res => this.locations = res);
    this.rest.getallVehicleData().subscribe(res =>this.allVehicleData = res);
    // this.rest.getallUserData().subscribe(res =>this.allUserData = res);
    // this.rest.getallPaymentData().subscribe(res =>this.allPaymentData = res);
    // this.rest.getallReservationsData().subscribe(res =>this.allReservationsData = res);
    //this.rest.getallLocations().subscribe(r => this.locations = r)
    this.locations=['Piliyandala']

  }

  onSubmit(form) {
    
    if (this.searchCarForm.valid) {

      this.startdateAsDate = new Date (this.searchCarForm.controls.start_date.value)
      this.enddateAsDate = new Date (this.searchCarForm.controls.end_date.value)

       this.diff = Math.abs(this.enddateAsDate.getTime() - this.startdateAsDate.getTime());
       this.noofdays = Math.ceil(this.diff / (1000 * 3600 * 24));

      console.log(typeof(this.startdateAsDate))
      console.log(typeof(this.enddateAsDate))
      console.log(this.noofdays)

      const path = [
        'details',
        this.searchCarForm.controls.location.value,
        this.searchCarForm.controls.start_date.value ,
        this.searchCarForm.controls.end_date.value,
      ];
 
      this.router.navigate(path);

    }
    
  }

}
