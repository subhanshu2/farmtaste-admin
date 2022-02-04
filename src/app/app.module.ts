import { BrowserModule } from '@angular/platform-browser';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ApiService } from './services/api.service';
import { UserService } from './services/user.service';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { AdminComponent } from './components/admin/admin.component';
import { AdminService } from './services/admin.service';
import { ProductComponent } from './components/product/product.component';
import { ProductService } from './services/product.service';
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CreateCategoryComponent } from './components/create-category/create-category.component';
import { UserComponent } from './components/users/user.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { DeliveryBoyComponent } from './components/delivery-boy/delivery-boy.component';
import { CreateSubCategoryComponent } from './components/create-sub-category/create-sub-category.component';
import { CreateProductComponent } from './components/create-product/create-product.component';
import { CreateEmployeeComponent } from './components/create-employee/create-employee.component';
import { HistoryComponent } from './components/history/history.component';
import {ChangeOrderStatusComponent} from './components/change-order-status/change-order-status.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    ProductComponent,
    ConfirmationDialogComponent,
    CreateCategoryComponent,
    UserComponent,
    EmployeeComponent,
    DashboardComponent,
    DeliveryBoyComponent,
    CreateSubCategoryComponent,
    CreateProductComponent,
    CreateEmployeeComponent,
    HistoryComponent,
    ChangeOrderStatusComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule,
    AppRoutingModule,
    HttpClientModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    MatDialogModule,
    MatRadioModule,
    MatSelectModule,
    MatInputModule,
    MatSnackBarModule,
    MatFormFieldModule,
    MatCardModule,
    MatButtonModule,
    MatSidenavModule,
    LayoutModule,
    MatToolbarModule,
    MatIconModule,
    MatListModule,
  ],
  providers   : [
    ApiService,
    UserService,
    AdminService,
    ProductService
  ],
  bootstrap   : [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule {
}
