import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginUser } from 'src/app/models/login.model';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  constructor(
    private readonly loginService: LoginService,
    private readonly router: Router) {}

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required]),
  });

  onSubmit(): void {
    const userLogin = this.loginForm.value as LoginUser;

    this.loginService.login(userLogin).subscribe({
      next: (response) => {
        this.loginService.setAuth(true);
        this.router.navigate(['/profile']);
      },
      error: (err) => {
        console.error(err);
      }
    })
  }

  goToRegister(): void {
    this.router.navigate(['/register']);
  }
}
