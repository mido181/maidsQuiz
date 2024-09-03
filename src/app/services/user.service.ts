import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CacheService } from './cache.service';
import { BehaviorSubject, map, Observable, Subject, tap } from 'rxjs';
import {  Iuser, UsersResponse } from '../interfaces/user-response.interface';
import { QuaryParamService } from './quary-param.service';


@Injectable({
  providedIn: 'root'
})

  export class UserService {
     IsUserCompActive = new BehaviorSubject<boolean>(true)
    id = new BehaviorSubject<number|null>(null);
    private readonly BASE_URL = 'https://reqres.in/api/users';
 
   constructor(private HTTP:HttpClient) { }

   allUsers(){
    return this.HTTP.get<UsersResponse<Iuser[]>>(this.BASE_URL)
    }

   getUserById(id:string){
    return this.HTTP.get<UsersResponse<Iuser>>(`${this.BASE_URL}/${+id}`)
  }


}

   