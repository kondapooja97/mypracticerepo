import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-hotelbooking',
  templateUrl: './hotelbooking.component.html',
  styleUrls: ['./hotelbooking.component.scss']
})
export class HotelbookingComponent {

  hotelBookingForm!:FormGroup;
  constructor(private router:Router,private formBuilder:FormBuilder,private dataservice:DataService){}

  ngOnInit(){
    this.bookingFormDetails();
  }

  bookingFormDetails(){
    this.hotelBookingForm=this.formBuilder.group({
      fname:['',[Validators.required]],
      lname: ["", [Validators.required]],
      email: ["", [Validators.required, Validators.email]],
      mobile: ["", [Validators.required]],
      arrivalDate: [""],
      departureDate: [""],
      guests: [1],
      address: [""],
      city: [""],
      state: [""],
      pin: [""],
      paymentMethod: ["other"]
    })
  }

  onSubmit(){
    console.log(this.hotelBookingForm);
    console.log(this.hotelBookingForm.value);
    alert("Hotel booked Successfully...");
  }
  hotelBookingData(){
    let endpoint="hotelBooking";
    console.log(this.hotelBookingForm.value);
    this.dataservice.postApiCall(endpoint,this.hotelBookingForm.value).subscribe(res=>{
      console.log("Responce",res);

      alert("Hotel Booked Successfully...");
      this.router.navigateByUrl("/user/usersuccess");
    })
    
  }
}
