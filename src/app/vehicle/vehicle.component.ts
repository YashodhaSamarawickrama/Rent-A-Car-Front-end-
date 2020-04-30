import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {DetailsComponent} from '../details/details.component'
import { ApiService } from '../core/api.service';
import {RESTService} from '../rest.service';
import {MatDialog} from '@angular/material/dialog';

//import {payhere} from '../../payhere.js'
//
// import {Payhere}from '../payhere/Payhere.js'

 declare const payhere :any
 
@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.scss']
})

export class VehicleComponent implements OnInit {
  reservation :any;
  item_id ='';
  details: any;
  item_name : any;
  item_image:any;
  price_per_Day:any;
  Starting_Date_from_param:any;
  Ending_Date_from_param:any;
  No_of_Days:any;
  Total_amount:any;
  Vehicle_id:any;
  transmission_type:any;
  vehicle_type:any;
  seats:any;
  fuel_type:any;
  startdateAsDate:any;
  enddateAsDate:any;
  diff :any;
  noofdays :any;
  total:any;
  desctiption:any;
  firstnamefromlocalstorage:any;
  lastnamefromlocalstorage:any;
  phonefromlocalstorage:any;
  addressfromlocalstorage:any;
  cityfromlocalstorage:any;
  countryfromlocalstorage:any;
  emailfromlocalstorage:any;
  userfromlocalstorage:any;
  vehicletoDB:any;
  username:any;
  name:any;
  islogged:any;


  constructor(private router: Router, 
    private route: ActivatedRoute, 
    private api: ApiService,
    private rest :RESTService, 
    public dialog :MatDialog,
    private DetailsComponent:DetailsComponent,
     ) 
     
     { }

  ngOnInit() {

    this.item_id = this.route.snapshot.params['_id'];
    console.log(this.item_id)
    this.loadVehicleDetailsByID(this.item_id)
    this.Starting_Date_from_param = this.route.snapshot.params['start_date']
    this.Ending_Date_from_param = this.route.snapshot.params['end_date']
    this.startdateAsDate = new Date(this.Starting_Date_from_param)
    this.enddateAsDate = new Date(this.Ending_Date_from_param)
    this.diff = Math.abs(this.enddateAsDate.getTime() - this.startdateAsDate.getTime());
    this.noofdays = Math.ceil(this.diff / (1000 * 3600 * 24));
    this.total = this.noofdays * this.price_per_Day
    console.log(typeof(this.noofdays))
    console.log(typeof(this.price_per_Day))

    this.userfromlocalstorage = JSON.parse(localStorage.getItem('currentUser'))
    this.firstnamefromlocalstorage = this.userfromlocalstorage.firstname
    this.lastnamefromlocalstorage = this.userfromlocalstorage.lastname
    this.emailfromlocalstorage = this.userfromlocalstorage.email
    this.addressfromlocalstorage = this.userfromlocalstorage.address
    this.cityfromlocalstorage = this.userfromlocalstorage.city
    this.countryfromlocalstorage = this.userfromlocalstorage.country
    
    this.phonefromlocalstorage = this.userfromlocalstorage.phone
    if(localStorage.getItem('currentUser') != null){
      this.islogged = true
      
      this.username = JSON.parse(localStorage.getItem('currentUser'))
      console.log(this.username.firstname)
      this.name = this.username.firstname
    }
  }

  loadVehicleDetailsByID(item_id){
    this.rest.getVehicleDetailsById(item_id).subscribe((res) => {

      
      this.details = res;
      this.item_name = res.name;
      this.transmission_type=res.transmission;
      this.fuel_type=res.fuel_Type;
      this.seats=res.seats;
      this.vehicle_type = res.car_Type;
      this.item_image = res.photo;
      console.log(res.photo)
      console.log(this.item_image)
      this.Vehicle_id = res.vehicleID;
      this.desctiption = res.desctiption;
      this.price_per_Day = res.price;
      
      
      this.total = this.noofdays * this.price_per_Day
     
      console.log(this.details)
      this.firstnamefromlocalstorage = this.userfromlocalstorage.firstname
    this.lastnamefromlocalstorage = this.userfromlocalstorage.lastname
    this.emailfromlocalstorage = this.userfromlocalstorage.email
    this.addressfromlocalstorage = this.userfromlocalstorage.address
    this.cityfromlocalstorage = this.userfromlocalstorage.city
    this.countryfromlocalstorage = this.userfromlocalstorage.country
    
    this.phonefromlocalstorage = this.userfromlocalstorage.phone
    this.reservation={
    reservationID:'R001',
    name:this.firstnamefromlocalstorage,
    numberPlate:res.numberPlate,
    startDate:this.startdateAsDate,
    endDate:this.enddateAsDate,
    status:"Car will be picked"
  
  }
  this.vehicletoDB={
    _id:this.item_id,
    vehicleID:this.Vehicle_id,
    numberPlate:res.numberPlate,
    name:this.item_name,
    photo:this.item_image,
    price:this.price_per_Day,
    location:res.location,
    availability:res.availability,
    seats:this.seats,
    fuel_Type:this.fuel_type,
    transmission:this.transmission_type,
    car_Type:this.vehicle_type,
    desctiption:this.desctiption,
    status:'False'
  }
  })
}
onClick() {

  // this.dialog.open()
    
    // Called when user completed the payment. It can be a successful payment or failure
      payhere.onCompleted = function onCompleted(orderId) {
      this.addReservation()
      this.updateVehicle()
      console.log("Payment completed. OrderID:" + orderId);
      //Note: validate the payment and show success or failure page to the customer
  };

  // // Called when user closes the payment without completing
      payhere.onDismissed = function onDismissed() {
  //     //Note: Prompt user to pay again or show an error page
      console.log("Payment dismissed");
  };

  // Called when error happens when initializing payment such as invalid parameters
      payhere.onError = function onError(error) {
  //     // Note: show an error page
      console.log("Error:"  + error);
  };

  // Put the payment variables here
  var payment = {
      "sandbox": true,
      "merchant_id": "1211917",       // Replace your Merchant ID
      "return_url": "http://sample.com/return",
      "cancel_url": "http://sample.com/cancel",
      "notify_url": "http://sample.com/notify",
      "order_id": "ItemNo12345",
      "items": this.item_name,
      "amount": this.total,
      "currency": "LKR",
      "first_name": this.firstnamefromlocalstorage,
      "last_name": this.lastnamefromlocalstorage,
      "email": this.emailfromlocalstorage,
      "phone": this.phonefromlocalstorage,
      "address": this.addressfromlocalstorage,
      "city": this.cityfromlocalstorage,
      "country": this.countryfromlocalstorage,
      "delivery_address": this.addressfromlocalstorage,
      "delivery_city": this.cityfromlocalstorage,
      "delivery_country": this.countryfromlocalstorage,
      "custom_1": "",
      "custom_2": ""
  };


      payhere.startPayment(payment);
  
      }

      addReservation() {
        this.rest.addReservation(this.reservation).subscribe((result) => {
          console.log("saved")
        }, (err) => {
          console.log(err);
        });
      }

      updateVehicle(){
        this.rest.updateVehicle(this.item_id, this.vehicletoDB).subscribe((result) => {
        }, (err) => {
          console.log(err);
        });
      }
    
      }


  