import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {DetailsComponent} from '../details/details.component'
import { ApiService } from '../core/api.service';
import {RESTService} from '../rest.service'

@Component({
  selector: 'app-vehicle',
  templateUrl: './vehicle.component.html',
  styleUrls: ['./vehicle.component.scss']
})
export class VehicleComponent implements OnInit {

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

  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService,private rest :RESTService, private DetailsComponent:DetailsComponent  ) { }

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
      this.price_per_Day = res.price;
      this.total = this.noofdays * this.price_per_Day
     

      console.log(this.details)

      
  })
}

  }
