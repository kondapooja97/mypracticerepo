import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-adminsignin',
  templateUrl: './adminsignin.component.html',
  styleUrls: ['./adminsignin.component.scss']
})
export class AdminsigninComponent {

  adminLoginform!: FormGroup;
  showpass = false;
  adminData: any;

  constructor(private formBuilder: FormBuilder, private router: Router, private dataService: DataService) { }


  ngOnInit() {
    this.formDetails();
    this.getAdminData();
  }

  formDetails() {
    this.adminLoginform = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]]
    })
  }

  showpassword() {
    this.showpass = !this.showpass;
  }

  getAdminData() {
    let endpoint = "admin";
    this.dataService.getApiCall(endpoint).subscribe(res => {
      this.adminData = res;
      console.log("Admin data", this.adminData);
    });
  }


  submit() {
    if (this.adminData) {
      var matchedObj = this.adminData.find((item: any) => {
        if (item.username == this.adminLoginform.value.username && item.userpass == this.adminLoginform.value.password) {
          return item;
        }
      });
    }
    if (matchedObj) {
      this.dataService.adminName = this.adminLoginform.value.username;
      alert('Login Successful...!');
      this.router.navigateByUrl('/admin/adminsuccess');
    }
    else {
      alert('User not found...!');
      this.router.navigateByUrl('/admin/adminsignin');
    }
  }
  
  

}
