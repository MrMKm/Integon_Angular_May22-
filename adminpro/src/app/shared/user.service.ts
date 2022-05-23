import { User } from './user';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  public users:User[] = [];

  constructor(private http:HttpClient) { }

  getUsers():Observable<User[]> {
    return this.http.get<User[]>('http://localhost:3006/users')
  }

  setUsers(user:User):Observable<User> {
    return this.http.post<User>('http://localhost:3006/users', user);
  }
}
