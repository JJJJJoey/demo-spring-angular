import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { User } from '../model/user';
import { ApiResponse } from '../model/ApiResponse';
import { Store } from '../model/store';
import { Product } from '../model/product';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private http: HttpClient) { }
  baseUrl: String = 'http://localhost:8080';

  getUsers(): Observable<ApiResponse<User>> {
    return this.http.get<ApiResponse<User>>(this.baseUrl + '/users');
  }

  getStores(): Observable<ApiResponse<Store>> {
    return this.http.get<ApiResponse<Store>>(this.baseUrl + '/stores');
  }

  getProducts(): Observable<ApiResponse<Product>> {
    return this.http.get<ApiResponse<Product>>(this.baseUrl + '/stores');
  }
  
}