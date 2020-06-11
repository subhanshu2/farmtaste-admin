import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { HttpClient } from '@angular/common/http';

@Component({
  selector   : 'app-create-sub-category',
  templateUrl: './create-sub-category.component.html',
  styleUrls  : ['./create-sub-category.component.css']
})
export class CreateSubCategoryComponent implements OnInit {

  controls = {
    title: new FormControl('', [Validators.required]),
    image: new FormControl('', [Validators.required]),
  };

  form    = new FormGroup(this.controls);
  loading = false;

  constructor(private productService: ProductService,
              private http: HttpClient,
              private dialogRef: MatDialogRef<CreateSubCategoryComponent>,
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
    input.append('type', 'sub category');
    input.append('category_id', this.data.categoryId);
    input.append('image', this.form.get('image').value);
    return input;
  }

  createSubCategory() {
    const formModel = this.prepareSave();
    this.loading    = true;
    this.productService.createSubCategory(formModel)
      .subscribe(res => {
        this.dialogRef.close();
      });

  }

}
