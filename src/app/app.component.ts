import { Component, inject, OnInit,  } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './features/core/navbar/navbar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

  export class AppComponent implements OnInit {
    title = 'maidsquiz';
    ngOnInit(): void {}

    constructor(){}
      }
