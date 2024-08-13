import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Iuser, UsersResponse } from '../../../interfaces/user-response.interface';
import { CommonModule, SlicePipe } from '@angular/common';
import { UserService } from '../../../services/user.service';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { CacheService } from '../../../services/cache.service';

@Component({
  selector: 'app-pagination',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pagination.component.html',
  styleUrl: './pagination.component.scss'
})
export class PaginationComponent implements OnInit ,OnDestroy {
  pagination_url = 'https://reqres.in/api/users?page=';
  pagesNum!:number;
  pages:string[] = [];
  usersResponse!: UsersResponse<Iuser[]>;
  indecator:number = 0;
  $subject = new Subject<Boolean>()
 
 @Output()
 users = new EventEmitter<UsersResponse<Iuser[]>>();

  constructor(private userService:UserService,private cache:CacheService){} 

  ngOnInit(): void {
    this.getUsersPagination()
  }
  
  getUsersPagination(){
  this.userService.UsersPagination(this.pagination_url).subscribe(res=>{
   this.usersResponse =  res 
    this.pages_url()
  } 
)
  }
  
  pages_url(){
    for (let i = 0; i < this.usersResponse?.total_pages; i++) {
        this.pagination_url = `${this.pagination_url}${i+1}`;  
        this.pages.push(this.pagination_url)
        this.pagination_url ='https://reqres.in/api/users?page='
    }
    
  }
    
  getPaignationData(item:string){
    this.userService.UsersPagination(item).subscribe(res=> this.users.emit(res))
  }


  Previous(){
    if (this.indecator == 0) {
    this.indecator = 0
    }else{
      this.indecator = this.indecator - 1
    }
    this.userService.UsersPagination(this.pages[this.indecator]).subscribe(res=> this.users.emit(res))
  }

  next(){
    if (this.indecator == this.usersResponse?.total_pages-1) {
      this.indecator = this.usersResponse?.total_pages-1
    }else{
      this.indecator = this.indecator + 1
      }
      this.userService.UsersPagination(this.pages[this.indecator]).subscribe(res=> this.users.emit(res))
  
  
    }

      
  ngOnDestroy(): void {
    this.$subject.next(false)
    this.$subject.unsubscribe()
  }

  }
