
import { Routes } from '@angular/router';
import { MainCarouselComponent } from './mCarousel/main-carousel/main-carousel.component';
import { LoginScreenComponent } from './Authentication/login-screen/login-screen.component';
import { ContinueWatchComponent } from './ContinueWatch/continue-watch/continue-watch.component';
import { welcomescreen_router } from './Authentication/welcomescreen/welcomescreen.routes';
import { ProfilepageComponent } from './Authentication/profilepage/profilepage.component';

export const routes: Routes = [
    {path:'login/maincarousel',component:MainCarouselComponent},
    {path:'login',component:LoginScreenComponent},
    {path:'login/continuewatch',component:ContinueWatchComponent},
    welcomescreen_router,
    {path:'',redirectTo:'/welcome',pathMatch:'full'},
    {path:'profile',component:ProfilepageComponent}
];
