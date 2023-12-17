import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-ownersignup',
  templateUrl: './ownersignup.component.html',
  styleUrls: ['./ownersignup.component.scss']
})
export class OwnersignupComponent {
  signUpForm!: FormGroup;
  formdata?: any
  showpass=false;
  showconfpass=false;
  endpoint: string = "owner";
  // getApiRes?:any;
  constructor(private formBuilder: FormBuilder, private router: Router, private dataService: DataService) { }

  ngOnInit() {
    this.formValidation();
  }

  showPassword(){
    this.showpass=!this.showpass;
  }

  showconfPassword(){
    this.showconfpass=!this.showconfpass;
  }

  signUp() {
    // let endpoint="owner";
    this.formdata = this.signUpForm.value
    console.log(this.formdata, "this.signUpForm");
    this.dataService.postApiCall(this.endpoint, this.signUpForm.value).subscribe(res => {
      this.router.navigateByUrl('/owner/ownersuccess');
    })
  }
   
  formValidation() {
    this.signUpForm = this.formBuilder.group({
      userName: new FormControl('', [Validators.required, Validators.pattern("^[a-zA-Z]+$")]),
      userEmail: ['', [Validators.required, Validators.email]],
      userMob: ['', [Validators.pattern, Validators.maxLength(10), Validators.minLength(10)]],
      pan: ['', [Validators.required]],
      gender: ['Other', [Validators.required]],
      userpass: ['', [Validators.pattern, Validators.required]],
      userCheck: ['', [Validators.requiredTrue]],
      userConfirmpass: ['', [Validators.required]]
    },
      { validator: this.checkIfMatchingPasswords('userpass', 'userConfirmpass') })
  }

  checkIfMatchingPasswords(passwordKey: string, passwordConfirmationKey: string) {
    return (group: FormGroup) => {
      let passwordInput = group.controls[passwordKey],
        passwordConfirmationInput = group.controls[passwordConfirmationKey];
      if (passwordInput.value !== passwordConfirmationInput.value) {
        return passwordConfirmationInput.setErrors({ notEquivalent: true })
      }
      else {
        return passwordConfirmationInput.setErrors(null);
      }
    }
  }
}
