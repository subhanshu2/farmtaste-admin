import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { HttpClient } from '@angular/common/http';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { AdminService } from '../../services/admin.service';
import { EmployeeCategory } from '../../models/employee';

@Component({
  selector   : 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls  : ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {

  categories: EmployeeCategory[] = [];

  controls = {
    name          : new FormControl('', [Validators.required]),
    email         : new FormControl('', [Validators.required]),
    mobile_no     : new FormControl('', [Validators.required]),
    password      : new FormControl('', [Validators.required]),
    aadhaar_no    : new FormControl('', [Validators.required]),
    driver_license: new FormControl(''),
    category_id   : new FormControl('', [Validators.required]),
    state         : new FormControl('', [Validators.required]),
    city          : new FormControl('', [Validators.required]),
    location      : new FormControl('', [Validators.required]),
    area          : new FormControl('', [Validators.required]),
    pincode       : new FormControl('', [Validators.required]),
  };

  form    = new FormGroup(this.controls);
  loading = false;
  gstBoolean;

  constructor(private adminService: AdminService,
              private http: HttpClient,
              private dialogRef: MatDialogRef<CreateEmployeeComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit(): void {
    this.adminService.employeeCategories()
      .subscribe(res => {
        this.categories = res;
      });
  }

  close() {
    this.dialogRef.close();
  }

  createEmployee() {
    if (this.form.invalid) {
      alert('incorrect fields');
    }
    const data = this.form.value;
    this.adminService.createEmployee(data)
      .subscribe(res => {
        this.dialogRef.close();
      });
  }

}
