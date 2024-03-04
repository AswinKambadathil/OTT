import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { LoginScreenComponent } from './Authentication/login-screen/login-screen.component';
import { MainCarouselComponent } from './mCarousel/main-carousel/main-carousel.component';
import { ContinueWatchComponent } from './ContinueWatch/continue-watch/continue-watch.component';
import { DetailviewComponent } from './DetailView/detailview/detailview.component';
import { CastdetailsComponent } from './CastDetails/castdetails/castdetails.component';
import { EpisodeDetailsComponent } from './EpisodeDetails/episode-details/episode-details.component';
import { ChoosePlanComponent } from './choose-plan/choose-plan.component';
import { HttpClientModule } from '@angular/common/http';
import { ProfilepageComponent } from './profilepage/profilepage.component';
import { WelcomescreenComponent } from './welcomescreen/welcomescreen.component';
import { ChooseLanguageComponent } from './choose-language/choose-language.component';
import { ChoosePlan1Component } from './choose-plan1/choose-plan1.component';
import { NavigationBarComponent } from './navigation-bar/navigation-bar.component';
import { PackageandSummaryComponent } from './packageand-summary/packageand-summary.component';
import { SimulatorComponent } from './simulator/simulator.component';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,RouterOutlet,LoginScreenComponent,MainCarouselComponent,ContinueWatchComponent,WelcomescreenComponent,ChooseLanguageComponent,DetailviewComponent,ChoosePlanComponent,HttpClientModule,ProfilepageComponent,CastdetailsComponent,EpisodeDetailsComponent,ChoosePlan1Component,NavigationBarComponent,PackageandSummaryComponent,SimulatorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'OTT';
}
