import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/models/user.model';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  user: User | undefined;

  constructor(
    private readonly loginService: LoginService,
    private readonly router: Router){}

  ngOnInit(): void {
    this.loginService.getProfile().subscribe({
      next: (response) => {
        this.user = response.user;
      },
      error: (err) => {
        console.error(err);
        if(err.status === 401 || err.status === 403) {
          this.loginService.setAuth(true);
          this.router.navigate(['/login']);
        }
      }
    });
  }

  logout(): void {
    this.loginService.logout().subscribe({
      next: (response) => {
        this.loginService.setAuth(false);
        this.router.navigate(['/login']);
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
}
