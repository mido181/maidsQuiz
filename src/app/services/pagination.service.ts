import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UsersResponse, Iuser } from '../interfaces/user-response.interface';

@Injectable({
  providedIn: 'root'
})
export class PaginationService {

  constructor(private HTTP:HttpClient) { }

  getPaginationData(url:string){  
    return this.HTTP.get<UsersResponse<Iuser[]>>(url)
   }
 


}
