import { Routes } from '@angular/router';
import { welcomescreen_router } from './welcomescreen/welcomescreen.routes';
import { WelcomescreenComponent } from './welcomescreen/welcomescreen.component';
import { ChooseLanguageComponent } from './choose-language/choose-language.component';
import { ChoosePlanComponent } from './choose-plan/choose-plan.component';
import { Component } from '@angular/core';
import { ChoosePlan1Component } from './choose-plan1/choose-plan1.component';
import { ProfilepageComponent } from './profilepage/profilepage.component';
export const routes: Routes = [
    welcomescreen_router,
    {path:'',redirectTo:'/welcome',pathMatch:'full'},
    {path:'language',component:ChooseLanguageComponent},
    {path:'chooseplan',component:ChoosePlanComponent},
    {path:'chooseplan1',component:ChoosePlan1Component},
    {path:'profile',component:ProfilepageComponent}
];
