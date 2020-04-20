import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

import { environment } from '../../environments/environment';
import { AnyTxtRecord } from 'dns';
const endpoint = 'http://kdrentacar.tk:8001/api/'
const httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Access-Control-Allow-Origin': '*'
    })
  };
@Injectable({
  providedIn: 'root'
  
})

export class ApiService {
  data:any;
  item :any;
  item_name:any;

  constructor(private http: HttpClient) {
    let obj;
    this.getJSON().subscribe(data => obj = data, error => console.log(error));
  }
  
  private extractData(res: Response) {
    let body = res;
    return body || { };
  }


  public getJSON(): Observable<any> {
    return this.http.get(environment.api);
  }

  getDetails(): Observable<any> {
    return this.getJSON()
      .map((res) => {
        const r = [];
        for (const item of res) {
          r.push(item);
        }
        return r;
      });
  }

  getDetailsFor(location): Observable<any> {
    return this.getJSON()
      .map((res) => {
        const r = [];
        for (const item of res) {
          if (item['location'] === location) {
            this.item_name=item.name
            console.log(this.item_name)
            r.push(item);
          }
        }
        return r;
      });
  }
  getdetailsFor(name): Observable<any> {
    return this.getJSON()
      .map((res) => {
        const r = [];
        for (const item of res) {
          if (item['item.name'] === item.name) {
            this.item_name=item.name
            console.log(this.item_name)
            r.push(item);
          }
        }
        return r;
      });
  }
  getLocations(): Observable<any> {
    return this.getJSON()
      .map((res) => {
        const r = [];
        for (const item of res) {
          console.log(item)
          r.push(item['location']);
        }
        return new Set(r);
      });
  }
  getdetailsofbookitem(item): Observable<any> {
    return this.getJSON()
      .map((res) => {
        const r = [];
        for (const item of res) {
          console.log(item['name'])
          r.push(item['name']);
        }
        return new Set(r);
      });
  }



}
