import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../services/admin.service';
import { History } from '../../models/history';

@Component({
  selector   : 'app-history',
  templateUrl: './history.component.html',
  styleUrls  : ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  selectedOrders: History[]  = [];
  deliveredOrders: History[] = [];
  rejectedOrders: History[]  = [];
  cancelledOrders: History[] = [];

  constructor(private adminService: AdminService) {
  }

  ngOnInit(): void {
    this.adminService.delivered()
      .subscribe(res => {
        this.selectedOrders = res;
      });
    document.getElementById('delivered').style.borderBottom = '4px solid #00BFFF';
    document.getElementById('cancelled').style.borderBottom = 'none';
    document.getElementById('rejected').style.borderBottom  = 'none';

  }

  viewDeliveredOrders() {
    document.getElementById('delivered').style.borderBottom = '4px solid #00BFFF';
    document.getElementById('cancelled').style.borderBottom = 'none';
    document.getElementById('rejected').style.borderBottom  = 'none';

    this.adminService.delivered()
      .subscribe(res => {
        this.selectedOrders = res;
      });
  }

  viewCancelledOrders() {
    document.getElementById('delivered').style.borderBottom = 'none';
    document.getElementById('cancelled').style.borderBottom = '4px solid #00BFFF';
    document.getElementById('rejected').style.borderBottom  = 'none';

    this.adminService.cancelled()
      .subscribe(res => {
        this.selectedOrders = res;
      });
  }

  viewRejectedOrders() {
    document.getElementById('delivered').style.borderBottom = 'none';
    document.getElementById('cancelled').style.borderBottom = 'none';
    document.getElementById('rejected').style.borderBottom  = '4px solid #00BFFF';

    this.adminService.rejected()
      .subscribe(res => {
        this.selectedOrders = res;
      });
  }

  downloadPdf(historyId: number) {
    this.adminService.downloadPdf(historyId)
      .subscribe((data) => {
        // const blob = new Blob([data], {type: 'application/pdf'});
        //   // if (window.navigator && window.navigator.msSaveOrOpenBlob) {
        //   //   window.navigator.msSaveOrOpenBlob(blob);
        //   //   return;
        //   // }
        //   //
        //   // const downloadURL = URL.createObjectURL(blob);
        //   // window.open(downloadURL);
        //   // });
        //
        //   const link    = document.createElement('a');
        //   link.href     = window.URL.createObjectURL(blob);
        //   link.download = 'filename.pdf';
        //   link.click();
        console.log('success');
      });
  }
}
