import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { ApiService } from '../core/api.service';
import { internals } from 'rx';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  locations: [];
  dtToday : Date;
  noOfDays = Date;
  startDateAsDate : Date;
  endDateAsDate : Date;
 
  searchCarForm = this.fb.group({
    location: new FormControl(null, Validators.required),
    start_date: new FormControl(new Date().toISOString().substring(0, 10), Validators.required),
    end_date: new FormControl(new Date().toISOString().substring(0, 10), Validators.required),
  });

  constructor(private router: Router, private fb: FormBuilder, private api: ApiService) { 
   this.dtToday = new Date();
   this.startDateAsDate = new Date();
   this.endDateAsDate = new Date();


  }

  ngOnInit() {
   
    this.api.getLocations().subscribe(res => this.locations = res);
    
  }

  onSubmit(form) {
    

    if (this.searchCarForm.valid) {
      const path = [
        'details',
        this.searchCarForm.controls.location.value,
        this.searchCarForm.controls.start_date.value ,
        this.searchCarForm.controls.end_date.value,
      ];
 
      this.router.navigate(path);
    }
    const oneDay = 24 * 60 * 60 * 1000;
    console.log("hey");
    console.log(this.noOfDays);
    // this.startDateAsDate = this.startDateAsDate.valueOf();
    //console.log(typeof(this.startDateAsDate.getDate()));
    
    console.log(this.endDateAsDate);
    let difference = this.startDateAsDate.valueOf() - this.endDateAsDate.valueOf();
    console.log(difference);
    const diffDays = Math.round(Math.abs((this.startDateAsDate.getDate() - this.endDateAsDate.getDate()) / oneDay));
    console.log(diffDays);
  }

}
