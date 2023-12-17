import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/data.service';

@Component({
  selector: 'app-ownersuccess',
  templateUrl: './ownersuccess.component.html',
  styleUrls: ['./ownersuccess.component.scss']
})
export class OwnersuccessComponent {

  hotelDetailsByOwner!: any[];
  hotelDetails: any;
  ownerName: any;
  headings = ["Id", "Owner Name", "Hotel Name", "Menu", "Room Available", "Hotel Address", "Hotel Mobile", "Edit", "Delete"];
  showRecord: boolean = false;
  searchText:any;
  constructor(private router: Router, private dataService: DataService) { }

  ngOnInit() {
    this.ownerName = this.dataService.ownerName;
  }

  async showHotelDetails() {
    this.hotelDetailsByOwner = [];
    this.hotelDetails = await this.dataService.getApiCall("hotelDetails").toPromise()
    console.log("this.hotelDetails", this.hotelDetails);
    this.getHotelByOwner();
  }

  getHotelByOwner() {
    this.hotelDetails.forEach((ele: any) => {
      if (ele.ownerName == this.ownerName) {
        this.hotelDetailsByOwner.push(ele)
      }
    });
    if (this.hotelDetailsByOwner.length > 0) {
      this.showRecord = true;
    }
    console.log("Hotel List By Owner", this.hotelDetailsByOwner);
  }

  newHotelRegistration() {
    this.router.navigateByUrl('/owner/ownerregistration');
  }
  editData(id: any) {
    let recordById: any = [];
    console.log("id", id);
    this.hotelDetails.forEach((ele: any) => {
      if (ele.id == id) {
        recordById.push(ele);
      }
    })
    console.log("recordById", recordById);
    this.dataService.recordById = recordById
    this.dataService.id = id;

    this.router.navigateByUrl('/owner/ownerregistration')
  }

  deleteData(id: any) {
    this.dataService.deleteApiCall("hotelDetails",id).subscribe(res=>{})
    this.showHotelDetails();
  }
  // async deleteData(id: any) {
  //   return this.dataService.deleteApiCallById(id).toPromise
  // }
}


