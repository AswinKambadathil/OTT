import { Route } from "@angular/router";
import { PackageandSummaryComponent } from "./packageand-summary.component";
export const PackageandSummary_router :Route= {
loadComponent:()=> PackageandSummaryComponent,
path:'summary'
}