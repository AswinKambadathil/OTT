import { Route } from "@angular/router";
import { ChooseLanguageComponent } from "./choose-language.component";


export const ChooseLanguage_router :Route= {
    loadComponent:()=> ChooseLanguageComponent,
    path:'language'
    }