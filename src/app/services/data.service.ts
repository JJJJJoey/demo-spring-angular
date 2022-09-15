import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { User } from '../model/user';
import { ApiResponse } from '../model/ApiResponse';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) { }
  baseUrl: String = 'http://localhost:8080';

  getUsers(): Observable<ApiResponse<User>> {
    return this.http.get<ApiResponse<User>>(this.baseUrl + '/users');
  }
  
}