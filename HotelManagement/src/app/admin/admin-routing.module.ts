import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminlandingComponent } from './adminlanding/adminlanding.component';
import { AdminsigninComponent } from './adminsignin/adminsignin.component';
import { AdminsignupComponent } from './adminsignup/adminsignup.component';
import { AdminsuccessComponent } from './adminsuccess/adminsuccess.component';


const routes: Routes = [
  {path:'adminlanding',component:AdminlandingComponent},
  {path:'adminsignin',component:AdminsigninComponent},
  {path:'adminsignup',component:AdminsignupComponent},
  {path:'adminsuccess',component:AdminsuccessComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
