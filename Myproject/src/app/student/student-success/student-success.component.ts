import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-student-success',
  templateUrl: './student-success.component.html',
  styleUrls: ['./student-success.component.scss']
})
export class StudentSuccessComponent {
name:any;
  constructor(private router:Router,private dataService:DataService){}

  setSubData(){
    this.dataService.city.next("Pandharpur");
  }

  back(){
    this.router.navigateByUrl('/login/studentlogin')
  }
ngOnInit(){
  this.name=this.dataService.formUserName;
}
 }
