import { Injectable } from '@angular/core';
import { ProfileResponse } from '../models/profile.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

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
}
