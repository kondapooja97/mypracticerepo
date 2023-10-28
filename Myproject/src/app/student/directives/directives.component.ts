import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent {

  amount = 1000;  //boolean true-true; data-true; null/undefined - false;
  // amount=undefined
  age=60;
  inputValue:any
  data:any[]=[];
  color="yellow";
  showaddress: boolean = false;
  showstate: boolean = false;
  colors = ['Pink', 'Black', 'Orange', 'Green', 'Red'];
  studentsData = [
    { name: 'Aranya',age:'02', dob: '22/08/2022',city:'solapur'},
    { name: 'Sharnya', age:'03',dob:'01/09/2021',city:'pandharpur'},
    { name: 'Lavanya', age:'11',dob: '29/12/2012',city:'kolhapur' },
    { name: 'Rukshita', age:'15',dob: '05/05/2008',city:'akkalkot'}]

    tableheadings=['Name','Age','DOB','City'];

  constructor(private router: Router) { }
  
  Toshowaddress() {
    // this.showaddress = true;
    this.showaddress = !this.showaddress;
  }
  Toshowstate() {
    // this.showstate = true;
    this.showstate = !this.showstate;
  }
  inputBoxVal(){
    console.log(this.inputValue);
    this.data.push(this.inputValue)
  }
  back() {
    this.router.navigateByUrl('login/studentsuccess')
  }

}
