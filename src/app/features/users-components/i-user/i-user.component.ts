import { Component, Input } from '@angular/core';
import {  RouterLink } from '@angular/router';
import { Iuser } from '../../../../app/interfaces/user-response.interface';
import { CommonModule } from '@angular/common';
import { PreloadimageDirective } from '../../../directive/preloadimage.directive';

@Component({
  selector: 'app-i-user',
  standalone: true,
  imports: [CommonModule,RouterLink,PreloadimageDirective],
  templateUrl:'./i-user.component.html',
  styleUrl: './i-user.component.scss'
})
export class IUserComponent{

  @Input()
  user!: Iuser;
  
}

