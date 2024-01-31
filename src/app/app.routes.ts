import { Routes } from '@angular/router';
import { MainCarouselComponent } from './mCarousel/main-carousel/main-carousel.component';
import { LoginScreenComponent } from './Authentication/login-screen/login-screen.component';
import { ContinueWatchComponent } from './ContinueWatch/continue-watch/continue-watch.component';

export const routes: Routes = [
    {path:'login/maincarousel',component:MainCarouselComponent},
    {path:'login',component:LoginScreenComponent},
    {path:'login/continuewatch',component:ContinueWatchComponent}
];
