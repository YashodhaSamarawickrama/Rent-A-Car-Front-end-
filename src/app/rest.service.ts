import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import { analyzeAndValidateNgModules } from '@angular/compiler';

//const endpoint = 'http://kdrentacar.tk:8001/api/'
const endpoint = 'http://localhost:8000/api/'
const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };
@Injectable({
  providedIn: 'root'
})
export class RESTService {
  data:any;
  item :any;
  item_name:any;
  item_id:any;
  newarray :[];

  
  locationsfromAPI:any;

  constructor(private http: HttpClient) { }


  getallVehicleData():Observable<any>{
    // return this.http.get(endpoint + 'vehicles').pipe(map(this.extractData.getJSON()) 
    return this.http.get(endpoint + 'vehicles')
    .map((res => {
      console.log(res)
      return res;
    
    }))
  }

  getallLocations():Observable<any>{
  
    return this.http.get(endpoint + 'vehicles')
    .map((res => {
      console.log(res)
      const r = [];
      for (const item of Object.keys(res)) {
        //console.log(res[item].location)
        this.locationsfromAPI = res[item].location
        console.log(this.locationsfromAPI)
        r.push(res[item].location);
      }
     
      return r
      
    }))
  }

  getallUserData():Observable<any>{
    // return this.http.get(endpoint + 'vehicles').pipe(map(this.extractData.getJSON()) 
    return this.http.get(endpoint + 'users')
    .map((res => {
      console.log(res)
      return res;
    }))
  }
  getallPaymentData():Observable<any>{
    // return this.http.get(endpoint + 'vehicles').pipe(map(this.extractData.getJSON()) 
    return this.http.get(endpoint + 'payments')
    .map((res => {
      console.log(res)
      return res;
    }))
  }
  getallReservationsData():Observable<any>{
    // return this.http.get(endpoint + 'vehicles').pipe(map(this.extractData.getJSON()) 
    return this.http.get(endpoint + 'reservations')
    .map((res => {
      console.log(res)
      return res;
    
    }))
  }
  getDetailsFor(location): Observable<any> {
    return this.http.get(endpoint+'vehicles')
      .map((res) => {
        const r = [];
        for (const item of Object.keys(res)) {
          if (res[item].location === location && res[item].status === true) {
              this.item_name = res[item].name
              this.item_id = res[item]._id
              console.log(this.item_name)
              console.log(this.item_id)
              r.push(res[item]);
          }
        }
        console.log(r)
        return r;
      });
  }

  BookItem(location): Observable<any> {
    return this.http.get(endpoint+'vehicles')
      .map((res) => {
        const r = [];
        for (const item of Object.keys(res)) {
          if (res[item].location === location) {
              this.item_name = res[item].name
              console.log(this.item_name)

              r.push(res[item]);
          }
        }
        console.log(r)
        return r;
      });
  }

  getVehicleDetailsById(_id):Observable<any>{
    return this.http.get(endpoint+'vehicles/'+_id)
      // .map((res)=>{
      //   console.log(res)
      //   const r = [];
      //   for (const item of Object.keys(res)) {
      //     console.log('inside for')
      //     console.log(res[item].id)
      //     if (res[item]._id ==_id) {
      //       console.log('inside if')
      //         this.item_name = res[item].name
      //         console.log(this.item_name)

      //         r.push(res[item]);
      //     }
      //   }
      //   console.log(r)
      //   return r;
      // });
    }
    

  }
