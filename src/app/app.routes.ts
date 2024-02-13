
import { Routes } from '@angular/router';
import { WelcomescreenComponent } from './welcomescreen/welcomescreen.component';
import { ProfilepageComponent} from './profilepage/profilepage.component';
import { ChooseLanguageComponent } from './choose-language/choose-language.component';
import { ChoosePlanComponent } from './choose-plan/choose-plan.component';
import { ChoosePlan1Component } from './choose-plan1/choose-plan1.component';
import { MainCarouselComponent } from './mCarousel/main-carousel/main-carousel.component';
import { LoginScreenComponent } from './Authentication/login-screen/login-screen.component';
import { ContinueWatchComponent } from './ContinueWatch/continue-watch/continue-watch.component';
import { welcomescreen_router } from './choose-language/choose-language.routes';
export const routes: Routes = [
    {path:'login/maincarousel',component:MainCarouselComponent},
    {path:'login',component:LoginScreenComponent},
    {path:'login/continuewatch',component:ContinueWatchComponent},
    welcomescreen_router,
    {path:'',redirectTo:'/welcome',pathMatch:'full'},
    {path:'language',component:ChooseLanguageComponent},
    {path:'chooseplan',component:ChoosePlanComponent},
    {path:'chooseplan1',component:ChoosePlan1Component},
    {path:'profile',component:ProfilepageComponent}
];
