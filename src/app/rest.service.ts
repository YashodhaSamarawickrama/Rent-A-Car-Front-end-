import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

const endpoint = 'http://kdrentacar.tk:8001/api/'
const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json'
    })
  };
@Injectable({
  providedIn: 'root'
})
export class RESTService {
  private extractData(res: Response) {
    let body = res;
    return body || { };
  }
  locationsfromAPI:any;

  constructor(private http: HttpClient) { }

  getallVehicleData():Observable<any>{
    // return this.http.get(endpoint + 'vehicles').pipe(map(this.extractData.getJSON()) 
    return this.http.get(endpoint + 'vehicles')
    
    .map((res => {
      console.log(res)
      const r = [];
      for (const item of Object.keys(res)) {
        //console.log(res[item].location)
        this.locationsfromAPI = res[item].location
        //console.log(this.locationsfromAPI)
        //console.log(r.push(item['location']));
        r.push(item['location']);
      }
      // console.log(this.locationsfromAPI)
      return new Set(r);
    
    }))
  }

  getVehicles():Observable<any>{
    return this.http.get(endpoint + 'vehicles').pipe(map(this.extractData));
  }

  getUsers():Observable<any>{
    return this.http.get(endpoint + 'users').pipe(map(this.extractData));
  }

  getReservations():Observable<any>{
    return this.http.get(endpoint + 'reservations').pipe(map(this.extractData));
  }

  getPayments():Observable<any>{
    return this.http.get(endpoint + 'payments').pipe(map(this.extractData));
  }

  getallUserData():Observable<any>{
    // return this.http.get(endpoint + 'vehicles').pipe(map(this.extractData.getJSON()) 
    return this.http.get(endpoint + 'users')
    .map((res => {
      console.log(res)
      const r = [];
      for (const item of Object.keys(res)) {
        //console.log(res[item].location)
        this.locationsfromAPI = res[item].location
        //console.log(this.locationsfromAPI)
        //console.log(r.push(item['location']));
        r.push(item['location']);
      }
      // console.log(this.locationsfromAPI)
      return new Set(r);
    
    }))
  }
  getallPaymentData():Observable<any>{
    // return this.http.get(endpoint + 'vehicles').pipe(map(this.extractData.getJSON()) 
    return this.http.get(endpoint + 'payments')
    .map((res => {
      console.log(res)
      const r = [];
      for (const item of Object.keys(res)) {
        //console.log(res[item].location)
        this.locationsfromAPI = res[item].location
        //console.log(this.locationsfromAPI)
        //console.log(r.push(item['location']));
        r.push(item['location']);
      }
      // console.log(this.locationsfromAPI)
      return new Set(r);
    
    }))
  }
  getallReservationsData():Observable<any>{
    // return this.http.get(endpoint + 'vehicles').pipe(map(this.extractData.getJSON()) 
    return this.http.get(endpoint + 'reservations')
    .map((res => {
      console.log(res)
      //console.log(this.locationsfromAPI)
      return res;
    
    }))
  }
}

