import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from './api.service';
import { User } from "../models/user";

@Injectable()
export class UserService {

  constructor(private api: ApiService) {
  }

  login(data: { emailOrPhone: string, password: string }): Observable<any> {
    return this.api.post('/login-employee', data);
  }


}
