import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { User } from '../models/user';
import { Data, Order } from '../models/order';
import { Employee, EmployeeCategory } from '../models/employee';
import { History } from '../models/history';
import { HttpHeaders } from '@angular/common/http';

@Injectable()
export class AdminService {

  constructor(private api: ApiService) {
  }

  orders(): Observable<Data> {
    return this.api.get<any>('/delivery-order').pipe(map(res => res.data));
  }

  delivered(): Observable<History[]> {
    return this.api.get<any>('/delivered').pipe(map(res => res.data));
  }

  cancelled(): Observable<History[]> {
    return this.api.get<any>('/cancelled').pipe(map(res => res.data));
  }

  rejected(): Observable<History[]> {
    return this.api.get<any>('/rejected').pipe(map(res => res.data));
  }

  downloadPdf(historyId: number): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/pdf',
      responseType  : 'blob' as 'json',
    });
    return this.api.get('/invoice-for-admin/' + historyId, null, headers);
  }

  users(): Observable<User[]> {
    return this.api.get<any>('/users').pipe(map(res => res.data));
  }

  employeeCategories(): Observable<EmployeeCategory[]> {
    return this.api.get<any>('/employee-categories').pipe(map(res => res.data));
  }

  employees(): Observable<Employee[]> {
    return this.api.get<any>('/employees').pipe(map(res => res.data));
  }

  assign(employeeId: number, orderId: number): Observable<Employee> {
    const data = {employee_id: employeeId};
    return this.api.put('/assign-delivery-man/' + orderId, data);
  }

  createEmployee(data: any): Observable<Employee> {
    return this.api.post<any>('/employees', data);
  }
}
