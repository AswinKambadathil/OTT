import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { WelcomescreenComponent } from './Authentication/welcomescreen/welcomescreen.component';
import { ProfilepageComponent } from './Authentication/profilepage/profilepage.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,WelcomescreenComponent,ProfilepageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Onnet systems';
}
