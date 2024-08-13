import { Component, Input, OnInit } from '@angular/core';
import { UserService } from '../../../../app/services/user.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Iuser } from '../../../../app/interfaces/user-response.interface';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-i-user',
  standalone: true,
  imports: [CommonModule,RouterLink],
  templateUrl:'./i-user.component.html',
  styleUrl: './i-user.component.scss'
})
export class IUserComponent{

  @Input()
  user!: Iuser;
  
}

