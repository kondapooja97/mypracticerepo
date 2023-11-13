import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SubjectRoutingModule } from './subject-routing.module';
import { Subject1Component } from './subject1/subject1.component';
import { SubjectLandingComponent } from './subject-landing/subject-landing.component';
import { Subject2Component } from './subject2/subject2.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    Subject1Component,
    SubjectLandingComponent,
    Subject2Component
  ],
  imports: [
    CommonModule,
    SubjectRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class SubjectModule { }
