import { Injectable } from '@angular/core';
import { ProfileResponse } from '../models/profile.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginResponse, LoginUser } from '../models/login.model';
import { RegisterUser, RegisterUserResponse } from '../models/register.model';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private baseUrl: string;

  constructor(private readonly httpClient: HttpClient) {
    this.baseUrl = 'https://api-login.alejandropb.net'
  }

  getProfile(): Observable<ProfileResponse>{
    const url = `${this.baseUrl}/profile`;

    return this.httpClient.get<ProfileResponse>(url);
  }

  login(user: LoginUser): Observable<LoginResponse> {
    const url = `${this.baseUrl}/login`;

    return this.httpClient.post<LoginResponse>(url, user);
  }

  logout(): Observable<LoginResponse> {
    const url = `${this.baseUrl}/logout`;

    return this.httpClient.post<LoginResponse>(url, {});
  }

  register(user: RegisterUser): Observable<RegisterUserResponse> {
    const url = `${this.baseUrl}/register`;

    return this.httpClient.post<RegisterUserResponse>(url, user);
  }

  setAuth(auth: boolean): void {
    localStorage.setItem('isAuthenticated', JSON.stringify(auth));
  }

  getAuth(): boolean {
    const isAuthenticatedLocalStorage = localStorage.getItem('isAuthenticated');
    let isAuthenticated = false;
    if(isAuthenticatedLocalStorage !== null) {
      isAuthenticated = isAuthenticatedLocalStorage === 'true' ? true : false;
    }

    return isAuthenticated
  }
}
