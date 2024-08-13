import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from '../../../../app/services/user.service';
import { Iuser, UsersResponse } from '../../../../app/interfaces/user-response.interface';
import { AsyncPipe, JsonPipe } from '@angular/common';
import {  Observable, Subject, takeUntil, tap } from 'rxjs';
import { IUserComponent } from "../i-user/i-user.component";
import { PaginationComponent } from "../../shared/pagination/pagination.component";
import { UserNotFoundComponent } from "../../shared/user-not-found/user-not-found.component";
import { CacheService } from '../../../services/cache.service';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [IUserComponent, PaginationComponent, UserNotFoundComponent],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.scss'
})

export class UserListComponent implements OnInit , OnDestroy {
  users!:Iuser[]
  usersResponse!:UsersResponse<Iuser[]>;
  user?:UsersResponse<Iuser[]>
  $subject = new Subject<boolean>()  
  constructor(
  private userService:UserService,
  private cache:CacheService
 ){}

  ngOnInit(){
      this.getUsers()
      this.getId()
    }

  getId(){  
     this.userService.id.pipe(takeUntil(this.$subject)).subscribe(res=>
       this.filterUsers(res),
        )}

  getUsers(){
    this.userService.allUsers().subscribe(res=>{
      this.usersResponse = res
      this.users = this.usersResponse?.data
      })
  }

  filterUsers(id:number|null)
  {
    if (id === null || id === 0 ) {
      this.users = this.usersResponse?.data
      return this.users
      }else{
        this.users = [this.usersResponse?.data.find(user=> user.id == id)!]
        if (this.users[0] == null) {
          this.users = []
        } 
        return this.users
      }
  }  

  dataByPagination(user:UsersResponse<Iuser[]>){
   this.users = user.data
  }


  ngOnDestroy(): void {
    // this.$subject.next(false)
    // this.$subject.unsubscribe()
  }

}