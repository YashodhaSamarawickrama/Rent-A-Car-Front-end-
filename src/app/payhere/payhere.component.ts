import { Component, OnInit } from '@angular/core';
import {VehicleComponent} from '../vehicle/vehicle.component'

@Component({
  selector: 'app-payhere',
  templateUrl: './payhere.component.html',
  styleUrls: ['./payhere.component.scss']
})
export class PayhereComponent implements OnInit {
  firstnamefromlocalstorage:any;
  lastnamefromlocalstorage:any;
  phonefromlocalstorage:any;
  addressfromlocalstorage:any;
  cityfromlocalstorage:any;
  countryfromlocalstorage:any;
  emailfromlocalstorage:any;
  userfromlocalstorage:any;
  total:any
  item_name:any

  constructor() { }

  ngOnInit() {
    this.userfromlocalstorage = JSON.parse(localStorage.getItem('currentUser'))
    this.firstnamefromlocalstorage = this.userfromlocalstorage.firstname
    this.lastnamefromlocalstorage = this.userfromlocalstorage.lastname
    this.emailfromlocalstorage = this.userfromlocalstorage.email
    this.addressfromlocalstorage = this.userfromlocalstorage.address
    this.cityfromlocalstorage = this.userfromlocalstorage.city
    this.countryfromlocalstorage = this.userfromlocalstorage.country
    this.phonefromlocalstorage = this.userfromlocalstorage.phone
    
  }

}
