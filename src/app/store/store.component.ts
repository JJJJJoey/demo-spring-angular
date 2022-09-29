import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiResponse } from '../model/ApiResponse';
import { DataService } from '../services/data.service';
import { Store } from '../model/store';

@Component({
  selector: 'app-store',
  templateUrl: './store.component.html',
  styleUrls: ['./store.component.scss']
})
export class StoreComponent implements OnInit {

  @Input()
  stores: Store[] = [];

  constructor(private service: DataService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getStores();
  }

  getStores(){
    this.service.getStores().subscribe(
      (res: ApiResponse<Store>)=>{
        console.log(res);
        this.stores = res.data;
      }
    )
  }

}
