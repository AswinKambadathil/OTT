import { Route } from "@angular/router";
import { ProfilepageComponent } from "./profilepage.component";



export const Profilepage_router :Route= {
    loadComponent:()=> ProfilepageComponent,
    path:'profile'
    }
    