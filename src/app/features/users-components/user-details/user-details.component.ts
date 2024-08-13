import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Iuser } from '../../../../app/interfaces/user-response.interface';
import { UserService } from '../../../../app/services/user.service';
import {MatIcon} from '@angular/material/icon';

@Component({
  selector: 'app-user-details',
  standalone: true,
  imports: [MatIcon,RouterLink],
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.scss'
})
export class UserDetailsComponent  implements OnInit {
  user!:Iuser
    constructor(
      private userService:UserService,
      private route:ActivatedRoute){}
  
    ngOnInit(): void { this.getId() }

    getId(){
      this.route.params.subscribe(res=> this.getUserById(res['id']))
    }
  
    getUserById(id:string){

     this.userService.getUserById(id).subscribe(res => this.user = res.data )

    }
  
  }
  
