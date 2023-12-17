import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-usersignup',
  templateUrl: './usersignup.component.html',
  styleUrls: ['./usersignup.component.scss']
})
export class UsersignupComponent {
  
  userSignUpform!:FormGroup;
  showpass=false;
  showconfirmpass=false;
  formData:any
  endpoint:string="user";

  constructor(private formBuilder:FormBuilder,private dataService:DataService,private router:Router){}

  ngOnInit(){
    this.formDetails();
  }

  showpassword(){
    this.showpass=!this.showpass;
  }
  showconfpass(){
    this.showconfirmpass=!this.showconfirmpass;
  }

  signup(){
    this.formData=this.userSignUpform.value;
    console.log(this.formData,"this.userSignUpform");
    this.dataService.postApiCall(this.endpoint,this.userSignUpform.value).subscribe(res=>{
        this.router.navigateByUrl('/user/usersuccess');
    })
    
  }

  formDetails(){
    this.userSignUpform=this.formBuilder.group({
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
