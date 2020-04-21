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
  data:any;
  item :any;
  item_name:any;
  newarray :[];
  
  locationsfromAPI:any;

  constructor(private http: HttpClient) { }

  // private extractData(res: Response) {
  //   let body = res;
  //   return body || { };
  // }

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
      // console.log(r)
      // console.log(this.locationsfromAPI)
      
      // return new Set(r);
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
}

