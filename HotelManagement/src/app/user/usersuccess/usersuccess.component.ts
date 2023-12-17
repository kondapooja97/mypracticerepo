import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-usersuccess',
  templateUrl: './usersuccess.component.html',
  styleUrls: ['./usersuccess.component.scss']
})
export class UsersuccessComponent {

  apidata: any;
  headings = ["Id", "Owner Name", "Hotel Name", "Menu", "Room Available", "Hotel Address", "Hotel Mobile","Book Hotel"];
  searchText:any;
  constructor(private dataService : DataService){}
 
  ngOnInit(){
   this.getHotelDetails();
  }
 
  getHotelDetails(){
    this.dataService.getHDcall().subscribe((data)=>{
      this.apidata = data;
      console.log(this.apidata,'this.apidata');
      
    })
  }
 
}
