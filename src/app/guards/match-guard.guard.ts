import { inject } from '@angular/core';
import { CanMatchFn, Router } from '@angular/router';
export const matchGuardGuard: CanMatchFn = (route, segments) => {
  const router = inject(Router);
  const hasProductId = localStorage.getItem('cartProducts');
  if (hasProductId) {
    return true;
  }
  else {
    router.navigate(['/home']);
    return false;
  }
};
