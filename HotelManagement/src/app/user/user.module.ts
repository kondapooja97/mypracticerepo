import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { HotelbookingComponent } from './hotelbooking/hotelbooking.component';
import { UsersigninComponent } from './usersignin/usersignin.component';
import { UsersignupComponent } from './usersignup/usersignup.component';
import { UserlandingComponent } from './userlanding/userlanding.component';
import { UsersuccessComponent } from './usersuccess/usersuccess.component';

//angular material
import { MatButtonModule } from '@angular/material/button';
import { SharedModule } from '../shared/shared.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import {MatRadioModule} from '@angular/material/radio';

@NgModule({
  declarations: [
      HotelbookingComponent,
      UsersigninComponent,
      UsersignupComponent,
      UserlandingComponent,
      UsersuccessComponent
  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    SharedModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatRadioModule
  ]
})
export class UserModule { }
