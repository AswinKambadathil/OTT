import { Route } from "@angular/router";
import { WelcomescreenComponent } from "./welcomescreen.component";

export const welcomescreen_router :Route= {
loadComponent:()=> WelcomescreenComponent,
path:'welcome'
}
