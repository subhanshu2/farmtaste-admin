import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector   : 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls  : ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  controls = {
    title        : new FormControl('', [Validators.required]),
    is_under_gst : new FormControl('', [Validators.required]),
    gst_rate     : new FormControl(''),
    base_quantity: new FormControl('', [Validators.required]),
    mrp          : new FormControl('', [Validators.required]),
    selling_price: new FormControl(''),
    image        : new FormControl('', [Validators.required]),
  };

  form    = new FormGroup(this.controls);
  loading = false;
  gstBoolean;

  constructor(private productService: ProductService,
              private http: HttpClient,
              private dialogRef: MatDialogRef<CreateProductComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit(): void {
  }

  close() {
    this.dialogRef.close();
  }

  onFileChange(event) {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.form.get('image').setValue(file);
    }
  }

  private prepareSave(): any {
    const input = new FormData();
    input.append('title', this.form.get('title').value);
    input.append('sub_category_id', this.data.subCategoryId);
    input.append('is_under_gst', this.form.get('is_under_gst').value);
    if (this.form.value.gst_rate) {
      input.append('gst_rate', this.form.get('gst_rate').value);
    }
    input.append('base_quantity', this.form.get('base_quantity').value);
    input.append('mrp', this.form.get('mrp').value);
    if (this.form.value.selling_price) {
      input.append('selling_price', this.form.get('selling_price').value);
    }
    input.append('type', 'product');
    input.append('image', this.form.get('image').value);
    input.append('city_id', '1');
    return input;
  }

  createProduct() {
    const formModel = this.prepareSave();
    this.loading    = true;
    this.productService.createProduct(formModel)
      .subscribe(res => {
        this.dialogRef.close();
      });
  }
}
