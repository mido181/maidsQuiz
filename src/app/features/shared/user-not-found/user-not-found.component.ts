import { Component } from '@angular/core';
import { PreloadimageDirective } from '../../../directive/preloadimage.directive';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-not-found',
  standalone: true,
  imports: [CommonModule,PreloadimageDirective],
  templateUrl: './user-not-found.component.html',
  styleUrl: './user-not-found.component.scss'
})
export class UserNotFoundComponent {

}
