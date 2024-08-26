import { Injectable } from '@angular/core';
import { HttpEvent, HttpResponse } from '@angular/common/http';
import { Iuser, UsersResponse } from '../interfaces/user-response.interface';

@Injectable({
  providedIn: 'root',
})
export class CacheService {
  readonly cache = new Map<string, HttpResponse<any>>();
 
  getCache(key: string): HttpResponse<any> | undefined { 
    return this.cache.get(key);
  }

  setCache(key: string, value: HttpResponse<any>): void {
      this.cache.set(key, value);
  }
}
