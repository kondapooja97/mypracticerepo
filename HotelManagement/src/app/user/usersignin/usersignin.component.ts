import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';


@Component({
  selector: 'app-usersignin',
  templateUrl: './usersignin.component.html',
  styleUrls: ['./usersignin.component.scss']
})
export class UsersigninComponent {
 
  userLoginform!:FormGroup;
  showpass=false;
  userData: any;

  constructor(private formBuilder:FormBuilder,private router:Router,private dataService:DataService){}

  showpassword(){
    this.showpass=!this.showpass;
  }

ngOnInit(){
  this.formDetails();
  this.getUserData();
}

formDetails(){
  this.userLoginform=this.formBuilder.group({
    username:['',[Validators.required]],
    userpass:['',[Validators.required]]
  })
}

getUserData(){
  let endpoint="user";
  this.dataService.getApiCall(endpoint).subscribe(res=>{
    this.userData=res;
    console.log("User data",this.userData);
  });
}

submit() {
  if (this.userData) {
    var matchedObj=this.userData.find((item: any) => {
      if (item.username == this.userLoginform.value.username && item.password == this.userLoginform.value.password) {
       return item;
      }
    });
  }
  if(matchedObj){
    this.dataService.userName=this.userLoginform.value.username;
    alert('Login Successful...!');
    this.router.navigateByUrl('/user/usersuccess');
  }
  else 
  {
    alert('User not found...!');
    this.router.navigateByUrl('/user/usersignin');
  }
}

}