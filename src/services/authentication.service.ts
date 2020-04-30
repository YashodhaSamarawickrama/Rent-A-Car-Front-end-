import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import {EventEmitter, Input, Output} from '@angular/core'


@Injectable()

export class AuthenticationService {
    
    constructor(private http: HttpClient) { }
    currentUserName :any
    UserName:any


    login(email: string, password: string) {
        return this.http.post<any>(`https://kdrentacar.tk:8001/users/authenticate`, { email: email, password: password })
            .pipe(map(user => {
                // login successful if there's a jwt token in the response
                if (user && user.token) {
                    // store user details and jwt token in local storage to keep user logged in between page refreshes
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    
                    
                }

                return user;
            }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
    }
}