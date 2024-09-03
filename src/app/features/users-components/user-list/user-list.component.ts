import { Component, OnDestroy, OnInit } from '@angular/core';
import { UserService } from '../../../../app/services/user.service';
import { Iuser, UsersResponse } from '../../../../app/interfaces/user-response.interface';
import {  BehaviorSubject, Subject, takeUntil} from 'rxjs';
import { IUserComponent } from "../i-user/i-user.component";
import { PaginationComponent } from "../../shared/pagination/pagination.component";
import { UserNotFoundComponent } from "../../core/user-not-found/user-not-found.component";
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
  subject$ = new Subject<boolean>();  

  constructor(
  private userService:UserService,
 ){}
 
 ngOnInit(){
  this.getUsers()
  this.getId()
  this.hideSearchInput()
  }
  getId(){  
     this.userService.id.
     pipe(
      takeUntil(this.subject$)).
      subscribe(res =>
       this.checkId(res),
        )
      }

  getUsers(){
    this.userService.allUsers()
    .pipe(
    takeUntil(this.subject$)).subscribe(res=>{
    this.usersResponse = res
    this.users = this.usersResponse?.data
      })
  }

 checkId(id:number|null) {
   !this.isId(id) ? this.filterUsersById(id) : this.allUser()
    
  }  
  
  
  filterUsersById(id:number|null){
    this.users = [this.usersResponse?.data.find(user=> user.id == id)!];
    if(this.users[0] === undefined){
    this.users = [] 
    } 
  }


  allUser(){
    this.users = this.usersResponse?.data
    return this.users   
  }


  isId(id:number | null){
  if ((id === null)||(id === 0)){
      return true
    }else{
     return false
    }
  }


  dataByPagination(user:UsersResponse<Iuser[]>){
   this.users = user.data
  }

  hideSearchInput(){
    this.userService.IsUserCompActive.next(true)
  }
 
  ngOnDestroy(): void {
    this.subject$.next(false)
    this.subject$.unsubscribe()
    this.userService.IsUserCompActive.next(false)
  }

}