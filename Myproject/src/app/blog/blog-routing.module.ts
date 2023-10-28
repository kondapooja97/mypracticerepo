import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogLandingComponent } from './blog-landing/blog-landing.component';

const routes: Routes = [
  { path:'blog-landing',component:BlogLandingComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BlogRoutingModule { }
