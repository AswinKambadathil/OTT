import { Route } from "@angular/router";
import { ProfilepageComponent } from "./profilepage.component";


export const welcomescreen_router :Route= {
    loadComponent:()=> ProfilepageComponent,
    path:'profile'
    }
    