import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../../services/admin.service';
import { Data, Order } from '../../models/order';
import { User } from "../../models/user";

@Component({
  selector   : 'app-user',
  templateUrl: './user.component.html',
  styleUrls  : ['./user.component.css']
})
export class UserComponent implements OnInit {

  users: User[] = [];

  constructor(private adminService: AdminService,
              private router: Router) {
  }

  ngOnInit() {
    this.adminService.users()
      .subscribe(res => {
        this.users = res;
      });

  }

}
