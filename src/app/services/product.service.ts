import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { map } from 'rxjs/operators';
import { Category, SubCategory } from '../models/category';
import { iterator } from "rxjs/internal-compatibility";
import { mapEntry } from "@angular/compiler/src/output/map_util";

@Injectable()
export class ProductService {
  constructor(private api: ApiService) {
  }

  categories(): Observable<Category[]> {
    return this.api.get<any>('/productCategories').pipe(map(res => res.data));
  }

  subCategories(categoryId: number): Observable<SubCategory[]> {
    return this.api.get<any>('/productSubCategories/' + categoryId).pipe(map(res => res.data));
  }

  productsBySC(subCategoryId: number): Observable<Product[]> {
    return this.api.get<any>('/products-sc-admin/' + subCategoryId).pipe(map(res => res.data));
  }

  delete(type: string, id: number): Observable<any> {
    return this.api.delete<any>('/' + type + '/' + id);
  }

  createCategory(data: { title: string }): Observable<Category> {
    return this.api.post('/productCategories', data);
  }

  createSubCategory(data: any): Observable<SubCategory> {
    console.log(data);
    return this.api.post<any>('/productSubCategories', data).pipe(map(res => res.data));
  }

  createProduct(data: any): Observable<Product> {
    console.log(data);
    return this.api.post<any>('/products', data).pipe(map(res => res.data));
  }
}
