import { Route } from "@angular/router";
import { ChooseLanguageComponent } from "./choose-language.component";


export const welcomescreen_router :Route= {
    loadComponent:()=> ChooseLanguageComponent,
    path:'language'
    }