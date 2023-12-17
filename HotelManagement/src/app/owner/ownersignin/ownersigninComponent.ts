import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-ownersignin',
  templateUrl: './ownersignin.component.html',
  styleUrls: ['./ownersignin.component.scss']
})
export class OwnersigninComponent {
  loginForm!: FormGroup;
  showpass = false;
  ownerData: any;

  constructor(private router: Router, private dataService: DataService, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.formDetails();
    this.getOwnerData();
  }
  formDetails() {
    this.loginForm = this.formBuilder.group({
      userName: ["", [Validators.required]],
      userpass: ["", [Validators.required]]
    });
  }
  showPassword() {
    this.showpass = !this.showpass;
  }
  getOwnerData() {
    let endpoint = "owner";
    this.dataService.getApiCall(endpoint).subscribe(res => {
      this.ownerData = res;
      console.log('Owner Data', this.ownerData);

    });
  }
  //  submit(data:any){
  //    console.log(data,'data');
  //    this.signInForm = data;
  //   console.log(this.signInForm,'this.signInForm');
  //  }
  submit() {
    if (this.ownerData) {
      var matchedObj=this.ownerData.find((item: any) => {
        if (item.userName == this.loginForm.value.userName && item.userpass == this.loginForm.value.userpass) {
         return item;
        }
      });
    }
    if(matchedObj){
      this.dataService.ownerName=this.loginForm.value.userName;
      alert('Login Successful...!');
      this.router.navigateByUrl('/owner/ownersuccess');
    }
    else 
    {
      alert('User not found...!');
      this.router.navigateByUrl('/owner/ownersignin');
    }
  }
}
