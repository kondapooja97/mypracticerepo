import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Subject1Component } from './subject1/subject1.component';
import { Subject2Component } from './subject2/subject2.component';
import { SubjectLandingComponent } from './subject-landing/subject-landing.component';

const routes: Routes = [
  {path:'subject1',component:Subject1Component},
  {path:'subject2',component:Subject2Component},
  {path:'subjectlanding',component:SubjectLandingComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SubjectRoutingModule { }
