import { Component, Inject, inject, OnInit,  } from '@angular/core';
import { ActivatedRoute, RouterOutlet } from '@angular/router';
import { NavbarComponent } from './features/core/navbar/navbar.component';
import { SidebarComponent } from "./features/core/sidebar/sidebar.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, SidebarComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

  export class AppComponent implements OnInit {
    title = 'maids-dashboard';
    
    ngOnInit(): void {
    }

    constructor(){}
    
  }
