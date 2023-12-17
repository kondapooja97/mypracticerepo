import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminlandingComponent } from './adminlanding/adminlanding.component';
import { AdminsigninComponent } from './adminsignin/adminsignin.component';
import { AdminsignupComponent } from './adminsignup/adminsignup.component';
import { AdminsuccessComponent } from './adminsuccess/adminsuccess.component';
import { SharedModule } from '../shared/shared.module';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';

@NgModule({
  declarations: [
    AdminlandingComponent,
    AdminsigninComponent,
    AdminsignupComponent,
    AdminsuccessComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatButtonModule,
    SharedModule,
    MatFormFieldModule,
    MatIconModule
    
  ]
})
export class AdminModule { }
