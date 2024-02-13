import { Route } from "@angular/router";
import { PackageandSummaryComponent } from "./packageand-summary.component";
export const welcomescreen_router :Route= {
loadComponent:()=> PackageandSummaryComponent,
path:'summary'
}