import { HttpInterceptorFn } from '@angular/common/http';
import { catchError } from 'rxjs';

export const httpInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
    catchError((err: any, caught)=> caught)
  );
};
