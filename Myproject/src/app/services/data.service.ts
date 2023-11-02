import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  formUserName:any;
  inputBox:any;

  constructor() { }

  removeWhitespace(customValFieldValue: any) {
    console.log(customValFieldValue);
    let isInvalid = customValFieldValue.value ? customValFieldValue.value?.trim().length == 0 : null;
    return isInvalid ? { 'whitespace': true } : null;
  }
}
