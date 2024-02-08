import { Routes } from '@angular/router';
import { welcomescreen_router } from './welcomescreen/welcomescreen.routes';
import { WelcomescreenComponent } from './welcomescreen/welcomescreen.component';
import { ProfilepageComponent} from './profilepage/profilepage.component';
import { ChooseLanguageComponent } from './choose-language/choose-language.component';
import { ChoosePlanComponent } from './choose-plan/choose-plan.component';
export const routes: Routes = [
    welcomescreen_router,
    {path:'',redirectTo:'/welcome',pathMatch:'full'},
    {path:'profile',component:ProfilepageComponent},
    {path:'language',component:ChooseLanguageComponent},
    {path:'chooseplan',component:ChoosePlanComponent}
];
