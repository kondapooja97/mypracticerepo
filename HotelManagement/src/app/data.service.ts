import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  url = "http://localhost:3000";
  urlHotelDetails = 'http://localhost:3000/hotelDetails';
  hotelListByOwnerName: any;
  newRegistraion: boolean = false;
  getApiData: any;
  ownerName: any;
  recordById: any;
  id: any;
  adminName: any;
  userName: any;
  http: any;

  constructor(private httpClient: HttpClient) { }

  postApiCall(endpoint: any, formData: any) {
    //http://localhost:3000/owner
    let url = this.url + '/' + endpoint;
    return this.httpClient.post(url, formData)
  }
  getApiCall(endpoint: any) {
    let url = this.url + "/" + endpoint;
    return this.httpClient.get(url);
  }
  //getApi for hotel details  
  getHDcall() {
    return this.httpClient.get(this.urlHotelDetails)
  }

  deleteApi(id: any) {
    return this.httpClient.delete(this.urlHotelDetails + "/" + id)
  }

  getApiCallById(id: any) {
    return this.httpClient.get(this.urlHotelDetails + "/" + 'id')
  }
  deleteApiCallById(id: any) {
    return this.httpClient.delete(this.urlHotelDetails + "/" + 'id')
  }
  patchApiCall(endPoint: any, id: any, formData: any) {
    let url = this.url + "/" + endPoint + "/" + id;
    return this.httpClient.patch(url, formData);
  }
  deleteApiCall(endPoint:any,id:any) {
    let url = this.url + "/" + endPoint + "/" + id;
    return this.httpClient.delete(url);
  }

}
