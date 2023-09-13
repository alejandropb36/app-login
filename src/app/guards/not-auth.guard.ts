import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from '../services/login.service';

export const notAuthGuard: CanActivateFn = (route, state) => {
  const auth = inject(LoginService).getAuth();
  if(auth) {
    inject(Router).navigate(['/profile']);
  }
  return !auth;
};
