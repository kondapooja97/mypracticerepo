import { Component } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent {

  tableheadings=['Name','Age','DOB','City'];

  studentsData = [
    { name: 'Aranya',age:'02', dob: '22/08/2022',city:'solapur'},
    { name: 'Sharnya', age:'03',dob:'01/09/2021',city:'pandharpur'},
    { name: 'Lavanya', age:'11',dob: '29/12/2012',city:'kolhapur' },
    { name: 'Rukshita', age:'15',dob: '05/05/2008',city:'akkalkot'},
    { name: 'Aranya',age:'02', dob: '22/08/2022',city:'solapur'},
    { name: 'Sharnya', age:'03',dob:'01/09/2021',city:'pandharpur'},
    { name: 'Lavanya', age:'11',dob: '29/12/2012',city:'kolhapur' },
    { name: 'Rukshita', age:'15',dob: '05/05/2008',city:'akkalkot'}];

    searchedValue:any;
    amount:any
}
