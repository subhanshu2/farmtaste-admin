/*
  Author: Subhanshu Chaddha
  Contact: subhanshu.chaddha2@gmail.com
  College: AKGEC, Ghaziabad
*/
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { AdminComponent } from './components/admin/admin.component';
import { ProductComponent } from './components/product/product.component';
import { ConfirmationDialogComponent } from './components/confirmation-dialog/confirmation-dialog.component';
import { UserComponent } from './components/users/user.component';
import { EmployeeComponent } from './components/employee/employee.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HistoryComponent } from './components/history/history.component';


const routes: Routes = [
  {
    path     : '',
    component: LoginComponent
  },
  {
    path     : 'admin-home',
    component: AdminComponent
  },
  {
    path     : 'products',
    component: ProductComponent
  },
  {
    path     : 'confirmation-dialog',
    component: ConfirmationDialogComponent
  },
  {
    path     : 'users',
    component: UserComponent
  },
  {
    path     : 'employees',
    component: EmployeeComponent
  },
  {
    path     : 'dashboard',
    component: DashboardComponent
  },
  {
    path     : 'history',
    component: HistoryComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
