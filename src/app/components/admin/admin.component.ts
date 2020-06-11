import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from '../../services/admin.service';
import { Data, Order } from '../../models/order';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';
import { MatDialog } from '@angular/material/dialog';
import { DeliveryBoyComponent } from '../delivery-boy/delivery-boy.component';

@Component({
  selector   : 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls  : ['./admin.component.css']
})
export class AdminComponent implements OnInit {

  orders: Data;
  selectedOrders: Order[]   = [];
  assignedOrders: Order[]   = [];
  unassignedOrders: Order[] = [];
  array                     = ['orders', 'products', 'employees', 'users'];

  constructor(private adminService: AdminService,
              private router: Router,
              private dialog: MatDialog,
  ) {
  }

  ngOnInit() {
    this.adminService.orders()
      .subscribe(res => {
        this.orders           = res;
        this.assignedOrders   = this.orders.assignedOrders;
        this.unassignedOrders = this.orders.unassignedOrders;
        this.selectedOrders   = this.unassignedOrders;
      });
    document.getElementById('unassigned').style.borderBottom = '4px solid #00BFFF';

  }

  underline(element: string) {
    if (element === 'unassigned') {
      this.selectedOrders = this.unassignedOrders;

      document.getElementById('unassigned').style.borderBottom = '4px solid #00BFFF';
      document.getElementById('assigned').style.borderBottom   = 'none';

    } else {
      this.selectedOrders = this.assignedOrders;

      document.getElementById('assigned').style.borderBottom   = '4px solid #00BFFF';
      document.getElementById('unassigned').style.borderBottom = 'none';
    }
  }

  assign(orderId) {
    const dialogRef = this.dialog.open(DeliveryBoyComponent, {
      data: {
        orderId
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      this.adminService.orders()
        .subscribe(res => {
          this.orders           = res;
          this.unassignedOrders = this.orders.unassignedOrders;
          this.selectedOrders   = this.unassignedOrders;
        });
    });
  }

}
