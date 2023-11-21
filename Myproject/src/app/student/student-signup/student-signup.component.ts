import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { ApicallService } from 'src/app/services/apicall.service';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-student-signup',
  templateUrl: './student-signup.component.html',
  styleUrls: ['./student-signup.component.scss']
})
export class StudentSignupComponent {


  studentsignupform!: FormGroup;

  todayDate = new Date();
  datePattern = /^(0[1-9]|[1-2][0-9]|3[0-1])\/(0[1-9]|1[0-2])\/\d{4}$/;
  isGenderSelected: boolean = false;
  showPass = false;
  recordToUpdate: any;
  id:any;

  constructor(public fb: FormBuilder, private route: Router, private dataService: DataService, private apiCallService: ApicallService, public router: Router) { }

  ngOnInit() {
    this.recordToUpdate = this.dataService.recordTobeUpdate;
    this.id=this.dataService.idToUpdate;
    console.log("Record update", this.recordToUpdate);

    this.formDetails();
    console.log(this.todayDate);

  }

  formDetails() {
    this.studentsignupform = this.fb.group({
      username: [this.recordToUpdate ? this.recordToUpdate.username : '', [Validators.maxLength(10), Validators.minLength(5), Validators.pattern('[a-zA-Z]+')]],
      password1: [this.recordToUpdate ? this.recordToUpdate.password1 : ''],
      // Password:['',[Validators.maxLength(10)]],
      // password: ['', this.showPassword],
      mobileno: [this.recordToUpdate ? this.recordToUpdate.mobileno : '', [Validators.pattern('[0-9+]*')]],
      emailid: [this.recordToUpdate ? this.recordToUpdate.emailid : '', [Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]],
      dob: [this.recordToUpdate ? this.recordToUpdate.dob : '', [Validators.pattern(this.datePattern)]],
      gender: [this.recordToUpdate ? this.recordToUpdate.gender : ''],
      TC: [this.recordToUpdate ? this.recordToUpdate.TC : '', [Validators.requiredTrue]],
      state: [this.recordToUpdate ? this.recordToUpdate.state  : ''],
      customval: [this.recordToUpdate ? this.recordToUpdate.customval : '', this.dataService.removeWhitespace],
      oldfield: [this.recordToUpdate ? this.recordToUpdate.oldfield : '', this.oldwordRestriction],
      characteronly:[this.recordToUpdate ? this.recordToUpdate.characteronly : '']
    })
  }
  showPassword() {
    this.showPass = !this.showPass;
  }

  oldwordRestriction(inputValue: any) {
    let inputvalue1 = inputValue.value?.toLowerCase().split(' ');
    let isoldinclude = inputvalue1.includes('old');
    return isoldinclude ? { 'oldWord': true } : null;
  }
  submit() {
    let gender = this.studentsignupform.value.gender;
    if (gender) {
      console.log('form data', this.studentsignupform.value);
      this.apiCallService.postApiCall(this.studentsignupform.value).subscribe(response => {
        console.log("res >>", response);
        if (response)
          alert('Data Submitted Successfully...');
        this.router.navigateByUrl('/studentmod/studentsuccess');
      });
    }
    else {
      this.isGenderSelected = true;
      return
    }

  }
  gender() {
    this.isGenderSelected = false;
  }

  back() {
    this.route.navigateByUrl('home')
  }
  update(){
  this.apiCallService.putApiCall(this.id,this.studentsignupform.value).subscribe(res=>{
    console.log(res);
  })
  alert('Data Updated Successfully...');
    this.router.navigateByUrl('/studentmod/studentsuccess');
  }
}
