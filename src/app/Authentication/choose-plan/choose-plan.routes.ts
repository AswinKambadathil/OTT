import { Route } from "@angular/router";
import { ChoosePlanComponent } from "./choose-plan.component";
export const welcomescreen_router :Route= {
loadComponent:()=> ChoosePlanComponent,
path:'chooseplan'
}
