import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../services/data.service';
import { ApicallService } from '../services/apicall.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent {
  inputboxValue: any;
  name: string = "pooja";
  date: string = "19-04-1992";
  studentData: any;

  constructor(private router: Router, private dataService: DataService, private apicallService: ApicallService) {

  }
  home() {
    console.log(this.inputboxValue);
    this.dataService.inputBox = this.inputboxValue;  //set
    this.router.navigateByUrl('home')
  }

  test() {
    this.router.navigateByUrl('test')
  }

  gallery() {
    this.router.navigateByUrl('gallery')
  }
  adminmod() {
    this.router.navigateByUrl('admin/adminLanding')
  }
  BlogLogin() {
    this.router.navigateByUrl('blog/blog-landing')
  }
  login() {
    this.router.navigateByUrl('login/studentLanding')
  }
  subjectbtn() {

    this.router.navigateByUrl('subjectmod/subjectlanding');
  }

  getApi() {
    this.apicallService.getApiCall().subscribe(res => {
      this.studentData = res;
      console.log("Response>>", res);
    })
  }
  deleteApi(){
    let id=3;
    this.apicallService.deleteApiCall(id).subscribe(res=>{
      console.log("delete res>>",res);
      
    })
  }

  putApi(){
    let id=8;
    this.apicallService.getApiCall(id).subscribe(rec=>{
      console.log('record of id 8 is:',rec);
      this.dataService.recordTobeUpdate=rec;
      this.dataService.idToUpdate=id;
    })
    this.router.navigateByUrl('/studentmod/studentsignup');
  }
}