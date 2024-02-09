import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { LoginScreenComponent } from './Authentication/login-screen/login-screen.component';
import { MainCarouselComponent } from './mCarousel/main-carousel/main-carousel.component';
import { ContinueWatchComponent } from './ContinueWatch/continue-watch/continue-watch.component';
import { NavigationbarComponent } from './NavigationBar/navigationbar/navigationbar.component';
import { DetailviewComponent } from './DetailView/detailview/detailview.component';
import { CastdetailsComponent } from './CastDetails/castdetails/castdetails.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet,LoginScreenComponent,MainCarouselComponent,ContinueWatchComponent,NavigationbarComponent,DetailviewComponent,CastdetailsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'OTT';
}
