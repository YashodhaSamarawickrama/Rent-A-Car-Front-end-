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

  constructor(private http: HttpClient) { }

  getLocations():Observable<any>{
    return this.http.get(endpoint + 'vehicles');
  }

  getVehicles():Observable<any>{
    return this.http.get(endpoint + 'vehicles');
  }

  getUsers():Observable<any>{
    return this.http.get(endpoint + 'users');
  }

  getReservations():Observable<any>{
    return this.http.get(endpoint + 'reservations');
  }

  getPayments():Observable<any>{
    return this.http.get(endpoint + 'payments');
  }
}

