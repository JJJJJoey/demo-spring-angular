import { Component, OnInit } from '@angular/core';
import { ApiResponse } from '../model/ApiResponse';
import { Store } from '../model/store';
import { DataService } from '../services/data.service';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-store-list',
  templateUrl: './store-list.component.html',
  styleUrls: ['./store-list.component.scss']
})
export class StoreListComponent implements OnInit {

  stores: Store[];
  constructor(private service: DataService) { }

  ngOnInit(): void {
    this.service.getStores().subscribe(
      (res: ApiResponse<Store>)=>{
        this.stores = res.data;
      }
    );
  }

}
