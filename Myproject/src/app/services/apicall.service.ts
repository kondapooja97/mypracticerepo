import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApicallService {
 
  constructor(private httpClient: HttpClient) { }

  url = "http://localhost:3000/principal"

  postApiCall(formData: any) {
    return this.httpClient.post(this.url, formData);
  }

  getApiCall(id?:number){
    let url=id? this.url + "/" + id : this.url;
    return this.httpClient.get(url);
    }

    deleteApiCall(id : number) {
      let deleteurl=this.url + "/" + id;
      return this.httpClient.delete(deleteurl);
    }

    putApiCall(id:any,body:any) {
      let url=this.url + '/' + id;
      return this.httpClient.put(url,body)
    }
  
  }

