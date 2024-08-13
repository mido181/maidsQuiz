import { Injectable } from '@angular/core';
import { HttpEvent, HttpResponse } from '@angular/common/http';
import { Iuser, UsersResponse } from '../interfaces/user-response.interface';

@Injectable({
  providedIn: 'root',
})
export class CacheService {
  readonly cache = new Map<string, HttpResponse<unknown>>();
 
  get(key: string): HttpResponse<unknown> | undefined { 
    return this.cache.get(key);
  }

  set(key: string, value: HttpResponse<unknown>): void {
      this.cache.set(key, value);
  }
}
