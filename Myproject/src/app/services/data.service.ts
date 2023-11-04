import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  formUserName:any;
  inputBox:any;
  city=new Subject<any>();

  constructor() { }

  removeWhitespace(customValFieldValue: any) {
    console.log(customValFieldValue);
    let isInvalid = customValFieldValue.value ? customValFieldValue.value?.trim().length == 0 : null;
    return isInvalid ? { 'whitespace': true } : null;
  }
}
