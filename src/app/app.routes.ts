import { Routes } from '@angular/router';
import { welcomescreen_router } from './Authentication/welcomescreen/welcomescreen.routes';
export const routes: Routes = [
    welcomescreen_router,
    {
        path:'',redirectTo:'/welcome',pathMatch:'full'      }
];
