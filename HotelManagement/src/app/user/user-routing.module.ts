import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HotelbookingComponent } from './hotelbooking/hotelbooking.component';
import { UserlandingComponent } from './userlanding/userlanding.component';
import { UsersigninComponent } from './usersignin/usersignin.component';
import { UsersignupComponent } from './usersignup/usersignup.component';
import { UsersuccessComponent } from './usersuccess/usersuccess.component';


const routes: Routes = [
  {path:'hotelbooking',component:HotelbookingComponent},
  {path:'userlanding',component:UserlandingComponent},
  {path:'usersignin',component:UsersigninComponent},
  {path:'usersignup',component:UsersignupComponent},
  {path:'usersuccess',component:UsersuccessComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
