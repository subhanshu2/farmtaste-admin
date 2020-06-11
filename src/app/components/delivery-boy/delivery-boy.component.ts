import { Component, Inject, OnInit } from '@angular/core';
import { Employee } from '../../models/employee';
import { AdminService } from '../../services/admin.service';
import { Router } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector   : 'app-delivery-boy',
  templateUrl: './delivery-boy.component.html',
  styleUrls  : ['./delivery-boy.component.css']
})
export class DeliveryBoyComponent implements OnInit {

  employees: Employee[] = [];
  employeeId: number;

  constructor(private adminService: AdminService,
              private router: Router,
              private matDialog: MatDialog,
              public dialogRef: MatDialogRef<DeliveryBoyComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit(): void {
    this.adminService.employees()
      .subscribe(res => {
        this.employees = res;
      });

    this.employees.filter(e => {
      return e.category_id === 3;
    });
  }

  select(employeeId: number) {
    this.adminService.assign(employeeId, this.data.orderId)
      .subscribe(res => {
        this.matDialog.closeAll();
        this.router.navigate(['/admin-home']);
      });
  }

  close() {
    this.dialogRef.close();
  }

}
