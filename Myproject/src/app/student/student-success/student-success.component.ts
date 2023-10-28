import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-success',
  templateUrl: './student-success.component.html',
  styleUrls: ['./student-success.component.scss']
})
export class StudentSuccessComponent {

  constructor(private router:Router){}

  back(){
    this.router.navigateByUrl('/login/studentlogin')
  }

 }
