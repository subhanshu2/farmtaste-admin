import { Component, Inject, OnInit } from '@angular/core';
import { Employee } from '../../models/employee';
import { AdminService } from '../../services/admin.service';
import { Router } from '@angular/router';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import {OrderStatus} from '../../models/enums';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Order} from '../../models/order';

@Component({
  selector   : 'change-order-status',
  templateUrl: './change-order-status.component.html',
  styleUrls  : ['./change-order-status.component.css']
})
export class ChangeOrderStatusComponent implements OnInit {

  statuses = Object.values(OrderStatus);
  selectedStatus;

  controls = {
    delivery_time: new FormControl(this.order.delivery_time),
    order_status: new FormControl(this.order.order_status),
  };

  form = new FormGroup(this.controls);

  constructor(private adminService: AdminService,
              private router: Router,
              private matDialog: MatDialog,
              public dialogRef: MatDialogRef<ChangeOrderStatusComponent>,
              @Inject(MAT_DIALOG_DATA) public order: Order) {
  }

  ngOnInit(): void {
    console.log(this.statuses);
  }

  updateOrder() {
    if (this.form.invalid) {
      alert('Invalid Data');
    }

    const data = this.form.value;
    this.adminService.updateOrder(this.order.id, data)
      .subscribe(res => {
        this.matDialog.closeAll();
        this.router.navigate(['/admin-home']);
      });
  }

  close() {
    this.dialogRef.close();
  }

}
