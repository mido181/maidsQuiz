import { Component, EventEmitter, OnInit, Output, output } from '@angular/core';
import { UserService } from '../../../services/user.service';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { MatIcon } from '@angular/material/icon';
import { SearchfieldDirective } from '../../../directive/searchfield.directive';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule,MatIcon,SearchfieldDirective],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent implements OnInit {
  userlist = false;
  searchVal = false;
  constructor( private userService:UserService,private route:Router ){}  

  ngOnInit(): void {
  }
  showSearchfield(){
  this.searchVal = !this.searchVal
  }

sendingId(id:string){
this.userService.id.next(+id)
}
  
  }



