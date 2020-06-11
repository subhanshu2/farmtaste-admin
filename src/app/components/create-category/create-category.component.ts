import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AdminService } from '../../services/admin.service';
import { Router } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
import { ProductService } from '../../services/product.service';

@Component({
  selector   : 'app-create-candidate',
  templateUrl: './create-category.component.html',
  styleUrls  : ['./create-category.component.css']
})
export class CreateCategoryComponent implements OnInit {

  controls = {
    title: new FormControl(null, [Validators.required]),
  };

  form = new FormGroup(this.controls);
  loading: boolean;

  constructor(private productService: ProductService,
              private dialogRef: MatDialogRef<CreateCategoryComponent>,
              private router: Router) {
  }

  ngOnInit() {
  }

  createCategory() {

    if (this.form.invalid) {
      console.log('hii');
    }

    const data = this.form.value;

    this.productService.createCategory(data)
      .subscribe(res => {
        this.dialogRef.close();
      });
  }

  close() {
    this.dialogRef.close();
  }


}
