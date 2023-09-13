import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Uuid } from 'src/app/helpers/uuid.helper';
import { RegisterUser } from 'src/app/models/register.model';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  constructor(
    private readonly loginService: LoginService,
    private readonly router: Router) {}
  
  registerForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.min(6)]),
    name: new FormControl('', [Validators.required]),
    birthDate: new FormControl('', [Validators.required])
  });
  error: boolean = false;

  onSubmit(): void {
    
    const newUser: RegisterUser = {
      id: Uuid.generateUuid(),
      name: this.registerForm.value.name!,
      email: this.registerForm.value.email!,
      password: this.registerForm.value.password!,
      birthDate: this.registerForm.value.birthDate!
    };
    
    this.loginService.register(newUser).subscribe({
      next: (response) => {
        this.router.navigate(['/login']);
      },
      error: (err) => {
        console.error(err);
        this.error = true;
      }
    })

  }
}
