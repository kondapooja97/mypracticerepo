import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { StudentLoginComponent } from './student-login/student-login.component';
import { StudentSignupComponent } from './student-signup/student-signup.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StudentSuccessComponent } from './student-success/student-success.component';
import { DirectivesComponent } from './directives/directives.component';
// console.log('student');


@NgModule({
  declarations: [
    StudentLoginComponent,
    StudentSignupComponent,
    StudentSuccessComponent,
    DirectivesComponent,
    

  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class StudentModule { }
