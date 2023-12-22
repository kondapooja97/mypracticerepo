import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-ownerregistration',
  templateUrl: './ownerregistration.component.html',
  styleUrls: ['./ownerregistration.component.scss']
})
export class OwnerregistrationComponent {
  regitrationForm!: FormGroup;
  showpass = false;
  id: any;
  recordById: any;
  new:any;

  constructor(private formBuilder: FormBuilder, private dataService: DataService, private router: Router) { }

  options: string[] = ['Paneer Tikka Masala', 'Paneer Butter Masala', 'Dosa', 'Mini Thali', 'Special Thali ', 'Mutton Biryani', 'Chicken Biryani', 'Gulab Jamun', 'Egg Varieties', 'Non-Veg Varieties'];

  ngOnInit() {
    this.id = this.dataService.id;
    this.recordById = this.dataService.recordById;
    this.new=this.dataService.new;
    this.formValidation();
  }

  showPassword() {
    this.showpass = !this.showpass;
  }

  formValidation() {
    this.regitrationForm = this.formBuilder.group({
      ownerName: [this.recordById ? this.recordById[0]?.ownerName : '', [Validators.required, Validators.maxLength(40)]],
      hotelName: [this.recordById ? this.recordById[0]?.hotelName : '', [Validators.required]],
      hotelAddress: [this.recordById ? this.recordById[0]?.hotelAddress : '', [Validators.required]],
      hotelMobile: [this.recordById ? this.recordById[0]?.hotelMobile : '', [Validators.pattern, Validators.maxLength(10), Validators.minLength(10)]],
      hotelMenu: [this.recordById ? this.recordById[0]?.hotelMenu : '', [Validators.required]],
      roomAvailable: [this.recordById ? this.recordById[0]?.roomAvailable : '', [Validators.required]],
      userPass: [this.recordById ? this.recordById[0]?.userPass : '', [Validators.pattern, Validators.required]],
      owenrCheck: [this.recordById ? this.recordById[0]?.owenrCheck : '', [Validators.requiredTrue]],

    })
  }
  newHotelRegistration() {
    let endpoint = "hotelDetails";
    console.log(this.regitrationForm.value);
    this.dataService.postApiCall(endpoint, this.regitrationForm.value).subscribe(res => {
      console.log("Responce:", res);
      alert('Hotel Registered Successfully...!');
      this.router.navigateByUrl('/owner/ownersuccess');
    })
  }
  update() {
    this.dataService.patchApiCall("hotelDetails",this.id,this.regitrationForm.value).subscribe(res=>{
    })
    this.router.navigateByUrl("/owner/ownersuccess");
  }
  ngOnDestroy(){
    console.log("destroy");
    this.dataService.new=false;
    this.dataService.recordById=[];
  }
}