import { Component, OnInit } from '@angular/core';
import { ApiResponse } from '../model/ApiResponse';
import {User} from '../model/user'
import { DataService } from '../services/data.service';
import { UserService } from '../user-service.service';


@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.scss']
})
export class UserListComponent implements OnInit {

  users: User[];

  constructor(private service: DataService) {
  }

  ngOnInit() {
    this.service.getUsers().subscribe(
      (res: ApiResponse<User>)=>{
        this.users = res.data
      }
    );
}
}