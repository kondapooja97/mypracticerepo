import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-student-login',
  templateUrl: './student-login.component.html',
  styleUrls: ['./student-login.component.scss']
})
export class StudentLoginComponent {
  constructor(private route: Router,private dataService:DataService) { }
  userName: any
  // forGotpassword = false
  showLoginForm=true
  newPassword: any
  confirmPassword: any
  isMatch: boolean = false
  showPass=false
  conshowPassword=false

  back() {
    this.route.navigateByUrl('home')
  }
  // submit(form: any) {
  //   console.log(form);
  // }
  forgotpassword() {
    this.showLoginForm = false;
  }
  showPassword(){
    this.showPass=!this.showPass;
  }
  confirmshowPassword(){
    this.conshowPassword=!this.conshowPassword;
  }

  // passwordMatch(confirmPassword: any) {
  //   this.confirmPassword = confirmPassword
  //   if (this.newPassword == this.confirmPassword) {
  //     this.isMatch = false
  //   }
  //   else {
  //     this.isMatch = true
  //   }
  // }
  passwordMatch( newPassword: any,confirmPassword: any){
    if(newPassword == confirmPassword){
      this.isMatch=false
    }else{
      this.isMatch=true
    }
  }
  // newpasswordFieldvalue(newPassvalue: any) {
  //   this.newPassword = newPassvalue;
  // }
  // newPasswordMatch() {
  //   if (this.newPassword == this.confirmPassword) {
  //     this.isMatch = false
  //   }
  //   else {
  //     this.isMatch = true
  //   }
  // }

  submit(formdata: any) {
    console.log(formdata);
    this.dataService.formUserName=formdata.userName;
    this.route.navigateByUrl('studentmod/studentsuccess')
  }
}
