import { HttpInterceptorFn, HttpResponse } from '@angular/common/http';
import { map, of, tap } from 'rxjs';
import { CacheService } from '../services/cache.service';
import { inject } from '@angular/core';

export const cacheInterceptor: HttpInterceptorFn = (req, next) => {
  const cache = inject(CacheService);

  const cached = cache.get(req.url);

  const isCacheClicked = cached !== undefined;
  if (isCacheClicked) {
    return of(cached);
  }

  return next(req).pipe(tap((response) =>{
    if (response instanceof HttpResponse) {               
      return cache.set(req.url, response)      
    }
  }
));
};
