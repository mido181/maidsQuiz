import { HttpInterceptorFn, HttpResponse } from '@angular/common/http';
import { map, of, tap } from 'rxjs';
import { CacheService } from '../services/cache.service';
import { inject } from '@angular/core';

export const cacheInterceptor: HttpInterceptorFn = (req, next) => {
  const cache = inject(CacheService);
  const cached = cache.getCache(req.url);

  const isCached = cached !== undefined;
  if (isCached) {
    return of(cached);
  }

  return next(req).pipe(tap((response) =>{
    if (response instanceof HttpResponse) {               
      return cache.setCache(req.url, response)      
    }
  }
));
};
