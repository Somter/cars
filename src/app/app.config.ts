import { provideRouter, Routes } from "@angular/router";
import { ApplicationConfig } from "@angular/core";

import { DirectiveComponent } from "./directive/directive.component";

const appRoutes: Routes = [
  // Directives
  {path: '', component: DirectiveComponent},

];
export const appConfig: ApplicationConfig = {
  providers: [provideRouter(appRoutes)]
};
