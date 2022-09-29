import { Component, Input, OnInit } from '@angular/core';
import { Product } from '../model/product';
import { ActivatedRoute } from '@angular/router';
import { ApiResponse } from '../model/ApiResponse';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  @Input()
  products: Product[] = [];

  constructor(private service: DataService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getProducts();
  }

  getProducts(){
    this.service.getProducts().subscribe(
      (res: ApiResponse<Product>)=>{
        console.log(res);
        this.products = res.data;
      }
    )
  }

}
