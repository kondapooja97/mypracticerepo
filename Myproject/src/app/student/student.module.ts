import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { StudentLoginComponent } from './student-login/student-login.component';
import { StudentSignupComponent } from './student-signup/student-signup.component';
import { StudentSuccessComponent } from './student-success/student-success.component';
import { DirectivesComponent } from './directives/directives.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';
import { SharedModule } from '../shared/shared.module';
// console.log('student');


@NgModule({
  declarations: [
    StudentLoginComponent,
    StudentSignupComponent,
    StudentSuccessComponent,
    DirectivesComponent,
    ParentComponent,
    ChildComponent
  ],
  imports: [
    CommonModule,
    StudentRoutingModule,
    SharedModule
  ]
})
export class StudentModule { }
