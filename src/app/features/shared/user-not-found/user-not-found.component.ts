import { Component } from '@angular/core';
import { PreloadimageDirective } from '../../../directive/preloadimage.directive';

@Component({
  selector: 'app-user-not-found',
  standalone: true,
  imports: [PreloadimageDirective],
  templateUrl: './user-not-found.component.html',
  styleUrl: './user-not-found.component.scss'
})
export class UserNotFoundComponent {

}
