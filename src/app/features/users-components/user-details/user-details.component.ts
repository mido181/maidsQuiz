import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Iuser } from '../../../../app/interfaces/user-response.interface';
import { UserService } from '../../../../app/services/user.service';
import {MatIcon} from '@angular/material/icon';
import { Subject, takeUntil } from 'rxjs';
import { PreloadimageDirective } from '../../../directive/preloadimage.directive';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [MatIcon,RouterLink,PreloadimageDirective],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss'
})
export class UserDetailsComponent  implements OnInit ,OnDestroy {
  user!:Iuser
  subject$ = new Subject<boolean>()
    constructor(
      private userService:UserService,
      private route:ActivatedRoute){}
  
    ngOnInit(): void { 
      this.getId()
     }

    getId(){
      this.route.params
      .pipe(
        takeUntil(this.subject$)).
        subscribe(res=> this.getUserById(res['id']))
    }
  
    getUserById(id:string){
     this.userService.getUserById(id).
     pipe(
      takeUntil(this.subject$)).
      subscribe(res => this.user = res.data )
    }
  
    ngOnDestroy(): void {
      this.subject$.next(false)
      this.subject$.unsubscribe()
   
    }
  }
  
