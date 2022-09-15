import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiResponse } from '../model/ApiResponse';
import { User } from '../model/user';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  @Input()
   users: User[] = [];

  constructor(private service: DataService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(){
    this.service.getUsers().subscribe(
        (res: ApiResponse<User>) =>{
          console.log(res);
          this.users = res.data;

        }

    );
  }

}
