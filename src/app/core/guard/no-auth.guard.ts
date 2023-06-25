import { inject } from '@angular/core';
import { CanActivateFn, Router, UrlTree } from '@angular/router';
import { map } from 'rxjs';
import { AuthService } from '../services/auth.service';

export const noAuthGuard: CanActivateFn = (route, state) => {
  let router = inject(Router)
  let service = inject(AuthService)
  if (service.validate()) {
    return router.parseUrl("/dashboard")
  }
  return true
};
