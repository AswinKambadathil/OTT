import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { WelcomescreenComponent} from './welcomescreen/welcomescreen.component';
import { ChooseLanguageComponent } from './choose-language/choose-language.component';
import { ChoosePlanComponent } from './choose-plan/choose-plan.component';
import { ChoosePlan1Component } from './choose-plan1/choose-plan1.component';
import { HttpClientModule } from '@angular/common/http';
import { ProfilepageComponent } from './profilepage/profilepage.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,WelcomescreenComponent,ChooseLanguageComponent,ChoosePlanComponent,ChoosePlan1Component,HttpClientModule,ProfilepageComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Onnet systems';
}
