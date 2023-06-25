import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { map, tap } from 'rxjs';

export const authGuard: CanActivateFn = (route, state) => {
  let router = inject(Router)
  let service = inject(AuthService)
  if (!service.validate()) {
    return router.parseUrl("/login")
  }
  return true

};

