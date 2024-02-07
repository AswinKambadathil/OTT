import { Route } from "@angular/router";
import { ProfilepageComponent } from "./profilepage.component";
import { Router } from "@angular/router";


export const welcomescreen_router :Route= {
    loadComponent:()=> ProfilepageComponent,
    path:'profile'
    }
    