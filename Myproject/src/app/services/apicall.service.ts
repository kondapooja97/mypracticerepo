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
}
