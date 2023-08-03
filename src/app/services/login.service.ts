// src/app/auth/login.service.ts
import { Injectable, Pipe } from '@angular/core';
import { Observable, map } from 'rxjs';
import { ApiService } from './api.service';
import { ResponseBody } from '../models/config';
@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private apiService: ApiService) { }

  login(body : UserResponse): Observable<any> {
    return this.apiService.post<any>(body, 'auth/login');
  }

  get(): Observable<any> {
    return this.apiService.get<any>('auth')
  }

}

export interface LoginResponse {
  token: string;
}

export interface UserResponse {
  username: string;
  password: string;
}
