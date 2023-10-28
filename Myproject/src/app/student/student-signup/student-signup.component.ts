import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-student-signup',
  templateUrl: './student-signup.component.html',
  styleUrls: ['./student-signup.component.scss']
})
export class StudentSignupComponent {
  // constructor(private route:Router){}

  studentsignupform!: FormGroup;

  todayDate = new Date();
  datePattern = /^(0[1-9]|[1-2][0-9]|3[0-1])\/(0[1-9]|1[0-2])\/\d{4}$/;
  isGenderSelected: boolean = false;
  showPass = false;

  constructor(public fb: FormBuilder, private route: Router) { }

  ngOnInit() {
    this.formDetails();
    console.log(this.todayDate);

  }

  formDetails() {
    this.studentsignupform = this.fb.group({
      username: ['', [Validators.maxLength(10), Validators.minLength(5), Validators.pattern('[a-zA-Z]+')]],
      // Password:['',[Validators.maxLength(10)]],
      password: ['', this.showPassword],
      mobileno: ['', [Validators.pattern('[0-9+]*')]],
      emailid: ['', [Validators.pattern(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/)]],
      dob: ['', [Validators.pattern(this.datePattern)]],
      gender: [''],
      TC: [false, [Validators.requiredTrue]],
      state: [''],
      customval: ['', this.removeWhitespace],
      oldfield: ['', this.oldwordRestriction]
    })
  }
  showPassword() {
    this.showPass = !this.showPass;
  }
  removeWhitespace(customValFieldValue: any) {
    console.log(customValFieldValue);
    let isInvalid = customValFieldValue.value ? customValFieldValue.value?.trim().length == 0 : null;
    return isInvalid ? { 'whitespace': true } : null;
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
}
