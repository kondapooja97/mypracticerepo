import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {
  name: any;
  datafromchildCompo: any
  colors=['red','blue','orange','pink'];

  constructor(private dataService:DataService){

  }

  datafromchild(event: any) {
    console.log(event);
    this.datafromchildCompo = event;
  }
 

  setsubjectData(){
    this.dataService.city.next("Sholapur");  //set subject data
  }
}
