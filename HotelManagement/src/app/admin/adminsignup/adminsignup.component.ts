import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-adminsignup',
  templateUrl: './adminsignup.component.html',
  styleUrls: ['./adminsignup.component.scss']
})
export class AdminsignupComponent {

  adminSignUpform!:FormGroup;
  showpass=false;
  showconfirmpass=false;
  endpoint: string = "admin";
  formdata: any;

  constructor(private formBuilder:FormBuilder,private router:Router,private dataService:DataService){}

  ngOnInit(){
    this.formDetails();
  }

  showpassword(){
    this.showpass=!this.showpass;
  }
  showconfpass(){
    this.showconfirmpass=!this.showconfirmpass;
  }

  signup() {
    this.formdata = this.adminSignUpform.value
    console.log(this.formdata, "this.signUpForm");
    this.dataService.postApiCall(this.endpoint, this.adminSignUpform.value).subscribe(res => {
      this.router.navigateByUrl('/admin/adminsuccess');
    })
  }

  formDetails(){
    this.adminSignUpform=this.formBuilder.group({
      username:['',[Validators.pattern("^[a-zA-Z]+$"),Validators.required]],
      useremail:['',[Validators.required,Validators.email]],
      usermobile:['',[Validators.pattern("[7-9]{1}[0-9]{9}"),Validators.maxLength(10),Validators.minLength(10)]],
      userpass:['',[Validators.required]],
      userconfpass:['',[Validators.required]],
      gender:['other',[Validators.required]],
      userCheck:['',[Validators.requiredTrue]]
    })
  }
}
