import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-adminsuccess',
  templateUrl: './adminsuccess.component.html',
  styleUrls: ['./adminsuccess.component.scss']
})
export class AdminsuccessComponent {
  apidata:any;
constructor(private router:Router,private dataService:DataService){}

ngOnInit(){
  this.getHotelDetails();
  
 }


 getHotelDetails(){
   this.dataService.getHDcall().subscribe((data)=>{
     this.apidata = data;
     console.log(this.apidata,'this.apidata');
     
   })
 }

 async deleteData(id:any){
  
  this.apidata = await this.dataService.deleteApi(id).toPromise()
    console.log(this.apidata ,'delete api');
    
    this.getHotelDetails();
}
}
