import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { User } from '../models/user';

@Injectable()
export class UserService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<User[]>(`https://kdrentacar.tk:8001/users`);
    }

    getById(id: number) {
        return this.http.get(`https://kdrentacar.tk:8001/users` + id);
    }

    register(user: User) {
        return this.http.post(`https://kdrentacar.tk:8001/users/register`, user);
    }

    update(user: User) {
        return this.http.put(`https://kdrentacar.tk:8001/users` + user.id, user);
    }

    delete(id: number) {
        return this.http.delete(`https://kdrentacar.tk:8001/users` + id);
    }
}