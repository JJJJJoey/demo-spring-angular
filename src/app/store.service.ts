import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs'; 
import { Store } from './model/store';

@Injectable({
  providedIn: 'root'
})
export class StoreService {
  private storesUrl: string;
  constructor(private http:HttpClient) { 
    this.storesUrl = 'http://localhost:8080/stores';
  }

  public findAll(): Observable<Store[]> {
    return this.http.get<Store[]>(this.storesUrl);
  }

  public save(store: Store) {
    return this.http.post<Store>(this.storesUrl, store);
  }
}
