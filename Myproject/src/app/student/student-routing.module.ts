import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentLoginComponent } from './student-login/student-login.component';
import { StudentSignupComponent } from './student-signup/student-signup.component';
import { StudentSuccessComponent } from './student-success/student-success.component';
import { DirectivesComponent } from './directives/directives.component';

const routes: Routes = [
  {path:'studentlogin',component:StudentLoginComponent},
  {path:'studentsignup',component:StudentSignupComponent},
  {path:'studentsuccess',component:StudentSuccessComponent},
  {path:'directives',component:DirectivesComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentRoutingModule { }
