import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { WelcomescreenComponent} from './welcomescreen/welcomescreen.component';
import { ProfilepageComponent } from './profilepage/profilepage.component';
import { ChooseLanguageComponent } from './choose-language/choose-language.component';
import { ChoosePlanComponent } from './choose-plan/choose-plan.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,WelcomescreenComponent,ProfilepageComponent,ChooseLanguageComponent,ChoosePlanComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Onnet systems';
}
