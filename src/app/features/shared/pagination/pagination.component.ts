import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { Iuser, UsersResponse } from '../../../interfaces/user-response.interface';
import { CommonModule, SlicePipe } from '@angular/common';
import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { PaginationService } from '../../../services/pagination.service';

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

  constructor(private Pagination:PaginationService){} 

  ngOnInit(): void {
    this.getPagination()
  }
  
  getPagination(){
  this.Pagination.getPaginationData(this.pagination_url).pipe(takeUntil(this.$subject)).subscribe(res=>{
   this.usersResponse = res 
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
    this.Pagination.getPaginationData(item).pipe
    (takeUntil(this.$subject)).
    subscribe(res=> this.users.emit(res))
  }


  Previous(){
    if (!(this.indecator == 0)) {
    this.minsOne()
    }
    this.fetchPaginationData(this.pages[this.indecator])
  }

  next(){
    if (!(this.indecator == this.usersResponse?.total_pages-1)) {
    this.plusOne() 
    }
    this.fetchPaginationData(this.pages[this.indecator])
    }
    

    fetchPaginationData(url:string){
      this.Pagination.getPaginationData(url).
      pipe(takeUntil(this.$subject)).
      subscribe(res=> this.users.emit(res))
    }
  
    plusOne(){
      this.indecator += 1
     } 
 
    minsOne(){
     this.indecator -= 1
    }
    
     
  ngOnDestroy(): void {
    this.$subject.next(false)
    this.$subject.unsubscribe()
  }

  }
