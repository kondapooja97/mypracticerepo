import { Component, ElementRef, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import { Subject1Component } from '../subject1/subject1.component';

@Component({
  selector: 'app-subject-landing',
  templateUrl: './subject-landing.component.html',
  styleUrls: ['./subject-landing.component.scss']
})
export class SubjectLandingComponent {
  subjectForm!:FormGroup;
  @ViewChild (Subject1Component) Subject1ComponentRef!:(Subject1Component);
  @ViewChild ('para') paraElementRef!:ElementRef;

  constructor(private fb:FormBuilder,private dataService:DataService){}

  ngOnInit(){
    this.sujectDetailsform();
  }

  sujectDetailsform(){
    this.subjectForm=this.fb.group({
      name:[],
      password:[]
    });
  }

  submit(){
    this.dataService.namesubjectdata.next(this.subjectForm.value.name)
  }

  viewchild(){
    this.Subject1ComponentRef.dataInsubjectcompon=this.subjectForm.value.name;
  }

  ngAfterViewInit(){
    this.paraElementRef.nativeElement.innerHTML='konda'
    console.log(this.paraElementRef);
    
  }
}
