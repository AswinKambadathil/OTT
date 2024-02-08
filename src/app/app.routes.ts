import { Routes } from '@angular/router';
import { welcomescreen_router } from './Authentication/welcomescreen/welcomescreen.routes';
import { ProfilepageComponent } from './Authentication/profilepage/profilepage.component';
import { ChooseLanguageComponent } from './Authentication/choose-language/choose-language.component';
export const routes: Routes = [
    welcomescreen_router,
    {path:'',redirectTo:'/welcome',pathMatch:'full'},
    {path:'profile',component:ProfilepageComponent},
    {path:'language',component:ChooseLanguageComponent},
];
