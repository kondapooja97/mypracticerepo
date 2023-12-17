import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OwnersignupComponent } from './ownersignup/ownersignup.component';
import { OwnersuccessComponent } from './ownersuccess/ownersuccess.component';
import { OwnersigninComponent } from './ownersignin/ownersigninComponent';
import { OwnerlandingComponent } from './ownerlanding/ownerlanding.component';
import { OwnerregistrationComponent } from './ownerregistration/ownerregistration.component';


const routes: Routes = [
  {path:'ownerlanding',component:OwnerlandingComponent},
  {path:'ownerregistration',component:OwnerregistrationComponent},
  {path:'ownersignin',component:OwnersigninComponent},
  {path:'ownersignup',component:OwnersignupComponent},
  {path:'ownersuccess',component:OwnersuccessComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OwnerRoutingModule { }
