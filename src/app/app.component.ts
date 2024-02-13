import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { LoginScreenComponent } from './Authentication/login-screen/login-screen.component';
import { MainCarouselComponent } from './mCarousel/main-carousel/main-carousel.component';
import { ContinueWatchComponent } from './ContinueWatch/continue-watch/continue-watch.component';
import { WelcomescreenComponent } from './welcomescreen/welcomescreen.component';
import { ProfilepageComponent } from './profilepage/profilepage.component';
import { ChooseLanguageComponent } from './choose-language/choose-language.component';
import { ChoosePlanComponent } from './choose-plan/choose-plan.component';
import { DetailviewComponent } from './DetailView/detailview/detailview.component';
import { NavigationbarComponent } from './NavigationBar/navigationbar/navigationbar.component';
import { HttpClientModule } from '@angular/common/http';
import { CastdetailsComponent } from './CastDetails/castdetails/castdetails.component';
import { ChoosePlan1Component } from './choose-plan1/choose-plan1.component';
import { ApiServiceService } from './api-service.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterOutlet,LoginScreenComponent,MainCarouselComponent,ContinueWatchComponent,WelcomescreenComponent,ChooseLanguageComponent,DetailviewComponent,NavigationbarComponent,ChoosePlanComponent,HttpClientModule,ProfilepageComponent,CastdetailsComponent,ChoosePlan1Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'OTT';
}
