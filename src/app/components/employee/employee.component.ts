import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../../services/admin.service';
import { Employee } from '../../models/employee';
import { CreateEmployeeComponent } from '../create-employee/create-employee.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector   : 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls  : ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employees: Employee[] = [];

  constructor(private adminService: AdminService,
              private dialog: MatDialog,
              private router: Router) {
  }

  ngOnInit() {
    this.adminService.employees()
      .subscribe(res => {
        this.employees = res;
      });

  }

  createEmployee() {
    const dialogRef = this.dialog.open(CreateEmployeeComponent);
    dialogRef.afterClosed().subscribe(result => {
      this.adminService.employees()
        .subscribe(res => {
          this.employees = res;
        });
    });
  }

}
