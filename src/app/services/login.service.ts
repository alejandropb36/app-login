import { Injectable } from '@angular/core';
import { ProfileResponse } from '../models/profile.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginResponse, LoginUser } from '../models/login.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private baseUrl: string;

  constructor(private readonly httpClient: HttpClient) {
    this.baseUrl = 'http://localhost:4000'
  }

  getProfile(): Observable<ProfileResponse>{
    const url = `${this.baseUrl}/profile`;

    return this.httpClient.get<ProfileResponse>(url);
  }

  login(user: LoginUser): Observable<LoginResponse> {
    const url = `${this.baseUrl}/login`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.httpClient.post<LoginResponse>(url, user, {
      headers
    });
  }

  logout(): Observable<LoginResponse> {
    const url = `${this.baseUrl}/logout`;
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.httpClient.post<LoginResponse>(url, {
      headers
    });
  }
}
