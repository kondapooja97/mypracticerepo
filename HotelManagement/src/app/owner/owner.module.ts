import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OwnerRoutingModule } from './owner-routing.module';
import { SharedModule } from '../shared/shared.module';
import { OwnersignupComponent } from './ownersignup/ownersignup.component';
import { OwnersuccessComponent } from './ownersuccess/ownersuccess.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OwnerlandingComponent } from './ownerlanding/ownerlanding.component';
import { OwnersigninComponent } from './ownersignin/ownersigninComponent';
import { OwnerregistrationComponent } from './ownerregistration/ownerregistration.component';
import { MatButtonModule } from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';


@NgModule({
  declarations: [
    OwnersignupComponent,
    OwnersuccessComponent,
    OwnerlandingComponent,
    OwnersigninComponent,
    OwnerregistrationComponent
    
  ],
  imports: [
    CommonModule,
    OwnerRoutingModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatSelectModule
  ]
})
export class OwnerModule { }
