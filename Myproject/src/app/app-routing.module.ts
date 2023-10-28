import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { HomeComponent } from './home/home.component';

import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { GalleryComponent } from './gallery/gallery.component';
import { AdminModule } from './admin/admin.module';


const routes: Routes = [
  { path: '', component: LandingComponent },
  { path: 'home', component: HomeComponent },
  { path: 'landing', component: LandingComponent },
  { path: 'gallery', component: GalleryComponent }, 
  { path:'admin',loadChildren:()=>import('./admin/admin.module').then(mod=>mod.AdminModule)},
  { path:'blog',loadChildren:()=>import('./blog/blog.module').then(mod=>mod.BlogModule)},
  { path:'login',loadChildren:()=>import('./student/student.module').then(mod=>mod.StudentModule)},
  { path:'signup',loadChildren:()=>import('./student/student.module').then(mod=>mod.StudentModule)},
  {path:'studentmod',loadChildren:()=>import('./student/student.module').then(mod=>mod.StudentModule)},

  { path: '**', component: PagenotfoundComponent }   //wild card routing
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
