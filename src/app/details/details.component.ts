import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../core/api.service';
import {RESTService} from '../rest.service'

/**
 * Lists details of all the matching cars in card list format.
 *
 * @export DetailsComponent
 * @class DetailsComponent
 * @implements {OnInit}
 */
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})

export class DetailsComponent implements OnInit {

  // Location and date
  locations;
  location_input;
  start_date_input;
  end_date_input;
  item_name : any;
  item_id : any;
  selected_item :any;
  price_of_selected_item:any;
  name_of_the_selected_item:any;
  startdateAsDate :any
  enddateAsDate  : any
  diff :any;
  noofdays :any;
  path2:any;
  
  
  // Sub query filter
  query_input = '';

  // Transmission type filter
  trans_type = ['Transmission', 'Manual', 'Automatic'];
  trans_type_input = this.trans_type[0];

  // Car type filter
  car_type = ['Car', 'Hatchback', 'Sedan', 'SUV', 'Mini SUV'];
  car_type_input = this.car_type[0];

  // Fuel type filter
  fuel_type = ['Fuel', 'Petrol', 'Diesel'];
  fuel_type_input = this.fuel_type[0];

  // Sorting filter
  sort_by = ['Sort', 'Price: Low to High', 'Price: High to Low'];
  sort_by_input = this.sort_by[0];

  // Original extracted data
  details: any;

  // Filtered data from extracted data
  items: any[] = [];
  page = 1;
  
  itemname:any;


  // Todays 3 letter day for comparison
  day = (new Date()).toLocaleDateString('en', { weekday: 'short' }).toLowerCase();

  /**
   *Creates an instance of DetailsComponent.
   * @param {Router} router
   * @param {ActivatedRoute} route
   * @param {ApiService} api
   * @memberof DetailsComponent
   */
  constructor(private router: Router, private route: ActivatedRoute, private api: ApiService,private rest :RESTService) { }

  /**
   * ngOnInit
   *
   * @memberof DetailsComponent
   */
  ngOnInit() {
    //this.api.getLocations().subscribe(res => this.locations = res);
    this.rest.getallLocations().subscribe(r => this.locations = r)
    // this.rest.getLocations().subscribe(res => 
    //   this.locations = res=>
    //   console.log(this.locations)
     
    // )
    
    this.location_input = this.route.snapshot.params['location'];
    this.start_date_input = this.route.snapshot.params['start_date'];
    this.end_date_input = this.route.snapshot.params['end_date'];

    this.refreshDetails();
    

  }

  onChangeLocation($event) {
    this.refreshDetails();
  }

  onChangeStartDate($event) {
    this.refreshDetails();
  }

  /**
   * Refreshes the details data by re-fetching data based on location.
   *
   * @memberof DetailsComponent
   */
  refreshDetails() {
  
    // Update path if the form is changed later on 
    let path = ['details'];

    if (this.location_input && this.location_input.length > 0) {
      path = ['details', this.location_input, this.start_date_input,this.end_date_input];
    }
    this.router.navigate(path);

    // Fetch data
    this.rest.getDetailsFor(this.location_input).subscribe((res) => {
    //this.api.getDetailsFor(this.location_input).subscribe((res) => {
      this.details = res;
      console.log(this.details)

      for (const i of this.details) {
        // this.selected_item=item.selected
        //console.log(this.selected_item)
        //console.log(item.selected)
        this.item_name=i.name
        console.log(this.item_name)
        this.item_id=i._id
        i.selected = false;
      }
      this.refreshItems();
    });
  }

  onChangeQuery($event) {
    this.filter();
  }

  onChangeTransType($event) {
    this.filter();
  }

  onChangeCarType($event) {
    this.filter();
  }

  onChangeFuelType($event) {
    this.filter();
  }

  onChangeSortBy($event) {
    this.sort();
  }

  /**
   * Filters the details based on various params.
   *
   * @memberof DetailsComponent
   */
  filter() {
    let newItems: any[] = [...this.details];

    if (this.query_input && this.query_input.length > 2) {
      const query = this.query_input.trim().toLowerCase();

      newItems = newItems.filter(x => x['name'].toLowerCase().indexOf(query) > -1);
    }

    if (this.trans_type_input && this.trans_type_input !== this.trans_type[0]) {
      newItems = newItems.filter(x => x['transmission'] === this.trans_type_input);
    }

    if (this.car_type_input && this.car_type_input !== this.car_type[0]) {
      newItems = newItems.filter(x => x['car_Type'] === this.car_type_input);
    }

    if (this.fuel_type_input && this.fuel_type_input !== this.fuel_type[0]) {
      newItems = newItems.filter(x => x['fuel_Type'] === this.fuel_type_input);
    }

    this.items.length = 0;
    this.items.push(...newItems);
  }

  /**
   * Sorts the details based on various params.
   * Also sorts based on availability at final step always.
   *
   * @memberof DetailsComponent
   */
  sort() {
    if (this.sort_by_input && this.sort_by_input !== this.sort_by[0]) {
      switch (this.sort_by_input) {
        case this.sort_by[1]:
          this.items.sort((x: any, y: any) => {
            const xn = x['price'];
            const yn = y['price'];

            if (xn > yn) {
              return 1;
            }
            if (xn < yn) {
              return -1;
            }
            return 0;
          });
          break;

        case this.sort_by[2]:
          this.items.sort((x: any, y: any) => {
            const xn = x['price'];
            const yn = y['price'];

            if (xn > yn) {
              return -1;
            }
            if (xn < yn) {
              return 1;
            }
            return 0;
          });
          break;

        default:
          break;
      }
    }

    this.items.sort((x: any, y: any) => {
      const xn = +this.isAvailable(x);
      const yn = +this.isAvailable(y);

      if (xn > yn) {
        return -1;
      }
      if (xn < yn) {
        return 1;
      }
      return 0;
    });
  }

  /**
   * Refreshes the UI data, filter + sort .
   *
   * @memberof DetailsComponent
   */
  refreshItems() {
    this.filter();
    this.sort();
  }

  // handleBook(){
  //   this.api.getdetailsofbookitem(this.itemname).subscribe((res) => {
  //     this.details = res;

  //     for (const item of this.details) {
  //       this.selected_item=item.selected
  //       console.log(this.selected_item)
  //       console.log(item.selected)
  //       item.selected = false;
  //     }
  //     this.refreshItems();
  //   });
  // }
  handleNewBook(){
    
  }

  book(item_id){
   
    this.rest.BookItem(item_id).subscribe((res) => {
      this.details = res;
      console.log(this.details)

      for (const item of this.details) {
        this.selected_item=item.selected
        //console.log(this.selected_item)
        //console.log(item.selected)
        this.item_name=item.name
        this.item_id=item._id
        item.selected = true;
      }
    })
    let path = ['vehicles'];
    if ((this.location_input && this.location_input.length > 0) && (localStorage.getItem('currentUser') != null)) {
      path = ['vehicles',item_id,this.start_date_input,this.end_date_input];
      
    }
    else{
      path = ['/login']
      this.path2=['vehicles'+'/'+item_id+'/'+this.start_date_input+'/'+this.end_date_input]
      localStorage.setItem('redirectTo',this.path2);
    }

      this.router.navigate(path);
    
  }
  /**
   * Returns true if the items week day is today.
   *
   * @param {any} item
   * @returns {boolean}
   * @memberof DetailsComponent
   */
  isAvailable(item) {
    if (item && item['availability'] && item['availability'].toLowerCase().indexOf(this.day) > -1) {
      return true;
    }
    return false;
  }

}
