import { Route } from "@angular/router";
import { ChoosePlan1Component } from "./choose-plan1.component";
export const welcomescreen_router :Route= {
loadComponent:()=> ChoosePlan1Component,
path:'chooseplan1'
}