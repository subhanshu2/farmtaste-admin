import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { AdminService } from '../../services/admin.service';
import { Router } from '@angular/router';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { Category, SubCategory } from '../../models/category';
import { ConfirmationDialogComponent } from '../confirmation-dialog/confirmation-dialog.component';
import { CreateCategoryComponent } from '../create-category/create-category.component';
import { CreateSubCategoryComponent } from "../create-sub-category/create-sub-category.component";
import { CreateProductComponent } from "../create-product/create-product.component";

@Component({
  selector   : 'app-candidates',
  templateUrl: './product.component.html',
  styleUrls  : ['./product.component.css']
})
export class ProductComponent implements OnInit {

  products: Product[]          = [];
  categories: Category[]       = [];
  subCategories: SubCategory[] = [];
  lastCategoryId: number;
  lastSubCategoryId: number;

  constructor(private productService: ProductService,
              public dialog: MatDialog,
              public router: Router) {
  }

  ngOnInit() {
    this.categories = [];
    this.productService.categories()
      .subscribe(res => {
        this.categories = res;
      });
  }

  show(type, current) {
    const x = document.getElementsByClassName(type) as HTMLCollectionOf<HTMLElement>;
    if (x.length !== 0) {
      x[0].style.display = 'block';
    }
    const y = document.getElementsByClassName(current) as HTMLCollectionOf<HTMLElement>;
    if (y.length !== 0) {
      y[0].style.display = 'none';
    }
  }

  showSubCategories(categoryId) {
    this.productService.subCategories(categoryId)
      .subscribe(res => {
        this.subCategories = res;
      });
    const x = document.getElementsByClassName('categories') as HTMLCollectionOf<HTMLElement>;
    if (x.length !== 0) {
      x[0].style.display = 'none';
    }
    const y = document.getElementsByClassName('subCategories') as HTMLCollectionOf<HTMLElement>;
    if (y.length !== 0) {
      y[0].style.display = 'block';
    }
    this.lastCategoryId = categoryId;
  }

  showProducts(subCategoryId) {
    this.productService.productsBySC(subCategoryId)
      .subscribe(res => {
        this.products = res;
      });
    const x = document.getElementsByClassName('categories') as HTMLCollectionOf<HTMLElement>;
    if (x.length !== 0) {
      x[0].style.display = 'none';
    }
    const y = document.getElementsByClassName('subCategories') as HTMLCollectionOf<HTMLElement>;
    if (y.length !== 0) {
      y[0].style.display = 'none';
    }
    const z = document.getElementsByClassName('products') as HTMLCollectionOf<HTMLElement>;
    if (z.length !== 0) {
      z[0].style.display = 'block';
    }
    this.lastSubCategoryId = subCategoryId;
  }

  delete(type, id) {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus    = true;
    const dialogRef           = this.dialog.open(ConfirmationDialogComponent, {...dialogConfig, data: {type, id}});
    if (type === 'productCategory') {
      dialogRef.afterClosed().subscribe(() =>
        this.productService.categories()
          .subscribe(res => {
            this.categories = res;
          }));
    } else if (type === 'productSubCategory') {
      dialogRef.afterClosed().subscribe(() =>
        this.productService.subCategories(this.lastCategoryId)
          .subscribe(res => {
            this.subCategories = res;
          }));
    } else {
      dialogRef.afterClosed().subscribe(() =>
        this.productService.productsBySC(this.lastSubCategoryId)
          .subscribe(res => {
            this.products = res;
          }));
    }
  }

  createCategory() {
    const dialogRef = this.dialog.open(CreateCategoryComponent);
    dialogRef.afterClosed().subscribe(() =>
      this.productService.categories()
        .subscribe(res => {
          this.categories = res;
        })
    );
  }

  createSubCategory(categoryId: number) {
    const dialogRef = this.dialog.open(CreateSubCategoryComponent, {data: {categoryId}});
    dialogRef.afterClosed().subscribe(() =>
      this.productService.subCategories(categoryId)
        .subscribe(res => {
          this.subCategories = res;
        })
    );
  }

  createProduct(subCategoryId: number) {
    const dialogRef = this.dialog.open(CreateProductComponent, {data: {subCategoryId}});
    dialogRef.afterClosed().subscribe(() =>
      this.productService.productsBySC(subCategoryId)
        .subscribe(res => {
          this.products = res;
        })
    );
  }

}
