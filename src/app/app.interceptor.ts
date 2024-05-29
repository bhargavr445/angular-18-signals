import { HttpInterceptorFn } from '@angular/common/http';
import { CartService } from './Vehicle/Services/cart.service';
import { inject } from '@angular/core';

export const appInterceptor: HttpInterceptorFn = (req, next) => {

  const cartService = inject(CartService);

  return next(req);
};
