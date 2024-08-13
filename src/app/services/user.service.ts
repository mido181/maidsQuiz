import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CacheService } from './cache.service';
import { BehaviorSubject, map, Observable, tap } from 'rxjs';
import {  Iuser, UsersResponse } from '../interfaces/user-response.interface';
import { QuaryParamService } from './quary-param.service';


@Injectable({
  providedIn: 'root'
})

  export class UserService {
  
    private allUser!:Observable<UsersResponse<Iuser[]>>;
    id = new BehaviorSubject<number|null>(null);
    private readonly BASE_URL = 'https://reqres.in/api/users';
 
   constructor(private HTTP:HttpClient,private cacheService:CacheService, private getQuary:QuaryParamService) { }


   allUsers(){
    return this.HTTP.get<UsersResponse<Iuser[]>>(this.BASE_URL)
    }

    UsersPagination(url:string){  
     return this.HTTP.get<UsersResponse<Iuser[]>>(url)
    }
  

   getUserById(id:string){
    return this.HTTP.get<UsersResponse<Iuser>>(`${this.BASE_URL}/${+id}`)
  }


}

   